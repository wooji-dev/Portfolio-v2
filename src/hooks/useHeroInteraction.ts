import { useEffect, useRef } from "react";

export function useHeroInteraction(motion: boolean) {
  const heroRef = useRef<HTMLElement>(null);
  const spinRef = useRef<HTMLSpanElement>(null);
  const turns = useRef(0);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || !motion) return;

    const finePointer = window.matchMedia("(pointer: fine)");
    let frame = 0;
    let pointer: { x: number; y: number } | undefined;

    function update() {
      frame = 0;
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -rect.top / rect.height));
      const desktop = window.innerWidth > 760;
      const x =
        pointer && desktop ? (pointer.x - rect.left) / rect.width - 0.5 : 0;
      const y =
        pointer && desktop ? (pointer.y - rect.top) / rect.height - 0.5 : 0;

      hero.style.setProperty("--pointer-x", `${x * 48}px`);
      hero.style.setProperty("--pointer-y", `${y * 32}px`);
      hero.style.setProperty("--tilt-x", `${-y * 18}deg`);
      hero.style.setProperty("--tilt-y", `${x * 24}deg`);
      hero.style.setProperty("--title-x", `${-x * 6}px`);
      hero.style.setProperty(
        "--scroll-art",
        `${-progress * (desktop ? 65 : 20)}px`,
      );
      hero.style.setProperty("--scroll-turn", `${progress * 32}deg`);
      hero.style.setProperty("--scroll-title", `${-progress * 18}px`);
      hero.style.setProperty(
        "--scroll-line",
        `${progress * (desktop ? 24 : 6)}px`,
      );
      hero.style.setProperty("--hero-progress", String(progress));
    }

    function schedule() {
      if (!frame) frame = window.requestAnimationFrame(update);
    }
    function move(event: PointerEvent) {
      if (!finePointer.matches || event.pointerType === "touch") return;
      pointer = { x: event.clientX, y: event.clientY };
      schedule();
    }
    function resetPointer() {
      pointer = undefined;
      schedule();
    }
    // One render per input frame; no animation loop runs while the page is idle.
    hero.addEventListener("pointermove", move, { passive: true });
    hero.addEventListener("pointerleave", resetPointer);
    window.addEventListener("scroll", resetPointer, { passive: true });
    window.addEventListener("resize", resetPointer);
    schedule();

    return () => {
      window.cancelAnimationFrame(frame);
      hero.removeEventListener("pointermove", move);
      hero.removeEventListener("pointerleave", resetPointer);
      window.removeEventListener("scroll", resetPointer);
      window.removeEventListener("resize", resetPointer);
      hero.removeAttribute("style");
    };
  }, [motion]);

  useEffect(() => {
    if (!motion) {
      turns.current = 0;
      spinRef.current?.style.removeProperty("--spin");
    }
  }, [motion]);

  function spinArt() {
    if (!motion) return;
    turns.current += 1;
    spinRef.current?.style.setProperty("--spin", `${turns.current * 360}deg`);
  }

  return { heroRef, spinRef, spinArt };
}
