import type { ImageSlot as Slot } from "../types";
import { prefersReducedMotion } from "../hooks/useReveal";

const PHONE_ICON = (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <rect x="6" y="2" width="12" height="20" rx="3" />
    <path d="M11 18.5h2" />
  </svg>
);
const SCREEN_ICON = (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <rect x="2" y="4" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 18v3" />
  </svg>
);
const DIAGRAM_ICON = (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <circle cx="12" cy="12" r="3" />
    <circle cx="4" cy="5" r="2" />
    <circle cx="20" cy="5" r="2" />
    <circle cx="4" cy="19" r="2" />
    <path d="M6 6.5 10 10M18 6.5 14 10M6 17.5 10 14" />
  </svg>
);

function iconFor(kind: Slot["kind"]) {
  if (kind === "phone") return PHONE_ICON;
  if (kind === "band") return DIAGRAM_ICON;
  return SCREEN_ICON;
}

/**
 * 이미지 자리.
 * video가 있으면 화면 녹화를, src가 있으면 이미지를,
 * 둘 다 없으면 무엇을 넣을지 안내하는 틀을 보여준다.
 */
export function ImageSlot({ slot }: { slot: Slot }) {
  const base = [
    "slot",
    `slot--${slot.kind}`,
    slot.fit === "contain" ? "slot--contain" : "",
    slot.span === "full" ? "slot--full" : "",
  ]
    .filter(Boolean)
    .join(" ");

  if (slot.video) {
    // 모션을 줄이도록 설정한 사용자에게는 자동재생 대신 재생 버튼을 준다.
    const reduced = prefersReducedMotion();
    return (
      <figure className={`${base} slot--filled`} style={{ margin: 0 }}>
        <video
          poster={slot.poster}
          aria-label={slot.alt ?? slot.title}
          width={slot.size?.w}
          height={slot.size?.h}
          preload="metadata"
          playsInline
          muted
          loop={!reduced}
          autoPlay={!reduced}
          controls={reduced}
        >
          {slot.video.webm ? <source src={slot.video.webm} type="video/webm" /> : null}
          <source src={slot.video.mp4} type="video/mp4" />
        </video>
        <figcaption className="slot__caption">{slot.title}</figcaption>
      </figure>
    );
  }

  if (slot.src) {
    return (
      <figure className={`${base} slot--filled`} style={{ margin: 0 }}>
        <img
          src={slot.src}
          alt={slot.alt ?? slot.title}
          width={slot.size?.w}
          height={slot.size?.h}
          loading="lazy"
          decoding="async"
        />
        <figcaption className="slot__caption">{slot.title}</figcaption>
      </figure>
    );
  }

  return (
    <div className={base} role="img" aria-label={`이미지 자리: ${slot.title}`}>
      {iconFor(slot.kind)}
      <span className="slot__title">{slot.title}</span>
      <span className="slot__hint">{slot.hint}</span>
    </div>
  );
}
