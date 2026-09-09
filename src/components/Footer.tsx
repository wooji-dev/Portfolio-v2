import { profile } from "../data/profile";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <span>
          {profile.name}, {profile.role}
        </span>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <a href={profile.github} target="_blank" rel="noreferrer">
          {profile.github.replace("https://", "")}
        </a>
        <span className="footer__spacer">{profile.location}</span>
      </div>
    </footer>
  );
}
