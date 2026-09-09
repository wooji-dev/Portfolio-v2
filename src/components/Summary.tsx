import { summaryCards } from "../data/summary";
import { Reveal } from "./Reveal";

export function Summary() {
  return (
    <section className="section section--alt" id="summary">
      <div className="wrap">
        <Reveal as="h2" className="h-section">
          프로젝트 요약
        </Reveal>
        <Reveal as="p" className="lede">
          네 개 프로젝트에서 정의한 문제와 바꾼 내용, 결과를 정리했습니다.
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
