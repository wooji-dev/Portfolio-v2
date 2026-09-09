import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { prefersReducedMotion } from "./hooks/useReveal";
import "./styles/tokens.css";
import "./styles/app.css";

// 히어로 등장 애니메이션은 모션을 줄이지 않은 환경에서만 켠다.
if (!prefersReducedMotion()) {
  document.documentElement.classList.add("motion");
}

const container = document.getElementById("root");
if (!container) throw new Error("#root 를 찾을 수 없습니다.");

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
