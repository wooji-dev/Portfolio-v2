import type { Project } from "../types";

// Source: Notion experience record, read 2026-09-12. See docs/content-sources.md.
export const projects: readonly Project[] = [
  {
    id: "pocketstock",
    navLabel: "Pocket Stock",
    eyebrow: "Pocket Stock",
    category: "Finance",
    year: "2026",
    headline: "작은 잔돈이\n투자가 되는 경험",
    shortDescription:
      "잔돈과 포인트를 모으는 소수점 투자 웹앱. 전 화면과 거래 인증을 개발했습니다.",
    lede: "카드 결제 잔돈과 포인트로 소수점 주식에 투자하는 모바일 중심 웹앱입니다. 프론트엔드 전체와 User / Security 백엔드, 거래 인증을 맡았습니다.",
    tone: "light",
    slotLayout: "phone",
    tags: ["Next.js", "TypeScript", "Spring Boot"],
    github: "https://github.com/PocketStock-PDA",
    highlight: "최종 프로젝트 최우수상",
    slots: [1, 2, 3].map((n) => ({
      kind: "phone" as const,
      title:
        ["홈과 잔돈 적립", "트레이딩", "포트폴리오"][n - 1] ?? "서비스 화면",
      hint: "실제 서비스 화면",
      size: { w: 540, h: 1174 },
      video: {
        webm: `shots/pocketstock-${n}.webm`,
        mp4: `shots/pocketstock-${n}.mp4`,
      },
      poster: `shots/pocketstock-${n}.jpg`,
      alt: `Pocket Stock ${["홈", "트레이딩", "포트폴리오"][n - 1]} 화면`,
    })),
    meta: [
      { label: "기간", value: "2026.05.28 — 2026.07.02" },
      {
        label: "환경",
        value: "신한투자증권 프로디지털아카데미 7기 / 팀 프로젝트",
      },
      {
        label: "담당",
        value: "프론트엔드 전담, User / Security 백엔드, 거래 인증",
      },
      {
        label: "기술",
        value:
          "Next.js 15, TanStack Query, Zustand, decimal.js, Java 17, Spring Boot, MySQL, Redis",
      },
    ],
    blocks: [
      {
        heading: "문제",
        paragraphs: [
          "금융 화면은 소수점 금액의 오차와 중복 요청을 함께 고려해야 합니다. 주문이나 송금 요청이 실패했을 때 자동으로 다시 보내면 의도하지 않은 거래로 이어질 수 있습니다.",
        ],
      },
      {
        heading: "구현",
        paragraphs: [
          "인증, 홈, 자산, 포트폴리오, 가계부, 트레이딩, CMA, 환전 등 전 화면을 구현했습니다. 서버 상태는 TanStack Query, 화면 상태는 Zustand로 나누고 데이터 종류별 캐시 정책을 적용했습니다.",
          "금액 계산을 decimal.js로 통일했습니다. 주문과 송금 요청의 자동 재시도를 비활성화하고 중복 요청을 방지했습니다. HttpOnly 쿠키와 CSRF 대응 헤더, 서버 전용 환경변수 분리를 적용했습니다.",
        ],
      },
      {
        heading: "거래 인증",
        paragraphs: [
          "Servlet Filter 기반 JWT 인증과 Redis 세션 기반 거래 인증을 구현했습니다. KEEP과 ONCE를 구분하고 getAndDelete로 일회성 인증값을 원자적으로 소비하도록 했습니다. 인증 모듈은 core와 ledger 앱이 함께 사용하도록 분리했습니다.",
        ],
      },
      {
        heading: "결과",
        paragraphs: [
          "모바일 웹앱의 전 화면과 거래 인증 흐름을 연결했습니다. 팀은 2026년 7월 2일 최종 프로젝트 발표회에서 최우수상을 받았습니다.",
        ],
      },
    ],
    insight: "금액 계산, 상태 관리, 거래 인증을 화면 개발과 함께 설계했습니다.",
  },
  {
    id: "aiops",
    navLabel: "AIOps Agent",
    eyebrow: "AIOps Agent",
    category: "AI & Automation",
    year: "2026",
    headline: "운영 로그에\n판단의 근거를 더하다",
    shortDescription:
      "룰 기반 판별과 비동기 LLM 분석을 분리한 로그 분석 AI Agent.",
    lede: "Tmax TP 로그의 에러와 위험도를 판별하고 15분 단위 이상 패턴을 확인하는 사내 AI Agent입니다. 기획부터 설계, 개발, 최종 발표까지 단독 수행했습니다.",
    tone: "grey",
    slotLayout: "single",
    tags: ["Java", "Spring Boot", "Dify"],
    github: "https://github.com/wooji-dev/AIOps",
    highlight: "기획부터 발표까지 단독 수행",
    slots: [
      {
        kind: "natural",
        title: "운영 대시보드",
        hint: "실제 프로젝트 캡처",
        src: "imgs/aiops-dashboard.png",
        size: { w: 904, h: 597 },
        alt: "위험도와 이상 패턴의 근거를 확인하는 AIOps 대시보드",
      },
      {
        kind: "natural",
        title: "미등록 로그 판별",
        hint: "Dify 워크플로우",
        src: "imgs/aiops-dify-1.png",
        size: { w: 1760, h: 424 },
      },
      {
        kind: "natural",
        title: "이상 패턴 분석",
        hint: "Dify 워크플로우",
        src: "imgs/aiops-dify-2.png",
        size: { w: 1762, h: 394 },
      },
    ],
    meta: [
      { label: "기간", value: "2026.07.27 — 2026.09.04" },
      { label: "환경", value: "신한투자증권 ICT기획운영부 인턴 프로젝트" },
      { label: "담당", value: "기획, 설계, 개발, 최종 발표 단독 수행" },
      {
        label: "기술",
        value:
          "Java 17, Spring Boot 3.5.5, Thymeleaf, JPA, H2, Dify, Ollama qwen3:8b",
      },
    ],
    blocks: [
      {
        heading: "문제",
        paragraphs: [
          "등급 구분 없이 전달되는 알림 속에 중요한 로그가 묻혔습니다. 에러 사전과 매뉴얼이 로그에 연결되지 않아 같은 에러도 담당자가 매번 다시 확인해야 했습니다. 단건 로그를 시간 단위로 묶어 패턴을 살펴볼 흐름도 필요했습니다.",
        ],
      },
      {
        heading: "설계",
        paragraphs: [
          "로그 수신, 사전 조회, 룰 기반 위험도 계산, 저장, 화면 출력을 주 처리 경로로 구성했습니다. 미등록 로그의 LLM 검토는 비동기로 분리하고 운영자가 승인한 내용만 사전에 등록하도록 했습니다.",
          "15분 집계 분석에는 LLM과 보조 룰을 연결했습니다. 타임아웃, 유계 큐와 매뉴얼 폴백을 적용하고, 6개 화면에서 원본 로그와 판정 근거를 함께 확인할 수 있게 했습니다.",
        ],
      },
      {
        heading: "지연과 검증",
        paragraphs: [
          "개발 환경에서 최대 392초의 판별 지연을 분석했습니다. 사고 토큰을 줄이고 모델 유지 시간을 조정했으며, 타임아웃과 비동기 분리로 지연이 주 처리 경로에 미치는 영향을 줄이도록 구성했습니다.",
          "시나리오 10종의 로그 시뮬레이터를 만들어 파이프라인, 룰 발화와 폴백을 확인하는 시간을 1시간에서 30초로 줄였습니다. 이 수치는 개발 환경의 흐름 검증 시간입니다.",
        ],
      },
      {
        heading: "구현 결과와 남은 검증",
        paragraphs: [
          "워크플로우 2종과 화면 6종을 구현하고 최종 발표를 마쳤습니다. 실 Elasticsearch 연동과 라벨 기반 탐지 정확도 검증은 미완료입니다. 디스크 우선 저장 및 비동기 큐 개선 후 장기 중단 재현 테스트도 남아 있습니다.",
        ],
      },
    ],
    insight: "LLM의 판단을 운영자 승인과 검증 절차에 연결했습니다.",
  },
  {
    id: "solmate",
    navLabel: "SOLMate",
    eyebrow: "SOLMate",
    category: "Finance",
    year: "2026",
    headline: "거래의 흐름과\n학습을 연결하다",
    shortDescription:
      "매매일지와 멘토링을 연결한 모의투자 플랫폼. 동시 주문과 실시간 시세를 다뤘습니다.",
    lede: "청소년과 초보 투자자가 모의투자, 매매일지, 멘토 피드백으로 투자 판단을 연습하는 플랫폼입니다. 화면과 백엔드를 개발하고 인증, 동시성, 시세 처리 구조를 설계했습니다.",
    tone: "grey",
    slotLayout: "pair",
    tags: ["React", "Redis", "PostgreSQL"],
    github: "https://github.com/Agile-Driven-High-quality-Developers",
    highlight: "동시 주문 정합성 / 실시간 시세",
    slots: [
      {
        kind: "wide",
        title: "종목 상세와 실시간 호가",
        hint: "실제 서비스 캡처",
        src: "imgs/solmate-desktop.png",
        size: { w: 2880, h: 1800 },
        alt: "SOLMate의 차트와 주문 화면",
      },
      {
        kind: "phone",
        title: "모바일 매매일지",
        hint: "실제 서비스 캡처",
        src: "imgs/solmate-mobile.png",
        size: { w: 1206, h: 2622 },
        fit: "contain",
      },
      {
        kind: "natural",
        span: "full",
        title: "SharedWorker 연결 구조",
        hint: "기존 포트폴리오 도식",
        src: "imgs/shared-worker-connection.svg",
        size: { w: 2400, h: 1200 },
      },
    ],
    meta: [
      { label: "기간", value: "2026.03.09 — 2026.04.03" },
      {
        label: "환경",
        value: "신한투자증권 프로디지털아카데미 7기 / 팀 프로젝트",
      },
      {
        label: "담당",
        value: "프론트엔드, 백엔드, 인증, 동시성 및 시세 처리 설계",
      },
      {
        label: "기술",
        value:
          "React, TypeScript, Zustand, Spring Boot, PostgreSQL, Redis, WebSocket, SharedWorker",
      },
    ],
    blocks: [
      {
        heading: "문제",
        paragraphs: [
          "동시에 들어온 주문이 같은 잔고를 중복으로 사용하면 보유 금액을 넘는 주문이 체결될 수 있습니다. 실시간 시세는 여러 서버와 브라우저 탭에서 불필요하게 중복 수신하지 않도록 관리해야 했습니다.",
        ],
      },
      {
        heading: "거래 정합성",
        paragraphs: [
          "Redis 분산 락과 DB 비관적 락을 적용했습니다. 계좌 조회부터 잔고 차감, 주문 생성과 거래 내역 기록을 하나의 트랜잭션으로 묶었습니다. 매매일지는 DB에 미체결 상태로 먼저 저장하고 체결 및 취소에 맞춰 상태를 변경했습니다.",
        ],
      },
      {
        heading: "실시간 데이터",
        paragraphs: [
          "Redis와 PostgreSQL로 실시간 시세와 과거 차트 데이터를 나누어 관리하고 상위 캔들을 사전 집계했습니다. 서버의 시세 수신을 공유하고 브라우저에서는 SharedWorker로 여러 탭의 WebSocket 연결을 하나로 유지했습니다.",
        ],
      },
      {
        heading: "구현 범위",
        paragraphs: [
          "온보딩, 매매일지가 포함된 주문, 멘토와 멘티 매칭, 알림 화면을 구현했습니다. 사용자와 로그인 유형, 토큰 사이의 순환 참조를 해소하고 JWT 인증과 토큰 저장소를 정리했습니다.",
        ],
      },
    ],
    insight: "화면의 주문 상태와 서버의 거래 상태를 함께 다뤘습니다.",
  },
  {
    id: "mcp",
    navLabel: "Figma MCP",
    eyebrow: "Figma MCP",
    category: "AI & Automation",
    year: "2024—25",
    headline: "디자인에서 코드까지,\n반복을 줄이는 도구",
    shortDescription:
      "Figma 정보를 조회하고 퍼블리싱을 돕는 MCP 도구 7개를 설계하고 구현했습니다.",
    lede: "Figma 디자인을 AI 에이전트가 조회하고 HTML, CSS, JavaScript로 변환할 수 있도록 MCP 서버를 개발했습니다. 기존 오픈소스를 바탕으로 퍼블리싱 실무에 필요한 기능을 확장했습니다.",
    tone: "light",
    slotLayout: "single",
    tags: ["TypeScript", "MCP SDK", "Figma API"],
    github: "https://github.com/wooji-dev/figmaMCP_server",
    highlight: "MCP 도구 7개 설계 및 구현",
    slots: [
      {
        kind: "natural",
        title: "디자인 자동화 파이프라인",
        hint: "기존 포트폴리오 도식",
        src: "imgs/mcp-architecture.png",
        size: { w: 3120, h: 1520 },
        alt: "Figma 정보를 조회하고 코드 변환에 연결하는 아키텍처",
      },
    ],
    meta: [
      { label: "기간", value: "2024.10 — 2025.03" },
      { label: "환경", value: "에코마케팅 마케팅테크팀" },
      { label: "담당", value: "기획, MCP 도구 7개 단독 설계 및 구현" },
      {
        label: "기술",
        value: "TypeScript, Node.js, MCP SDK, Zod, Figma REST API, dotenv",
      },
    ],
    blocks: [
      {
        heading: "문제",
        paragraphs: [
          "Figma 시안에서 구조와 스타일을 확인하고 코드와 결과 파일을 정리하는 작업이 반복됐습니다. 에이전트가 디자인 정보를 조회하고 코드 변환에 활용할 수 있도록 실무 작업을 도구로 나눴습니다.",
        ],
      },
      {
        heading: "구현",
        paragraphs: [
          "파일 구조, 컴포넌트와 스타일 조회, 텍스트와 개발 지시사항 추출, CSS 제안, 이미지 다운로드를 처리하는 도구 7개를 구현했습니다. 색상과 테두리, 글꼴 속성을 CSS로 변환하고 노드 유형에 맞는 HTML 태그를 제안하도록 구성했습니다.",
          "결과 파일을 정리하고 README를 생성하는 패키징 기능도 만들었습니다.",
        ],
      },
      {
        heading: "통신과 입력 처리",
        paragraphs: [
          "MCP 통신에 쓰이는 stdout과 진단 로그를 출력하는 stderr를 분리했습니다. Figma URL의 file 및 design 형식을 모두 처리하고, 인증 토큰이 없으면 초기화 단계에서 종료하도록 했습니다.",
        ],
      },
      {
        heading: "결과",
        paragraphs: [
          "디자인 정보 조회부터 결과물 정리까지 반복 작업을 도구 호출로 연결했습니다. 경험 기록에는 도구 활용으로 부서 업무 시간이 약 40% 단축된 것으로 정리되어 있습니다.",
        ],
      },
    ],
    insight: "반복되는 퍼블리싱 절차를 호출 가능한 도구로 만들었습니다.",
  },
  {
    id: "elo",
    navLabel: "ELO",
    eyebrow: "ELO",
    category: "Web & Data",
    year: "2025",
    headline: "고객의 행동을\n더 정확하게 읽다",
    shortDescription:
      "쇼핑몰의 URL 정규화와 테스트 그룹 유지, 리다이렉트 예외 처리를 구현했습니다.",
    lede: "쇼핑몰 방문자를 URL과 UTM 유입 정보로 구분하고 원본과 대안 페이지의 행동을 비교하는 A/B 테스트 플랫폼입니다. 프론트엔드와 테스트 배정, 리다이렉트 로직을 맡았습니다.",
    tone: "light",
    slotLayout: "single",
    tags: ["JavaScript", "A/B Testing", "Analytics"],
    highlight: "전환율 2.7% → 3.9%",
    slots: [],
    meta: [
      { label: "기간", value: "2025.06 — 2025.12" },
      { label: "환경", value: "에코마케팅 마케팅테크팀 / 팀 프로젝트" },
      { label: "담당", value: "프론트엔드 및 리다이렉트 로직 설계, 개발" },
      {
        label: "기술",
        value:
          "Vanilla JavaScript, Cookie, sessionStorage, URLSearchParams, Fetch",
      },
    ],
    blocks: [
      {
        heading: "문제",
        paragraphs: [
          "자사몰마다 쿼리스트링과 경로 규칙이 달라 같은 페이지를 다르게 인식할 수 있었습니다. 새로고침이나 재방문 때 테스트 그룹이 바뀌거나 중복 리다이렉트가 일어나면 비교 데이터도 어긋납니다.",
        ],
      },
      {
        heading: "구현",
        paragraphs: [
          "URL을 정규화하고 최초 유입 UTM을 세션에 보존했습니다. 가중치로 배정한 테스트 그룹은 쿠키에 저장해 유지하고, 만료일을 테스트 종료일에 맞췄습니다. 같은 페이지로의 중복 리다이렉트와 무한 루프를 방지했습니다.",
          "데이터 엔지니어와 이벤트 로그 형식을 맞추고 URL 인식 오류는 Teams 웹훅으로 알렸습니다. 외부 설정 조회가 실패해도 쇼핑몰 페이지가 동작하도록 예외 처리했습니다.",
        ],
      },
      {
        heading: "결과",
        paragraphs: [
          "A/B 테스트와 고객 데이터 기반 개선 과정에서 전환율은 2.7%에서 3.9%, ROAS는 190%에서 240%로 높아졌습니다. 이 수치는 협업한 개선 과정의 성과이며 리다이렉트 코드만의 효과로 분리해 측정한 값은 아닙니다.",
        ],
      },
    ],
    insight: "페이지 동작의 일관성을 지켜 비교 가능한 데이터를 수집했습니다.",
  },
  {
    id: "solvps",
    navLabel: "solvPS",
    eyebrow: "solvPS",
    category: "Web & Data",
    year: "2026",
    headline: "함께 푸는 알고리즘,\n이어지는 학습 기록",
    shortDescription:
      "풀이 코드 수집부터 AI 학습 분석과 배포까지 연결한 알고리즘 협업 플랫폼.",
    lede: "백준 풀이 코드를 자동으로 수집하고 solved.ac 학습 이력으로 취약 유형과 맞춤 문제를 안내하는 알고리즘 협업 플랫폼입니다.",
    tone: "grey",
    slotLayout: "single",
    tags: ["Next.js", "Claude API", "AWS"],
    github: "https://github.com/SOLv4/solvPS",
    highlight: "Chrome 확장 프로그램 / AI 학습 분석",
    slots: [],
    meta: [
      { label: "기간", value: "2026.02.27 — 2026.03.06" },
      {
        label: "환경",
        value: "신한투자증권 프로디지털아카데미 7기 / 팀 프로젝트",
      },
      {
        label: "담당",
        value: "프론트엔드, AI 분석, Chrome 확장 프로그램, 인증 및 배포",
      },
      {
        label: "기술",
        value:
          "Next.js, TypeScript, PostgreSQL, Drizzle ORM, Claude API, Better Auth, AWS, GitHub Actions",
      },
    ],
    blocks: [
      {
        heading: "문제",
        paragraphs: [
          "알고리즘 스터디에서 풀이 코드를 수동으로 공유하고 각자의 취약 유형을 파악하는 번거로움을 줄이고자 했습니다.",
        ],
      },
      {
        heading: "학습 흐름",
        paragraphs: [
          "대시보드, 팀 관리, 학습 로드맵과 문제 비교 화면을 구현했습니다. Claude Tool Use에 사용자 정보 조회, 태그 통계 분석과 문제 검색 도구를 연결하고, 도구 호출 상태와 중간 결과를 SSE로 전달했습니다.",
        ],
      },
      {
        heading: "수집과 인증",
        paragraphs: [
          "Chrome 확장 프로그램에서 제출 이벤트를 감지한 뒤 채점 상태를 확인해 코드를 수집했습니다. JWT와 HMAC 기반 토큰의 이중 검증을 적용했습니다.",
        ],
      },
      {
        heading: "배포",
        paragraphs: [
          "GitHub Actions, S3, CodeDeploy와 EC2로 자동 배포 파이프라인을 구축했습니다. 배포 중 환경변수가 유실되는 문제를 백업 및 복원 훅으로 해결하고 실행 사용자 권한과 PM2 재기동 시 인증값 주입 절차를 정리했습니다.",
        ],
      },
    ],
    insight: "코드 수집과 공유, 분석 결과를 하나의 학습 흐름에 연결했습니다.",
  },
  {
    id: "paytrace",
    navLabel: "PayTrace",
    eyebrow: "PayTrace",
    category: "Finance",
    year: "MVP",
    headline: "생활의 지출을\n설명 가능한 기록으로",
    shortDescription:
      "생활 지출 기반 신용 보조지표 서비스의 화면과 PDF 리포트 MVP.",
    lede: "월세와 관리비, 구독료 같은 생활 지출을 신용 보조지표 PayScore로 정리하는 서비스의 MVP를 개발했습니다.",
    tone: "light",
    slotLayout: "single",
    tags: ["JavaScript", "Express", "GA4"],
    github: "https://github.com/kjung0109/paytrace-mvp",
    highlight: "UI / PDF 리포트 MVP",
    slots: [],
    meta: [
      { label: "환경", value: "신한투자증권 프로디지털아카데미 교육 프로젝트" },
      {
        label: "담당",
        value: "사용자 흐름 UI, PDF 리포트, 행동 이벤트 및 이메일 서버 연동",
      },
      {
        label: "기술",
        value: "HTML, CSS, JavaScript, Node.js, Express, Nodemailer, GA4",
      },
    ],
    blocks: [
      {
        heading: "구현",
        paragraphs: [
          "연결, 동의, 검증, 리포트의 4단계 화면과 PDF 출력 페이지를 구현했습니다. GA4 사용자 행동 이벤트를 설계하고 Express와 Nodemailer를 연동했습니다.",
        ],
      },
      {
        heading: "출력과 인증",
        paragraphs: [
          "PDF 출력 화면은 별도 문서로 분리해 서비스 화면과 인쇄 양식의 충돌을 해결했습니다. 이메일 인증 정보는 서버에서 관리했습니다.",
        ],
      },
      {
        heading: "범위",
        paragraphs: [
          "프론트엔드 UI와 PDF 리포트 생성 MVP를 구현했습니다. 스크래핑, OCR, 마이데이터 연동은 설계안 단계입니다.",
        ],
      },
    ],
    insight: "서비스 화면과 출력 문서의 역할을 나누었습니다.",
  },
];
