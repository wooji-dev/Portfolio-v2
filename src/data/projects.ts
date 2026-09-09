import type { Project } from "../types";

/**
 * 프로젝트 내용. 화면을 고칠 일 없이 여기만 수정하면 된다.
 * 이미지를 채우려면 slots의 항목에 src를 넣는다.
 * 화면 녹화는 public/shots/, 캡처와 도식은 public/imgs/에 둔다.
 *
 * 본문 골격은 네 프로젝트가 같다.
 * lede(무엇을 만들었고 내 범위는 어디까지) → 정의한 문제 → 설계 → 트러블슈팅 → 결과
 */
export const projects: readonly Project[] = [
  {
    id: "pocketstock",
    navLabel: "PocketStock",
    eyebrow: "PocketStock",
    headline: "잔돈과 포인트로\n소수점 주식을 사는 웹앱",
    lede:
      "카드 결제로 생기는 잔돈과 흩어진 포인트를 모아 소수점 단위로 주식을 사는 웹앱입니다. \n" +
      "인증, 홈, 트레이딩, 포트폴리오, CMA, 환전 화면과 상태관리 구조를 맡았고, " +
      "PM으로 범위와 일정을 관리했습니다.",
    tone: "light",
    slotLayout: "phone",
    slots: [
      {
        kind: "phone",
        title: "홈 화면, 잔돈 수집과 CMA 적립",
        hint: "화면 녹화",
        size: { w: 540, h: 1174 },
        video: {
          webm: "shots/pocketstock-1.webm",
          mp4: "shots/pocketstock-1.mp4",
        },
        poster: "shots/pocketstock-1.jpg",
        alt: "카드 사용 잔돈과 포인트를 모아 CMA에 적립하는 홈 화면",
      },
      {
        kind: "phone",
        title: "트레이딩 화면, 조각 모으기",
        hint: "화면 녹화",
        size: { w: 540, h: 1174 },
        video: {
          webm: "shots/pocketstock-2.webm",
          mp4: "shots/pocketstock-2.mp4",
        },
        poster: "shots/pocketstock-2.jpg",
        alt: "소수점 매수를 퍼즐 조각으로 표현한 트레이딩 화면",
      },
      {
        kind: "phone",
        title: "포트폴리오 화면, 퍼즐 현황과 온주 전환",
        hint: "화면 녹화",
        size: { w: 540, h: 1174 },
        video: {
          webm: "shots/pocketstock-3.webm",
          mp4: "shots/pocketstock-3.mp4",
        },
        poster: "shots/pocketstock-3.jpg",
        alt: "모은 조각이 100개가 되면 온주로 전환되는 포트폴리오 화면",
      },
    ],
    meta: [
      {
        label: "역할",
        value:
          "PM, 프론트엔드 전담. 인증, 홈, 트레이딩, 포트폴리오, CMA, 환전 화면과 상태관리 구조 설계",
      },
      {
        label: "스택",
        value:
          "Next.js 15 App Router, TypeScript, TanStack Query, Zustand, Framer Motion, PWA",
      },
      {
        label: "기간",
        value:
          "2026년 5월 28일 ~ 7월 2일, 신한투자증권 프로디지털아카데미 팀 프로젝트",
      },
      { label: "성과", value: "최종 발표회 최우수상" },
    ],
    blocks: [
      {
        heading: "정의한 문제",
        paragraphs: [
          "소수점 투자는 금액이 나누어떨어지지 않습니다. JavaScript에서 0.1 + 0.2는 0.30000000000000004가 됩니다. 이 값은 화면에 정상으로 표시되고 예외도 나지 않기 때문에, 잔고가 조금씩 어긋나도 드러나지 않습니다.",
          "재시도 동작에도 같은 성격의 위험이 있었습니다. TanStack Query는 요청이 실패하면 자동으로 다시 보냅니다. 조회에서는 문제가 없지만 송금이나 주문에서 타임아웃 뒤 재시도가 걸리면 출금이 두 번 일어납니다.",
          "두 가지 모두 화면을 만들기 전에 처리해야 할 문제로 봤습니다.",
        ],
      },
      {
        heading: "설계",
        paragraphs: [
          "두 위험은 정확성을 지키는 책임이 화면을 만드는 사람에게 있다는 공통점이 있었습니다.",
          "팀 규칙으로 정해도 화면이 늘어나면 빠뜨리는 곳이 생깁니다. 규칙 대신 코드 구조로 막기로 했습니다.",
        ],
        bullets: [
          "금액을 number로 계산하는 경로를 없앴습니다. 모든 금액 연산과 표시가 currency.ts 한 곳을 지나가기 때문에 화면이 늘어나도 계산 규칙은 한 곳에 있습니다.",
          "이중 출금이 가능한 지점을 한 곳으로 모았습니다. 돈이 오가는 mutation은 retry: false로 고정하고, 주문은 useOrderMutation 하나만 거치게 했습니다.",
        ],
      },
      {
        heading: "트러블슈팅",
        paragraphs: [
          {
            lead: "금액 파싱",
            text: "currency.ts를 만든 뒤에도 잔고가 미세하게 어긋났습니다. 화면 계산은 Decimal을 쓰는데, 서버 응답을 JSON.parse로 받는 시점에 금액이 이미 number로 바뀌어 있었습니다. 응답 스키마에서 금액 필드를 문자열로 받고, 파싱 계층에서 Decimal로 바꾼 뒤에만 상태에 넣도록 경로를 고정했습니다.",
          },
          {
            lead: "중복 주문",
            text: "retry: false로 자동 재시도는 막았지만, 주문 버튼을 빠르게 두 번 누르면 mutation이 두 번 나갔습니다. 네트워크가 느릴수록 응답 대기 시간이 길어져 재현이 쉬웠습니다. useOrderMutation에서 isPending 동안 제출을 막고, 요청마다 클라이언트가 만든 멱등키를 실어 보내 서버가 같은 주문을 한 번만 처리하도록 했습니다.",
          },
          {
            lead: "잔고 롤백",
            text: "매수 직후 잔고를 먼저 줄여 보여줬는데, 주문이 실패해도 화면 값이 되돌아오지 않는 경우가 있었습니다. 잔고를 여러 쿼리가 각자 캐싱하고 있어서 롤백이 일부에만 적용된 것이 원인이었습니다. 잔고 쿼리 키를 하나로 합치고, onError에서 스냅샷을 되돌린 뒤 onSettled에서 무효화하도록 정리했습니다.",
          },
        ],
      },
      {
        heading: "결과",
        paragraphs: [
          "금액 오차는 소수점 매수, 부분 체결, 환전, CMA 적립을 섞은 시나리오를 실행한 뒤 화면 잔고와 서버 잔고를 대조해 확인했습니다. 중복 주문은 버튼 연타와 네트워크 지연을 재현해 서버에 도달한 주문 건수를 세어 확인했습니다.",
          "개발 기간 동안 두 검사에서 어긋난 건은 나오지 않았습니다.",
          "트레이딩, CMA, 환전 화면을 차례로 추가하는 동안 금액 관련 버그는 새로 생기지 않았고, 코드 리뷰에서 금액 처리를 매번 확인하지 않아도 됐습니다.",
        ],
      },
    ],
    code: {
      afterBlock: 1,
      sample: {
        caption: "금액 정밀도와 이중 출금 방지",
        code: `import Decimal from "decimal.js";

// 금액 연산은 이 파일로만 지나갑니다. 화면에서 number 산술을 쓰지 않습니다
export const addAmount = (a: string, b: string) =>
  new Decimal(a).plus(b).toFixed(2);

// 돈이 오가는 요청은 자동 재시도를 끕니다. 재시도는 사용자가 직접 누를 때만
export const useOrderMutation = () =>
  useMutation({ mutationFn: postOrder, retry: false });`,
      },
    },
    insight:
      "지켜야 할 규칙이 늘어나면 빠뜨릴 가능성도 함께 늘어납니다. 규칙을 정하기 전에 그 규칙이 필요 없어지는 구조가 있는지 먼저 확인하게 됐습니다.",
  },

  {
    id: "solmate",
    navLabel: "SOLMate",
    eyebrow: "SOLMate",
    headline: "매매일지를 써야 주문할 수 있는\n투자학습용 모의투자 플랫폼",
    lede:
      "매매일지를 작성해야 주문 버튼이 열리는 투자 초보자를 위한 모의투자 플랫폼입니다. \n" +
      "프론트엔드 리드로 실시간 시세가 서버에서 화면까지 도달하는 구조를 맡았습니다.",
    tone: "grey",
    slotLayout: "pair",
    slots: [
      {
        kind: "wide",
        title: "PC 화면, 종목 상세와 실시간 호가",
        hint: "데스크톱 캡처",
        src: "imgs/solmate-desktop.png",
        size: { w: 2880, h: 1800 },
        alt: "차트와 호가, 보유 현황이 실시간으로 갱신되는 종목 상세 화면",
      },
      {
        kind: "phone",
        fit: "contain",
        title: "모바일 화면, 매매일지",
        hint: "모바일 캡처",
        src: "imgs/solmate-mobile.png",
        size: { w: 1206, h: 2622 },
        alt: "매매일지를 작성해야 주문 버튼이 열리는 모바일 화면",
      },
      {
        kind: "natural",
        span: "full",
        title: "연결 구조, 탭 N개에서 SharedWorker를 거쳐 소켓 1개로",
        hint: "직접 그린 도식",
        src: "imgs/shared-worker-connection.svg",
        size: { w: 2400, h: 1200 },
        alt: "여러 탭이 MessagePort로 SharedWorker에 붙고, 워커가 STOMP 소켓 하나만 서버에 연결하는 구조도",
      },
    ],
    meta: [
      {
        label: "역할",
        value:
          "프론트엔드 리드. 실시간 시세 소비 구조(SharedWorker 단일 연결, 구독 관리, 재연결) 전담",
      },
      {
        label: "스택",
        value:
          "React, Vite, TypeScript, Zustand, Tailwind(디자인 토큰), STOMP/WebSocket, SharedWorker",
      },
      {
        label: "기간",
        value:
          "2026년 3월 9일 ~ 4월 3일, 신한투자증권 프로디지털아카데미 팀 프로젝트",
      },
    ],
    blocks: [
      {
        heading: "정의한 문제",
        paragraphs: [
          "사용자는 종목마다 탭을 따로 띄우는데, 구현은 탭 하나만 가정하고 있었습니다. 탭을 열 때마다 STOMP WebSocket이 새로 연결되어 같은 시세를 여러 번 받았고, 연결 수가 사용자 수와 탭 수의 곱으로 늘어났습니다.",
          "매일 장 시작 무렵에만 시세가 화면에 들어오지 않는 증상도 있었습니다. 콘솔에 에러가 없고 소켓도 연결된 상태로 보여서 장애로 신고되지 않았습니다.",
          "증상이 나타나는 시각과 액세스 토큰 만료 주기가 겹치는 것을 보고 토큰 쪽을 확인했습니다. 토큰을 새로 받으면 연결은 다시 맺어지지만, 끊기기 전에 구독하던 종목 목록은 복구되지 않았습니다.",
        ],
      },
      {
        heading: "설계",
        paragraphs: [
          "두 문제 모두 각 화면이 연결을 직접 관리하는 구조에서 나왔습니다. 탭마다 연결하는 대신 브라우저당 하나만 연결하고, 종목별로 구독 중인 탭 수를 세는 방식으로 바꿨습니다.",
          "화면에서 쓰는 함수는 subscribe(topic)과 unsubscribe(topic) 두 개입니다. 연결 개수와 재연결 시점, 토큰 갱신은 화면이 다루지 않습니다.",
        ],
        bullets: [
          "STOMP 클라이언트를 SharedWorker 안에 하나만 두고, 모든 탭이 MessagePort로 그 하나를 같이 씁니다.",
          "종목별로 구독 중인 탭을 세서 마지막 탭이 나가면 구독을 끊습니다. 모든 탭이 닫히면 연결도 종료해 좀비 커넥션이 남지 않습니다.",
          "재연결 후 재구독도 워커가 처리합니다. 토큰을 새로 받아 연결이 다시 맺어지면 워커가 갖고 있던 구독 목록을 그대로 다시 등록합니다.",
        ],
      },
      {
        heading: "트러블슈팅",
        paragraphs: [
          {
            lead: "닫힌 탭의 잔여 구독",
            text: "unsubscribe는 컴포넌트 언마운트에서 호출했는데, 탭을 그냥 닫거나 브라우저가 강제 종료되면 실행되지 않았습니다. 워커에는 이미 사라진 탭의 MessagePort가 구독자로 남아 시세를 계속 받았습니다. 워커가 각 포트에 주기적으로 핑을 보내고, 응답이 없는 포트는 구독 목록에서 제거하도록 바꿨습니다.",
          },
          {
            lead: "리렌더 증가",
            text: "연결을 하나로 줄인 뒤에는 화면이 버벅였습니다. 워커가 메시지를 받을 때마다 스토어를 갱신해서, 관심 종목을 여러 개 열어두면 초당 수십 번씩 목록 전체가 다시 그려졌습니다. 워커에서 프레임 단위로 tick을 모아 한 번에 보내고, 스토어를 종목별로 쪼개 값이 바뀐 행만 다시 그리도록 했습니다.",
          },
          {
            lead: "개발 환경 중복 구독",
            text: "HMR로 화면을 고쳐도 SharedWorker는 살아 있어서, 저장할 때마다 구독이 쌓이고 같은 시세가 여러 번 들어왔습니다. 운영에서는 나지 않는 증상이라 원인을 찾는 데 시간이 걸렸습니다. 개발 모드에서는 HMR dispose 시점에 포트를 명시적으로 끊게 하고, 워커에 현재 구독 상태를 덤프하는 디버그 메시지를 넣었습니다.",
          },
        ],
      },
      {
        heading: "결과",
        paragraphs: [
          "연결 수는 개발자도구 네트워크 탭의 WS 커넥션과 서버 측 활성 세션을 대조해 확인했습니다. 탭을 여러 개 열고 닫기를 반복해도 연결은 1개로 유지되고, 모든 탭을 닫으면 0개가 됩니다.",
          "연결과 트래픽이 탭 수만큼 늘어나던 문제가 없어졌고, 좀비 커넥션도 남지 않습니다.",
          "장 시작 무렵 시세가 멈추는 증상은 토큰 만료를 강제로 앞당겨 재현했고, 재구독을 워커로 옮긴 뒤로는 재현되지 않았습니다. 소켓 처리 코드가 워커로 모이면서 화면 컴포넌트에서는 관련 코드가 빠졌습니다.",
        ],
      },
    ],
    code: {
      afterBlock: 1,
      sample: {
        caption: "SharedWorker 단일 연결과 구독 카운팅",
        code: `// shared-socket.worker.ts. 브라우저당 STOMP 연결 1개
const ports = new Map<string, Set<MessagePort>>();   // 종목별 구독 중인 탭
let client: StompClient | null = null;

onconnect = (e) => {
  const port = e.ports[0];
  port.onmessage = ({ data }) => {
    if (data.type === "subscribe") {
      if (!ports.has(data.topic)) ports.set(data.topic, new Set());
      ports.get(data.topic).add(port);
      client ??= connect();                     // 최초 1회만 연결
    }
    if (data.type === "unsubscribe") {
      ports.get(data.topic)?.delete(port);
      if (!ports.get(data.topic)?.size) client?.unsubscribe(data.topic);
      if (![...ports.values()].some((s) => s.size)) client?.deactivate();
    }
  };
};

// 토큰을 새로 받아 재연결되면 갖고 있던 구독을 그대로 다시 등록합니다
function onReconnect() {
  for (const topic of ports.keys()) client?.subscribe(topic);
}`,
      },
    },
    insight:
      "에러 없이 조용히 멈추는 장애는 로그만으로 찾기 어려웠습니다. 토큰 갱신이나 재연결처럼 상태가 바뀌는 시점에 무엇이 유실되는지 먼저 확인하게 됐습니다.",
  },

  {
    id: "mcp",
    navLabel: "디자인 자동화",
    eyebrow: "디자인 자동화 도구",
    headline: "Figma 시안을 코드로 바꾸는\nMCP 서버",
    lede:
      "반복되던 Figma 시안 코드 변환을 LLM이 직접 도구를 호출해 처리하도록 만든 도구입니다. \n" +
      "배정받은 업무가 아니라 부서에서 반복되던 작업을 문제로 잡고 기획부터 구현까지 진행했습니다.",
    tone: "light",
    slotLayout: "single",
    slots: [
      {
        kind: "natural",
        title: "아키텍처, 업로더에서 도구 호출을 거쳐 HTML까지",
        hint: "직접 그린 도식",
        src: "imgs/mcp-architecture.png",
        size: { w: 3120, h: 1520 },
        alt: "업로더, API, 멀티모달 변환, 모델 호출로 이어지는 파이프라인과 입력 시안 대비 생성된 HTML 예시",
      },
    ],
    meta: [
      {
        label: "역할",
        value:
          "기획부터 단독 진행. MCP 서버와 Figma REST API 도구 7종 설계 및 구현",
      },
      {
        label: "스택",
        value: "LLM, MCP(Model Context Protocol) 서버, Figma REST API, Node.js",
      },
      {
        label: "기간",
        value: "2024년 10월 ~ 2025년 3월, 에코마케팅 사이드 프로젝트",
      },
    ],
    blocks: [
      {
        heading: "정의한 문제",
        paragraphs: [
          "캠페인 페이지는 매주 새로 나오는데 작업 방식은 매번 같았습니다. 어떤 프레임이 섹션인지, 어떤 텍스트가 어떤 태그인지, 어떤 색이 어떤 CSS 값인지 판단하는 기준은 거의 고정되어 있었습니다. 기준이 정해져 있으니 자동화할 수 있다고 봤습니다.",
          "처음에는 시안 이미지나 파일 전체를 프롬프트에 넣었습니다. 노드 계층이 깊으면 컨텍스트 윈도우를 넘겼고, 벡터 그룹과 오토레이아웃이 섞이면 CSS 변환이 자주 틀렸습니다. 같은 시안에서도 무엇을 어떤 순서로 읽느냐에 따라 다른 코드가 나왔습니다.",
          "정확도보다는 결과가 일정하지 않은 것이 문제였고, 더 큰 모델을 써도 해결되지 않는다고 판단했습니다.",
        ],
      },
      {
        heading: "설계",
        paragraphs: [
          '원인은 LLM에 범위가 정해지지 않은 작업을 통째로 맡긴 데 있었습니다. "이 파일을 코드로 바꿔줘"는 입력 크기도 판단 기준도 출력 형태도 정해져 있지 않습니다. 프롬프트를 고치는 대신 LLM이 작업하는 방식을 바꿨습니다.',
        ],
        bullets: [
          "MCP 서버를 직접 만들어 Figma REST API를 도구 7개로 나눠 열었습니다. LLM은 파일 전체를 읽지 않고 필요한 노드나 스타일만 골라서 도구를 호출합니다.",
          "전체 트리를 프롬프트에 넣지 않고 필요한 만큼만 조회하게 바꿔서, 시안이 복잡해져도 컨텍스트가 넘치지 않습니다.",
          "LLM이 할 일과 코드가 할 일을 나눴습니다. 어떤 노드 묶음이 하나의 섹션인지는 맥락이 필요하니 LLM에 맡기고, 색상값과 크기를 CSS로 옮기는 일은 함수로 처리합니다.",
        ],
      },
      {
        heading: "트러블슈팅",
        paragraphs: [
          {
            lead: "과다한 도구 호출",
            text: "트리를 부분 조회하게 바꾸자 LLM이 자식 노드를 따라 계속 내려가면서, 시안 하나를 변환하는 데 수십 번씩 API를 호출했습니다. 깊이와 호출 횟수에 상한을 두고, 노드 조회 도구가 자식 목록을 요약해서 함께 돌려주도록 바꿨습니다. 한 번의 응답으로 다음에 열어볼 노드를 판단할 수 있게 되면서 호출 수가 줄었습니다.",
          },
          {
            lead: "도구 응답 크기",
            text: "노드 하나만 조회해도 Figma 응답에는 쓰지 않는 필드가 대부분이었습니다. 파일 전체를 넣지 않기로 해놓고 도구 응답으로 컨텍스트를 다시 채우고 있었습니다. 도구가 돌려주는 필드를 화이트리스트로 고정하고 나머지는 잘라냈습니다.",
          },
          {
            lead: "레이트 리밋",
            text: "호출이 몰리면 Figma REST API가 429를 돌려주고 변환이 중간에 멈췄습니다. 파일 버전 키를 기준으로 노드 응답을 캐시하고, 429에는 지수 백오프로 재시도하도록 했습니다. 시안을 고쳐가며 여러 번 변환하는 사용 패턴에서는 호출이 대부분 캐시로 처리됩니다.",
          },
        ],
      },
      {
        heading: "결과",
        paragraphs: [
          "같은 시안에서 같은 결과가 나오면서 검수 시간이 줄었고, 부서 퍼블리싱 업무 시간이 약 40% 줄었습니다.",
          "이 값은 도구를 쓰기 전과 후로 같은 유형의 캠페인 페이지 작업 시간을 비교해 냈습니다. 시안을 받은 시점부터 검수를 마칠 때까지를 재서 평균을 냈고, 표본이 많지 않아 정밀한 수치는 아닙니다.",
          "마케터와 디자이너, 개발자가 같은 도구로 결과물을 만들면서 시안과 결과물이 다르다는 지적도 줄었습니다.",
        ],
      },
    ],
    code: {
      afterBlock: 1,
      sample: {
        caption: "추론 대신 코드로 처리한 변환 계층",
        code: `// 속성을 CSS로 옮기는 일은 LLM에 맡기지 않고 함수로 처리합니다
function extractCssStyles(node) {
  const css = {};
  const fill = node.fills?.[0];
  if (fill?.type === "SOLID") {
    const { r, g, b } = fill.color;
    css.backgroundColor = \`rgb(\${r * 255 | 0}, \${g * 255 | 0}, \${b * 255 | 0})\`;
  }
  if (node.cornerRadius) css.borderRadius = \`\${node.cornerRadius}px\`;
  return css;
}

// 노드 타입을 태그로 바꾸는 것도 표로 고정합니다
const toSemanticTag = (node) =>
  ({ TEXT: "p", FRAME: "section", COMPONENT: "div" })[node.type] ?? "div";`,
      },
    },
    insight:
      "LLM을 쓸 때는 모델 성능보다 어디까지 맡길지 정하는 일이 결과에 더 큰 영향을 줬습니다. 프롬프트를 정교하게 쓰는 것보다 맡길 범위를 좁히는 편이 효과가 컸습니다.",
  },

  {
    id: "aiops",
    navLabel: "AIOps",
    eyebrow: "AIOps Agent",
    headline: "운영 로그를 판별하는\n사내 AI Agent",
    lede:
      "운영 로그를 판별하고 위험도를 계산하고 이상 패턴을 탐지하는 사내 AI Agent입니다. \n" +
      "기획, 설계, 개발, 최종 발표를 단독으로 수행했습니다.",
    tone: "grey",
    slotLayout: "single",
    slots: [
      {
        kind: "natural",
        title: "대시보드, 위험도 순 정렬과 이상 패턴 탐지 결과",
        hint: "화면 캡처",
        src: "imgs/aiops-dashboard.png",
        size: { w: 904, h: 597 },
        alt: "사전 경보와 이상 패턴 탐지 카드가 위험도 순으로 놓인 운영 대시보드",
      },
      {
        kind: "natural",
        title: "워크플로우 1, 사전에 없는 로그를 판별하는 경로",
        hint: "Dify 워크플로우",
        src: "imgs/aiops-dify-1.png",
        size: { w: 1760, h: 424 },
        alt: "과거 사례 검색, 미등록 로그 추정, 정형화, 반환으로 이어지는 판별 워크플로우",
      },
      {
        kind: "natural",
        title: "워크플로우 2, 시간 윈도우를 묶어 이상 패턴을 찾는 경로",
        hint: "Dify 워크플로우",
        src: "imgs/aiops-dify-2.png",
        size: { w: 1762, h: 394 },
        alt: "윈도우 집계를 받아 패턴을 분석하고 출력을 검증해 findings로 반환하는 탐지 워크플로우",
      },
    ],
    meta: [
      {
        label: "역할",
        value:
          "기획부터 설계, 개발, 최종 발표까지 단독 수행. 워크플로우 2종, 대시보드 6종 구현",
      },
      {
        label: "스택",
        value:
          "Java 17, Spring Boot, Thymeleaf(SSR), Spring Data JPA, H2, Dify, 로컬 LLM",
      },
      {
        label: "기간",
        value:
          "2026년 7월 27일 ~ 9월 4일, 신한투자증권 ICT기획운영부 인턴 프로젝트",
      },
    ],
    blocks: [
      {
        heading: "정의한 문제",
        paragraphs: [
          "운영 알림이 등급 구분 없이 전달돼서, 확인이 필요한 소수의 로그가 나머지에 묻혔습니다. 알림이 많아질수록 담당자는 확인하지 않게 됩니다.",
          "알림을 선별하려면 판별이 먼저 되어야 하는데, 무슨 에러인지 사람이 매번 다시 확인하고 있었습니다.",
          "개별 로그는 각각 정상 범위인데 여러 건이 모여 장애로 이어지는 패턴도 있었습니다. 한 건 단위로만 보는 구조라 시간 축으로 묶는 주체가 없었고, 징후 단계에서 확인할 방법이 없었습니다.",
        ],
      },
      {
        heading: "설계",
        paragraphs: [
          "시스템 전체를 룰만으로 완결되게 만들고 LLM을 그 위에 얹었습니다. 로그 수신, 사전 조회, 위험도 계산, 저장, 화면 출력까지 주 경로는 동기로 처리하고 LLM 응답을 기다리지 않습니다. LLM이 멈춰도 판별과 저장, 화면은 그대로 동작합니다.",
          "LLM은 두 곳에만 넣었습니다. 사전에 없는 로그를 판별하는 경로와, 일정 시간 윈도우로 집계해 이상 패턴을 찾는 경로입니다. 로그 본문이 외부로 나가면 안 되는 환경이라 내부에 설치한 로컬 모델을 씁니다.",
          "LLM 출력은 그대로 쓰지 않습니다. 사고 과정 잔재를 제거한 뒤 JSON을 추출하고, 유형은 화이트리스트 밖이면 폐기하고, 예측 시각은 형식과 미래 시각 검증을 통과할 때만 인정합니다.",
          "중복 억제 키는 앱에서 계산합니다. LLM에 맡기면 같은 패턴에서도 목록 순서에 따라 키가 매번 달라졌습니다.",
        ],
        bullets: [
          "LLM이 만든 판별은 자동으로 사전에 등록되지 않습니다. 초안을 검토 큐에 올리고 운영자가 승인해야 사전에 들어갑니다. 잘못된 판별이 한 번 등록되면 이후 조회가 계속 그 값을 반환하기 때문입니다.",
          "지식 노드도 4종으로 나눴습니다. 사람이 확정한 사전, 매뉴얼 원문, 룰이 관측한 사례, LLM 초안을 같은 층에 두면 미승인 초안이 근거로 올라가고, LLM이 자기 출력을 다시 근거로 참조하게 됩니다.",
        ],
      },
      {
        heading: "트러블슈팅",
        paragraphs: [
          {
            lead: "판별 지연",
            text: "사전에 없는 로그 한 건을 판별하는 데 수 분이 걸렸습니다. CPU 전용 환경이라 생성 속도가 낮은 데다, 답변 전 사고 과정에서 토큰을 먼저 소진하는 것이 원인이었습니다. 사고 과정을 끄고 출력 상한을 둬서 약 5분의 1로 줄였습니다. 하드웨어는 바꿀 수 없어 절대 속도는 그대로 남았고, 타임아웃과 비동기 분리를 따로 넣었습니다. 성능 개선이 아니라 안정성 조치입니다.",
          },
          {
            lead: "탐지 주체 전환",
            text: "이상 패턴이 여러 건 탐지됐는데 LLM이 반영된 건은 0건이었습니다. 룰이 후보를 일정 수 이상 찾을 때만 LLM을 호출하도록 되어 있어서, 룰이 만들지 못한 후보는 LLM이 볼 기회가 없었습니다. 게이트를 뒤집어 활동량이 있으면 LLM을 먼저 호출하고, 정의한 유형 밖의 패턴도 보고할 수 있게 했습니다. 룰은 힌트와 안전망 역할로 옮겼습니다.",
          },
          {
            lead: "다운타임 중 로그 유실",
            text: "테스트 중 LLM이 멈춘 구간에서 로그가 유실됐습니다. 수신부터 판별, 저장까지 한 호출 안에서 동기로 처리해서, 응답이 없으면 로그가 메모리에서 폐기됐습니다. 순서를 바꿔 로그를 받으면 판별보다 먼저 디스크에 쓰고, LLM은 비동기 큐로 나중에 합류시켰습니다.",
          },
        ],
      },
      {
        heading: "결과",
        paragraphs: [
          "룰 경로와 LLM 경로가 분리되면서, LLM을 내려도 판별과 위험도 계산, 저장, 화면이 그대로 동작합니다. LLM을 강제로 중단시킨 상태에서 로그를 흘려보내 유실이 생기지 않는 것까지 확인했습니다. 워크플로우 2종과 대시보드 6종을 만들어 최종 발표까지 마쳤습니다.",
          "발표에서 한계도 함께 적었습니다. RAG가 키워드 검색이라 코드 체계가 다르면 같은 뜻의 매뉴얼을 찾지 못합니다. 시계열 예측은 외부 라이브러리 없이 구현했지만 백테스트가 빗나갔고, 탐지 정확도는 정답 라벨이 없어 측정하지 못했습니다.",
          "중간에 시뮬레이터가 만든 로그를 집계해 사전을 채운 적이 있습니다. 넣은 값을 되읽는 구조여서, 실제 로그 추출본에서 다시 산출해 전부 고쳤습니다. 이후로는 모든 수치에 출처를 함께 적었습니다.",
        ],
      },
    ],
    code: {
      afterBlock: 1,
      sample: {
        caption: "룰로 완결되는 주 경로와 비동기 LLM 합류",
        code: `// 주 경로는 룰만으로 끝납니다. LLM 응답을 기다리지 않습니다
@Transactional
public LogView ingest(RawLog raw) {
    LogEntry saved = repository.save(LogEntry.from(raw));  // 판별보다 먼저 저장합니다
    Classification hit = dictionary.lookup(raw.code());

    if (hit != null) {
        return LogView.of(saved, riskScorer.score(hit));   // 사전에 있으면 여기서 끝
    }
    llmQueue.submit(saved.getId());                        // 미등록 건만 비동기로 넘깁니다
    return LogView.of(saved, riskScorer.unknown());
}`,
      },
    },
    insight:
      "LLM을 쓰는 기능에서는 어디까지 맡길지 정하는 판단이 가장 중요했습니다. 화면에 들어오는 실시간 데이터가 어디서 만들어지고 어디서 유실되는지 직접 확인하면서, 실시간 UI에서 무엇을 방어해야 하는지 기준이 생겼습니다.",
  },
];
