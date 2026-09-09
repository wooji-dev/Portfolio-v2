import type { ElementType, ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

interface RevealProps {
  children: ReactNode;
  /** 렌더할 태그. 기본은 div */
  as?: ElementType;
  className?: string;
  /** 같은 줄의 카드들을 순서대로 늦게 보여줄 때 쓴다 */
  delayMs?: number;
}

/** 자식을 스크롤 등장 대상으로 감싼다. */
export function Reveal({ children, as: Tag = "div", className, delayMs = 0 }: RevealProps) {
  const ref = useReveal<HTMLElement>(delayMs);
  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
