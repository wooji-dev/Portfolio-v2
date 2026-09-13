import { useEffect, useRef, useState } from "react";
import { projects } from "./data/projects";
import { profile } from "./data/profile";
import { HeroPlayground } from "./components/HeroPlayground";
import { useHeroInteraction } from "./hooks/useHeroInteraction";
import type { Project } from "./types";

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;
const filters = [
  "All work",
  "Finance",
  "AI & Automation",
  "Web & Data",
] as const;
const stackGroups = [
  {
    title: "Interfaces",
    number: "01",
    description: "사용자의 다음 행동이 자연스럽도록.",
    skills: ["React", "Next.js", "TypeScript", "TanStack Query", "Zustand"],
  },
  {
    title: "Systems",
    number: "02",
    description: "거래와 데이터가 일관되게 이어지도록.",
    skills: ["Java", "Spring Boot", "PostgreSQL", "Redis", "WebSocket"],
  },
  {
    title: "Intelligence",
    number: "03",
    description: "반복 작업을 줄이고 판단을 돕도록.",
    skills: ["MCP", "Dify", "LLM API", "Figma REST API", "GA4 / GTM"],
  },
  {
    title: "Delivery",
    number: "04",
    description: "작성한 코드가 실제로 동작하도록.",
    skills: ["AWS", "Docker", "GitHub Actions", "Git", "CI / CD"],
  },
];

function Arrow({
  diagonal = false,
  className = "",
}: {
  diagonal?: boolean;
  className?: string;
}) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={diagonal ? "M5 19 19 5M5 5h14v14" : "M4 12h16m-6-6 6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  if (project.id === "pocketstock")
    return (
      <div className="project-visual pocket-visual" aria-hidden="true">
        <div className="phone-pair">
          <img
            src={asset("shots/pocketstock-1.jpg")}
            alt=""
            width="540"
            height="1174"
            loading="lazy"
          />
          <img
            src={asset("shots/pocketstock-2.jpg")}
            alt=""
            width="540"
            height="1174"
            loading="lazy"
          />
        </div>
      </div>
    );
  if (project.id === "aiops" || project.id === "solmate")
    return (
      <div
        className={`project-visual screen-visual ${project.id}-visual`}
        aria-hidden="true"
      >
        <img
          src={asset(
            project.id === "aiops"
              ? "imgs/aiops-dashboard.png"
              : "imgs/solmate-desktop.png",
          )}
          alt=""
          width={project.id === "aiops" ? 904 : 2880}
          height={project.id === "aiops" ? 597 : 1800}
          loading="lazy"
        />
      </div>
    );
  if (project.id === "mcp")
    return (
      <div
        className="project-visual legacy-visual mcp-visual"
        aria-hidden="true"
      >
        <div className="mcp-path">
          <span className="figma-mark">
            <i />
            <i />
            <i />
            <i />
            <i />
          </span>
          <span className="path-line" />
          <span className="code-mark">&lt;/&gt;</span>
        </div>
        <div className="mcp-legend">
          <span>DESIGN</span>
          <span>7 TOOLS</span>
          <span>CODE</span>
        </div>
        <span className="visual-caption">
          FIGMA REST API × MODEL CONTEXT PROTOCOL
        </span>
      </div>
    );
  if (project.id === "elo")
    return (
      <div
        className="project-visual legacy-visual elo-visual"
        aria-hidden="true"
      >
        <div className="test-columns">
          <div>
            <span>CONTROL</span>
            <b>A</b>
            <div className="test-bar" />
            <strong>2.7%</strong>
          </div>
          <div>
            <span>VARIANT</span>
            <b>B</b>
            <div className="test-bar" />
            <strong>3.9%</strong>
          </div>
        </div>
        <span className="visual-caption">
          고객 데이터 기반 개선 과정의 전환율
        </span>
      </div>
    );
  if (project.id === "solvps")
    return (
      <div
        className="project-visual legacy-visual solvps-visual"
        aria-hidden="true"
      >
        <div className="code-window">
          <div className="window-dots">
            <i />
            <i />
            <i />
            <span>learning.ts</span>
          </div>
          <code>
            <span className="code-purple">const</span> nextStep ={" "}
            <span className="code-green">await</span>
            <br />
            &nbsp; learning.<span className="code-blue">analyze</span>({"{"}
            <br />
            &nbsp;&nbsp; history:{" "}
            <span className="code-green">yourSolutions</span>,<br />
            &nbsp;&nbsp; direction:{" "}
            <span className="code-orange">'forward'</span>
            <br />
            &nbsp;{"}"});
            <br />
            <span className="code-comment">// keep solving, together.</span>
          </code>
        </div>
        <span className="visual-caption">
          학습 분석 흐름을 표현한 개념 코드
        </span>
      </div>
    );
  return (
    <div className="project-visual paytrace-visual" aria-hidden="true">
      <span>PayTrace</span>
      <Arrow diagonal />
    </div>
  );
}

