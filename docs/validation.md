# 검증 기록

2026-09-12~13, 로컬 프로덕션 빌드를 인앱 브라우저에서 확인했습니다.

- `npm ci`: 기존 package-lock.json으로 설치 완료.
- `npm run build`: TypeScript 검사와 Vite 프로덕션 빌드 성공.
- JavaScript 약 173.5 KB (gzip 59.3 KB), CSS 약 28.9 KB (gzip 7.3 KB).
- `git diff --check`: 통과.
- 코드에서 참조한 이미지 및 영상 17개 경로: 파일 존재 확인.
- 데스크톱 1280px: 첫 화면, 프로젝트 탐색, 상세 창 시각 확인.
- 모바일 390px: 첫 화면, 메뉴, 필터, Pocket Stock 상세 창 시각 확인.
- 390px 및 320px: 페이지 전체 가로 넘침 없음.
- AI & Automation 필터: AIOps와 Figma MCP 2개 표시.
- Finance 필터: Pocket Stock과 SOLMate, PayTrace 3개 표시.
- Web & Data 필터: ELO와 solvPS 2개 표시.
- 상세 창의 제목과 실제 본문 표시, Esc 키 닫기 확인.
- Pocket Stock 영상 3개: 포스터, 수동 재생 및 브라우저 컨트롤 설정 확인. 모든 영상의 전체 재생 시간은 검증하지 않음.
- Motion off: 토글의 상태와 버튼 레이블 변경 확인. 운영체제 reduced-motion을 위한 CSS와 미디어 쿼리 리스너 포함.
- 검사 중 브라우저 콘솔 경고와 오류 없음.

GitHub PR에는 Node.js 20에서 같은 빌드를 수행하는 검증 워크플로우를 추가했습니다. 자동 접근성 감사나 실제 iOS/Safari 기기 검증을 수행한 것은 아닙니다.
