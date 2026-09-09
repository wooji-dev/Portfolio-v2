import type { CodeSample } from "../types";

/** 코드 예시. 가로가 넘치면 블록 안에서만 스크롤된다. */
export function CodeBlock({ sample }: { sample: CodeSample }) {
  return (
    <>
      <p className="caption">{sample.caption}</p>
      <pre>
        <code>{sample.code}</code>
      </pre>
    </>
  );
}
