import { summaryCards } from "../data/summary";
import { Reveal } from "./Reveal";

export function Summary() {
  return (
    <section className="section section--alt" id="summary">
      <div className="wrap">
        <Reveal as="h2" className="h-section">
          네 개의 프로젝트,
          <br />
          같은 방식.
        </Reveal>
        <Reveal as="p" className="lede">
          문제를 먼저 규정하고, 반복되는 복잡도를 한 곳에서 관리되는 구조로 바꿨습니다.
        </Reveal>

        <div className="cards">
          {summaryCards.map((card, i) => (
            <Reveal key={card.id} as="article" className="card" delayMs={(i % 2) * 90}>
              <h3>{card.title}</h3>
              <p className="card__key">정의한 문제</p>
              <p>{card.problem}</p>
              <p className="card__key">어떻게 바꿨는가</p>
              <p>{card.change}</p>
              <p className="card__key">결과</p>
              <p className="card__result">{card.result}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
