import type { MouseEvent } from "react";
import { prefersReducedMotion, useScrolled } from "../hooks/useReveal";
import { profile } from "../data/profile";
import { projects } from "../data/projects";

/**
 * 메뉴에서 같은 섹션을 다시 눌렀을 때를 처리한다.
 * 브라우저 기본 동작은 주소의 해시가 그대로면 아무 것도 하지 않아서,
 * 그 섹션 안에서 스크롤을 내린 뒤 같은 메뉴를 누르면 반응이 없는 것처럼 보인다.
 * 직접 이동시키고 해시는 스크롤을 다시 일으키지 않는 replaceState로만 바꾼다.
 */
function scrollToId(event: MouseEvent<HTMLAnchorElement>, id: string) {
  // 새 탭으로 열려는 조작은 가로채지 않는다
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

  const target = document.getElementById(id);
  if (!target) return; // 대상이 없으면 브라우저 기본 동작에 맡긴다

  event.preventDefault();
  target.scrollIntoView({
    behavior: prefersReducedMotion() ? "auto" : "smooth",
    block: "start",
  });
  history.replaceState(null, "", `#${id}`);
}

/** 상단 고정 바. 맨 위에서는 투명하고, 스크롤을 시작하면 배경과 경계선이 생긴다. */
export function Nav() {
  const scrolled = useScrolled();

  const link = (id: string, label: string) => (
    <a key={id} href={`#${id}`} onClick={(e) => scrollToId(e, id)}>
      {label}
    </a>
  );

  return (
    <nav className={`nav${scrolled ? " is-stuck" : ""}`}>
      <div className="nav__inner">
        <a
          className="nav__name"
          href="#top"
          onClick={(e) => scrollToId(e, "top")}
        >
          {profile.name}
        </a>
        <div className="nav__links">
          {link("summary", "요약")}
          {projects.map((project) => link(project.id, project.navLabel))}
          {link("stack", "기술 스택")}
        </div>
      </div>
    </nav>
  );
}
