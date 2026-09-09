import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // GitHub Pages 프로젝트 페이지로 배포할 때는 저장소 이름을 base로 지정합니다.
  // 예: base: "/portfolio/"
  base: "./",
});