function CaseStudy({
  project,
  onClose,
  motion,
}: {
  project: Project | undefined;
  onClose: () => void;
  motion: boolean;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const element = dialog.current;
    if (!project || !element) return;
    element.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      element.close();
      document.body.style.overflow = previous;
    };
  }, [project]);
  useEffect(() => {
    if (!motion)
      dialog.current
        ?.querySelectorAll("video")
        .forEach((video) => video.pause());
  }, [motion, project]);
  if (!project) return null;
  return (
    <dialog
      ref={dialog}
      className="case-dialog"
      aria-labelledby="case-title"
      onCancel={onClose}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === dialog.current) onClose();
      }}
    >
      <div className="case-shell">
        <div className="case-toolbar">
          <span className="eyebrow">PROJECT NOTES / {project.year}</span>
          <button
            type="button"
            className="close-button"
            onClick={onClose}
            autoFocus
            aria-label="프로젝트 상세 닫기"
          >
            <span>Close</span>
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <header className="case-header">
          <span className="eyebrow">{project.category}</span>
          <h2 id="case-title">{project.eyebrow}</h2>
          <p>{project.lede}</p>
          <span className="case-highlight">{project.highlight}</span>
        </header>
        <dl className="case-meta">
          {project.meta.map((row) => (
            <div key={row.label}>
              <dt>{row.label}</dt>
              <dd>{row.value}</dd>
            </div>
          ))}
        </dl>
        {project.slots.length > 0 && (
          <div className={`case-gallery gallery-${project.slotLayout}`}>
            {project.slots.map((slot) => (
              <figure
                key={slot.title}
                className={`${slot.kind === "phone" ? "media-phone" : ""} ${slot.span === "full" ? "gallery-full" : ""}`}
              >
                {slot.video ? (
                  <video
                    controls
                    playsInline
                    preload="none"
                    poster={slot.poster ? asset(slot.poster) : undefined}
                    width={slot.size?.w}
                    height={slot.size?.h}
                    aria-label={slot.alt || slot.title}
                  >
                    {slot.video.webm && (
                      <source src={asset(slot.video.webm)} type="video/webm" />
                    )}
                    <source src={asset(slot.video.mp4)} type="video/mp4" />
                    영상을 지원하는 브라우저에서 확인해 주세요.
                  </video>
                ) : (
                  slot.src && (
                    <img
                      src={asset(slot.src)}
                      alt={slot.alt || slot.title}
                      width={slot.size?.w}
                      height={slot.size?.h}
                      loading="lazy"
                    />
                  )
                )}
                <figcaption>{slot.title}</figcaption>
              </figure>
            ))}
          </div>
        )}
        <div className="case-body">
          {project.blocks.map((block, index) => (
            <section key={block.heading}>
              <div className="case-section-label">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{block.heading}</h3>
              </div>
              <div>
                {block.paragraphs.map((paragraph, i) => (
                  <p key={i}>
                    {typeof paragraph === "string" ? (
                      paragraph
                    ) : (
                      <>
                        <strong>{paragraph.lead}</strong> {paragraph.text}
                      </>
                    )}
                  </p>
                ))}
                {block.bullets && (
                  <ul>
                    {block.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </div>
        <div className="case-bottom">
          <p>{project.insight}</p>
          {project.github && (
            <a
              href={project.github}
              className="pill-button dark-button"
              target="_blank"
              rel="noreferrer"
            >
              GitHub에서 보기 <Arrow diagonal />
            </a>
          )}
        </div>
      </div>
    </dialog>
  );
}

export default function App() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All work");
  const [activeId, setActiveId] = useState<string>();
  const [menuOpen, setMenuOpen] = useState(false);
  const [motion, setMotion] = useState(
    () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const { heroRef } = useHeroInteraction(motion);
  const copyTimeout = useRef<ReturnType<typeof setTimeout>>();
  const activeProject = projects.find((project) => project.id === activeId);
  const visibleProjects = projects.filter(
    (project) =>
      project.id !== "paytrace" &&
      (filter === "All work" || project.category === filter),
  );
  const showPayTrace = filter === "All work" || filter === "Finance";

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const change = () => setMotion(!media.matches);
    media.addEventListener("change", change);
    return () => {
      media.removeEventListener("change", change);
      clearTimeout(copyTimeout.current);
    };
  }, []);
  useEffect(() => {
    document.documentElement.dataset.motion = motion ? "on" : "off";
  }, [motion]);
  useEffect(() => {
    const readHash = () => {
      const hash = window.location.hash.slice(1);
      setActiveId(
        projects.some((project) => project.id === hash) ? hash : undefined,
      );
      const legacy: Record<string, string> = {
        summary: "work",
        stack: "about",
        history: "experience",
      };
      if (legacy[hash]) document.getElementById(legacy[hash])?.scrollIntoView();
    };
    readHash();
    window.addEventListener("hashchange", readHash);
    return () => window.removeEventListener("hashchange", readHash);
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -55% 0px" },
    );
    document
      .querySelectorAll("main > section[id], footer[id]")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!motion) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.06 },
    );
    document.querySelectorAll("[data-reveal]").forEach((element) => {
      if (element.getBoundingClientRect().top > window.innerHeight) {
        element.classList.add("will-reveal");
        observer.observe(element);
      }
    });
    return () => {
      observer.disconnect();
      document
        .querySelectorAll(".will-reveal")
        .forEach((element) => element.classList.remove("will-reveal"));
    };
  }, [filter, motion]);

  function openProject(project: Project | undefined) {
    if (!project) return;
    setActiveId(project.id);
    window.location.hash = project.id;
  }
  function closeProject() {
    setActiveId(undefined);
    if (projects.some((project) => `#${project.id}` === window.location.hash))
      window.history.replaceState(null, "", "#work");
  }
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      clearTimeout(copyTimeout.current);
      copyTimeout.current = setTimeout(() => setCopied(false), 6000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }
  const navLinks = [
    ["work", "Work"],
    ["about", "About"],
    ["experience", "Journey"],
    ["contact", "Contact"],
  ];
  return (
    <>
      <a href="#work" className="skip-link">
        프로젝트로 건너뛰기
      </a>
      <header className="site-header">
        <a href="#top" className="wordmark" aria-label="우정인 포트폴리오 홈">
          wooji<span>.</span>
        </a>
        <nav className="desktop-nav" aria-label="메인 메뉴">
          {navLinks.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={activeSection === id ? "location" : undefined}
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          className="header-github"
          href={profile.github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub <Arrow diagonal />
        </a>
        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
        >
          {menuOpen ? "Close −" : "Menu +"}
        </button>
      </header>
      {menuOpen && (
        <nav
          id="mobile-menu"
          className="mobile-nav"
          aria-label="모바일 메뉴"
          onKeyDown={(e) => {
            if (e.key === "Escape") setMenuOpen(false);
          }}
        >
          {navLinks.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
              {label}
              <Arrow diagonal />
            </a>
          ))}
        </nav>
      )}
      <main>
        <section className="hero" id="top" ref={heroRef}>
          <div className="hero-topline">
            <span>
              JUNGIN WOO <span className="muted">/</span> FULL-STACK DEVELOPER
            </span>
            <span>SEOUL, KR · 2026</span>
          </div>
          <div className="hero-main">
            <h1>
              <span className="hero-line">
                <span>Built with care.</span>
              </span>
              <span className="hero-line">
                <span>
                  Made to <em>work.</em>
                </span>
              </span>
            </h1>
            <HeroPlayground motion={motion} />
          </div>
          <div className="hero-intro">
            <p>
              사용하기 쉬운 화면부터 안정적인 서비스까지.
              <br />
              프론트엔드와 백엔드를 연결하는 개발자 <strong>우정인</strong>
              입니다.
            </p>
            <div className="hero-actions">
              <a href="#work" className="pill-button primary-button">
                프로젝트 살펴보기 <Arrow />
              </a>
              <a href="#about" className="text-link">
                소개 보기
              </a>
            </div>
          </div>
          <div className="hero-bottom">
            <span>INTERFACES / SYSTEMS / AI & AUTOMATION</span>
            <button
              type="button"
              className="motion-toggle"
              onClick={() => setMotion(!motion)}
              aria-pressed={motion}
              aria-label={motion ? "모션 끄기" : "모션 켜기"}
            >
              <span className="motion-indicator" aria-hidden="true" /> Motion{" "}
              {motion ? "on" : "off"}
            </button>
          </div>
        </section>
        <section className="work-section section-pad" id="work">
          <div className="section-heading" data-reveal>
            <div>
              <span className="eyebrow">01 / SELECTED WORK</span>
              <h2>
                Selected <em>work.</em>
              </h2>
            </div>
            <p>
              직접 만들고, 연결하고, 개선한 것들.
              <br />
              프로젝트에서 맡은 역할과 구현 과정을 소개합니다.
            </p>
          </div>
          <div className="work-controls">
            <div
              className="filter-list"
              role="group"
              aria-label="프로젝트 분야"
            >
              {filters.map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() => setFilter(item)}
                  aria-pressed={filter === item}
                >
                  {item}
                  {item === "All work" && <sup>07</sup>}
                </button>
              ))}
            </div>
            <span className="work-count" aria-live="polite">
              {String(visibleProjects.length + (showPayTrace ? 1 : 0)).padStart(
                2,
                "0",
              )}{" "}
              PROJECTS
            </span>
          </div>
          <div className="project-grid">
            {visibleProjects.map((project) => (
              <article key={project.id} className="project-card" data-reveal>
                <button
                  type="button"
                  className="project-card-button"
                  onClick={() => openProject(project)}
                  aria-label={`${project.eyebrow} 프로젝트 상세 보기`}
                >
                  <div className="project-image-wrap">
                    <ProjectVisual project={project} />
                    <span className="card-view">
                      <Arrow diagonal />
                    </span>
                    <span
                      className={`card-category ${project.id === "solvps" ? "is-light" : ""}`}
                    >
                      {project.category}
                    </span>
                  </div>
                  <div className="project-title-row">
                    <h3>
                      <span className="project-index">
                        {String(projects.indexOf(project) + 1).padStart(2, "0")}
                      </span>
                      {project.eyebrow}
                    </h3>
                    <span>{project.year}</span>
                  </div>
                  <p className="project-desc">{project.shortDescription}</p>
                  <div className="project-tags">
                    {project.tags?.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </button>
              </article>
            ))}
          </div>
          {showPayTrace && (
            <button
              type="button"
              className="archive-project"
              onClick={() => openProject(projects[6])}
            >
              <span className="eyebrow">07 / MORE EXPLORATIONS</span>
              <strong>PayTrace</strong>
              <span>생활 지출 기반 신용 보조지표 MVP</span>
              <Arrow diagonal />
            </button>
          )}
        </section>
        <section className="about-section section-pad" id="about">
          <div className="about-intro" data-reveal>
            <div>
              <span className="eyebrow">02 / ABOUT ME</span>
              <h2 className="about-title">
                A little
                <br />
                <em>about me.</em>
              </h2>
              <span className="about-name">
                우정인 <span>JUNGIN WOO</span>
              </span>
            </div>
            <div>
              <h3 className="about-statement">
                화면 너머의 흐름까지 살핍니다.
              </h3>
              <p>
                커머스 프론트엔드 개발로 시작해 금융 플랫폼의 거래 처리와 AI
                자동화로 개발 범위를 넓혀왔습니다. 화면에서 시작한 요청이
                서버에서 처리되고 데이터로 남는 과정을 함께 살핍니다.
              </p>
              <p>
                약 20개 자사몰과 광고주 쇼핑몰을 개발하며 고객 행동 데이터를
                바탕으로 화면을 개선했습니다. 이후 모의투자, 소수점 투자, 로그
                분석 프로젝트에서 실시간 데이터와 거래 인증을 다뤘습니다.
              </p>
              <a
                href={profile.github}
                className="text-link"
                target="_blank"
                rel="noreferrer"
              >
                코드와 기록 살펴보기 <Arrow diagonal />
              </a>
            </div>
          </div>
          <div className="stack-heading">
            <span className="eyebrow">MY TOOLKIT</span>
            <span>문제에 맞는 기술을 선택합니다.</span>
          </div>
          <div className="stack-grid">
            {stackGroups.map((group) => (
              <article className="stack-card" key={group.title} data-reveal>
                <span className="stack-number">{group.number} /</span>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <ul>
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
        <section className="journey-section section-pad" id="experience">
          <div className="section-heading" data-reveal>
            <div>
              <span className="eyebrow">03 / THE JOURNEY</span>
              <h2>
                The path
                <br />
                <em>so far.</em>
              </h2>
            </div>
            <p>
              사용자를 이해하는 일에서
              <br />
              서비스의 구조를 설계하는 일까지.
            </p>
          </div>
          <div className="journey-content">
            <div className="journey-list">
              {[
                {
                  date: "2026.07 — 2026.09",
                  company: "신한투자증권",
                  role: "ICT기획운영부 인턴",
                  description:
                    "금융 IT 운영 환경에서 로그 분석 AI Agent 기획, 설계, 개발 및 최종 발표.",
                  tag: "EXPERIENCE",
                },
                {
                  date: "2025.12 — 2026.07",
                  company: "프로디지털아카데미 7기",
                  role: "신한투자증권 / 970시간 수료",
                  description:
                    "금융 플랫폼과 클라우드, 풀스택 개발 학습. Pocket Stock 최종 프로젝트 최우수상.",
                  tag: "EDUCATION",
                },
                {
                  date: "2024.05 — 2025.12",
                  company: "에코마케팅",
                  role: "마케팅테크팀 프론트엔드 개발",
                  description:
                    "자사몰 개발, 데이터 트래킹, A/B 테스트 플랫폼과 Figma MCP 자동화 도구 개발.",
                  tag: "EXPERIENCE",
                },
                {
                  date: "2023.10 — 2024.03",
                  company: "그린컴퓨터아카데미",
                  role: "UI/UX 반응형 웹디자인 및 웹퍼블리셔 / 760시간 수료",
                  description:
                    "웹 표준과 반응형 UI, JavaScript 및 프론트엔드 프로젝트 학습.",
                  tag: "EDUCATION",
                },
                {
                  date: "2021.03 — 2023.06",
                  company: "대한민국 육군",
                  role: "공보정훈 / 홍보문화장교, 중위 만기전역",
                  description:
                    "장병 교육과 군 행사 기획 및 운영, 홍보 업무 담당. 군 인트라넷 UI 개선 공모전 참여.",
                  tag: "EXPERIENCE",
                },
                {
                  date: "2017.03 — 2021.02",
                  company: "경희대학교",
                  role: "글로벌커뮤니케이션학부 학사",
                  description: "GPA 4.02 / 4.5",
                  tag: "EDUCATION",
                },
              ].map((item) => (
                <article key={item.company} className="journey-row" data-reveal>
                  <div className="journey-date">
                    {item.date}
                    <span>{item.tag}</span>
                  </div>
                  <div>
                    <h3>{item.company}</h3>
                    <p className="journey-role">{item.role}</p>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="credentials" data-reveal>
              <span className="eyebrow">CERTIFICATIONS</span>
              <div>
                <span>
                  정보처리기사 <small>2026.09</small>
                </span>
                <span>
                  AWS Solutions Architect – Associate <small>2026.02</small>
                </span>
                <span>
                  웹디자인기능사 <small>2024.04</small>
                </span>
                <span>
                  OPIc IH <small>2025.03</small>
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="contact-section section-pad" id="contact">
        <div className="contact-top">
          <span className="eyebrow">04 / LET’S CONNECT</span>
          <a href="#top" className="back-top" aria-label="맨 위로">
            BACK TO TOP ↑
          </a>
        </div>
        <a className="contact-title" href={`mailto:${profile.email}`}>
          Have something
          <br />
          <em>in mind?</em>
          <Arrow diagonal />
        </a>
        <div className="contact-links">
          <div>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <button
              type="button"
              onClick={copyEmail}
              aria-label="이메일 주소 복사"
            >
              {copied ? "복사 완료 ✓" : "주소 복사 +"}
            </button>
            <span className="sr-only" role="status">
              {copied ? "이메일 주소를 복사했습니다." : ""}
            </span>
          </div>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub <Arrow diagonal />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 JUNGIN WOO</span>
          <span>기획하고, 만들고, 개선합니다.</span>
          <span>BUILT WITH CARE.</span>
        </div>
      </footer>
      <CaseStudy
        project={activeProject}
        onClose={closeProject}
        motion={motion}
      />
    </>
  );
}
