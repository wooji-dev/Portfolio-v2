import type { SummaryCard } from "../types";

export const summaryCards: readonly SummaryCard[] = [
  {
    id: "pocketstock",
    title: "PocketStock",
    problem:
      "화면마다 금액 계산이 달라질 수 있었고, 요청 실패 시 자동 재시도가 이중 출금으로 이어질 수 있었다.",
    change: "금액 계산과 재시도 정책을 currency.ts와 주문 훅 한 곳으로 모았다.",
    result: "시나리오 검사에서 금액 오차·중복 주문 미발생",
  },
  {
    id: "solmate",
    title: "SOLMate",
    problem: "탭을 열 때마다 WebSocket이 하나씩 늘었고, 토큰 갱신 뒤 시세가 에러 없이 멈췄다.",
    change:
      "탭마다 연결하던 방식을 브라우저당 연결 1개로 바꾸고, 구독 관리를 SharedWorker에 모았다.",
    result: "탭 수와 무관하게 서버 연결 1개 유지",
  },
  {
    id: "mcp",
    title: "디자인 자동화",
    problem:
      "Figma 시안을 통째로 LLM에 넘기면 컨텍스트가 넘치고, 같은 시안에서 매번 다른 코드가 나왔다.",
    change: "LLM이 필요한 노드만 호출하도록 MCP 도구 7개로 나누고, 스타일 변환은 코드로 고정했다.",
    result: "부서 퍼블리싱 작업 시간 약 40% 단축",
  },
  {
    id: "aiops",
    title: "AIOps Agent",
    problem: "개별 로그는 정상인데 여러 건이 모여 장애가 됐다. 시간 축으로 묶어 보는 주체가 없었다.",
    change: "룰만으로 완결되는 파이프라인을 먼저 만들고, 판단이 필요한 두 지점만 로컬 LLM에 맡겼다.",
    result: "LLM이 멈춰도 판별과 저장, 화면은 동작",
  },
];
