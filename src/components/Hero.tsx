import { profile } from "../data/profile";

export function Hero() {
  const lede = profile.lede.split("\n");
  return (
    <header className="hero" id="top">
      <p className="eyebrow">{profile.role}</p>
      <h1 className="h-hero">
        {profile.headline.map((line, i, all) => (
          <span key={line}>
            {line}
            {i < all.length - 1 ? <br /> : null}
          </span>
        ))}
      </h1>
      <div className="lede">
        {lede.map((str) => (
          <p className="lede-str">{str}</p>
        ))}
      </div>
      <div className="hero__cta">
        <a className="btn btn--fill" href={`mailto:${profile.email}`}>
          이메일 보내기
        </a>
        <a
          className="btn btn--ghost"
          href={profile.github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}
