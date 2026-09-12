import type { MetaRow } from "../types";

export const techStack: readonly MetaRow[] = [
  {
    label: "Frontend",
    value: "React, Next.js (App Router), TypeScript, JavaScript",
  },
  { label: "상태 관리", value: "TanStack Query, Zustand" },
  {
    label: "스타일과 모션",
    value: "Tailwind CSS(디자인 토큰), Emotion, Framer Motion",
  },
  { label: "실시간", value: "WebSocket, STOMP, SharedWorker" },
  {
    label: "AI와 자동화",
    value: "MCP 서버 구현, 로컬 LLM, Dify, Figma REST API",
  },
  {
    label: "Backend",
    value: "Java 17, Spring Boot, Spring Data JPA, Thymeleaf(SSR), H2, Kafka",
  },
  { label: "데이터 트래킹", value: "GA4, GTM, A/B 테스트" },
  { label: "도구와 인프라", value: "Git/GitHub, AWS, Docker" },
];

export const history: readonly MetaRow[] = [
  {
    label: "경력",
    value:
      "신한투자증권 ICT 기획운영부 인턴 (2026.07.27~09.04)\n" +
      "에코마케팅 마케팅테크팀 프론트엔드 개발 (2024.05.24~2025.12.24)",
  },
  {
    label: "교육",
    value:
      "신한투자증권 프로디지털아카데미 7기 (금융 플랫폼, 클라우드, 풀스택, 970시간)\n" +
      "UI/UX 반응형 웹디자인 및 프론트엔드 개발 과정 (760시간)",
  },
  {
    label: "학력",
    value: "경희대학교 글로벌커뮤니케이션학부 학사. GPA 4.02 / 4.5",
  },
  {
    label: "자격",
    value:
      "정보처리기사, AWS Certified Solutions Architect – Associate, 웹디자인기능사, OPIc IH",
  },
];
