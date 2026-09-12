/**
 * 이미지 자리의 모양. 화면 비율과 모서리 처리를 결정한다.
 * natural은 비율을 고정하지 않고 원본 이미지의 세로 길이를 그대로 따른다.
 */
export type SlotKind = "phone" | "wide" | "band" | "square" | "natural";

/** 이미지 자리. src가 없으면 안내 문구가 있는 placeholder로 렌더된다. */
export interface ImageSlot {
  readonly kind: SlotKind;
  /** 무엇이 들어갈 자리인지 */
  readonly title: string;
  /** 권장 크기나 촬영 조건 */
  readonly hint: string;
  /** 정지 이미지. public/ 기준 경로 */
  readonly src?: string;
  /**
   * 잘라내기 방식. 기본은 자리를 꽉 채우는 cover.
   * contain은 비율이 다른 이미지를 잘리지 않게 통째로 보여준다.
   */
  readonly fit?: "cover" | "contain";
  /** 여러 칸 배치에서 이 자리만 한 줄을 다 쓰게 한다. */
  readonly span?: "full";
  /**
   * 원본 픽셀 크기. img와 video의 width/height 속성으로 나간다.
   * 이 값이 있어야 브라우저가 파일을 받기 전에 자리를 미리 잡는다.
   * 없으면 이미지가 뒤늦게 로드되면서 아래 내용이 밀려, 메뉴로 이동한 위치가 어긋난다.
   */
  readonly size?: { readonly w: number; readonly h: number };
  /**
   * 화면 녹화 영상. 자동재생, 무음, 반복.
   * 브라우저가 지원하는 형식을 고르도록 둘 다 준다.
   * webm(VP9)은 크롬과 파이어폭스, mp4(H.264)는 사파리와 iOS를 담당한다.
   */
  readonly video?: {
    readonly webm?: string;
    readonly mp4: string;
  };
  /** 영상이 로드되기 전에 보여줄 이미지 */
  readonly poster?: string;
  readonly alt?: string;
}

export interface MetaRow {
  readonly label: string;
  readonly value: string;
}

/**
 * 본문 한 문단.
 * 문자열이면 그대로 쓰고, lead가 있으면 앞에 굵은 소제목이 붙는다.
 * 트러블슈팅처럼 사례가 나열되는 곳에서 무슨 이야기인지 먼저 보이게 하는 용도다.
 */
export type Paragraph =
  | string
  | { readonly lead: string; readonly text: string };

/** 프로젝트 본문 한 덩어리. 소제목 + 문단 + 선택적 불릿. */
export interface ProseBlock {
  readonly heading: string;
  readonly paragraphs: readonly Paragraph[];
  readonly bullets?: readonly string[];
}

export interface CodeSample {
  readonly caption: string;
  readonly code: string;
}

/** 섹션 배경. 흰 배경과 회색 배경을 번갈아 쓴다. */
export type SectionTone = "light" | "grey";

export interface Project {
  readonly category?: "Finance" | "AI & Automation" | "Web & Data";
  readonly tags?: readonly string[];
  readonly github?: string;
  readonly shortDescription?: string;
  readonly year?: string;
  readonly highlight?: string;
  readonly id: string;
  readonly navLabel: string;
  readonly eyebrow: string;
  readonly headline: string;
  readonly lede: string;
  readonly tone: SectionTone;
  readonly slots: readonly ImageSlot[];
  /**
   * phone 3칸, split 2칸, single 1칸.
   * pair는 넓은 화면과 좁은 화면을 가로로 나란히 두는 배치다.
   */
  readonly slotLayout: "phone" | "split" | "single" | "pair";
  readonly meta: readonly MetaRow[];
  readonly blocks: readonly ProseBlock[];
  /** 코드는 blocks 중 어느 것 뒤에 붙을지 인덱스로 지정한다. */
  readonly code?: { readonly afterBlock: number; readonly sample: CodeSample };
  readonly insight: string;
}

export interface SummaryCard {
  readonly id: string;
  readonly title: string;
  readonly problem: string;
  readonly change: string;
  readonly result: string;
}

export interface Profile {
  readonly name: string;
  readonly role: string;
  readonly headline: readonly string[];
  readonly lede: string;
  readonly email: string;
  readonly github: string;
  readonly location: string;
}
