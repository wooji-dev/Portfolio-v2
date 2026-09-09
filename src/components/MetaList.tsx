import type { MetaRow } from "../types";

/** 역할, 스택, 기간처럼 라벨과 값이 짝을 이루는 목록. */
export function MetaList({ rows }: { rows: readonly MetaRow[] }) {
  return (
    <ul className="metalist">
      {rows.map((row) => (
        <li key={row.label}>
          <b>{row.label}</b>
          <span>{row.value}</span>
        </li>
      ))}
    </ul>
  );
}

/** 기술 스택, 이력처럼 폭이 넓은 라벨과 값의 목록. 값 안의 줄바꿈을 살린다. */
export function RowList({ rows }: { rows: readonly MetaRow[] }) {
  return (
    <ul className="rows">
      {rows.map((row) => (
        <li key={row.label}>
          <b>{row.label}</b>
          <span>
            {row.value.split("\n").map((line, i, all) => (
              <span key={line}>
                {line}
                {i < all.length - 1 ? <br /> : null}
              </span>
            ))}
          </span>
        </li>
      ))}
    </ul>
  );
}
