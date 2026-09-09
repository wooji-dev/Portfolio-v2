import { useEffect, useLayoutEffect, useRef, useState } from "react";

const REDUCED = "(prefers-reduced-motion: reduce)";

export function prefersReducedMotion(): boolean {
  return typeof window !== "undefined" && window.matchMedia(REDUCED).matches;
}

/**
 * 스크롤 등장 효과.
 *
 * 기본 상태는 '보임'이다. 첫 화면 밖에 있는 요소에만 will-reveal 클래스를 붙이므로
 * 스크립트가 실패하거나 인쇄할 때도 내용이 사라지지 않는다.
 * 모션을 줄이도록 설정한 환경에서는 아무 것도 하지 않는다.
 */
export function useReveal<T extends HTMLElement>(delayMs = 0) {
  const ref = useRef<T>(null);
  const armed = useRef(false);

  // 화면에 그려지기 전에 숨겨야 깜빡임이 없다.
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    if (el.getBoundingClientRect().top <= window.innerHeight * 0.9) return;
    el.classList.add("will-reveal");
    if (delayMs) el.style.transitionDelay = `${delayMs}ms`;
    armed.current = true;
  }, [delayMs]);

  useEffect(() => {
    const el = ref.current;
    if (!el || !armed.current) return;

    const show = () => el.classList.add("is-in");

    if (!("IntersectionObserver" in window)) {
      show();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          show();
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 },
    );
    io.observe(el);

    // 관찰이 어떤 이유로든 동작하지 않으면 2초 뒤 그냥 보여준다.
    const timer = window.setTimeout(show, 2000);

    return () => {
      io.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  return ref;
}

/** 스크롤이 맨 위를 벗어났는지. 상단 바 배경 전환에 쓴다. */
export function useScrolled(threshold = 8): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
