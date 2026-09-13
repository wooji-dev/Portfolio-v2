# 검증 기록

## 2026-09-13 카드 정렬 및 오브제 인터랙션 강화

- 여섯 표지의 동일한 높이와 소제목 좌표를 DOM으로 검증. 1280px에서 표지 545×368px, 소제목 left 23px / top 20px. 390px에서 높이 236px, left 18px / top 17px.
- 이전 Figma 도식, A/B 그래프, solvPS 코드 창은 유지하며 표지 비율만 1~3번과 통일.
- 1280px 및 320px에서 실제 드래그 후 위치 변경과 포인터 해제 확인. 별표가 코랄 링을 밀어내는 반응 확인.
- 클릭 및 Enter, 방향키로 오브제 위치와 회전 변경 확인. 다시 모으기와 Motion off에서 위치 및 각도 초기화, 버튼 비활성화 확인.
- 320px 및 390px에서 코드 본문이 창 안에 들어가며 캡션과 겹치지 않음.
- 320px, 390px, 700px, 800px, 1280px에서 가로 넘침 없음. 중간 화면 너비의 오브제와 상단 소개 문구 간격 조정.
- All work와 Web & Data 필터 확인. 브라우저 경고 및 오류 없음.
- `npm run build`와 `git diff --check` 통과. 실제 터치 기기 및 OS 모션 감소 설정의 기기 검증은 수행하지 않음.

## 2026-09-13 메인 인터랙션 및 이전 프로젝트 표지 복원

- `npm run build`: TypeScript 검사와 Vite 프로덕션 빌드 성공. `git diff --check` 통과.
- 클릭 및 Enter 키로 오브제 회전값이 360도, 720도로 누적되는 것을 확인.
- 커서 이동에 따른 오브제 이동 및 3D 기울기, 프로젝트 링크 이동에 따른 스크롤 모션 값 변경 확인.
- Motion off: 위치와 회전값 초기화, 오브제 버튼 비활성화, 이미지 및 제목 애니메이션 중지 확인. Motion on으로 다시 활성화 확인.
- Figma MCP, ELO, solvPS의 JSX가 `d71b5e8`과 동일함을 비교 확인(서식과 복원 스타일용 클래스 제외). 기존 색상, 도형, 글꼴과 표지 비율 복원.
- 1280px에서 세 그래픽 표지 시각 확인. 320px 및 390px에서 코드 창의 행간과 여백 조정 후 시각 확인.
- 320px, 390px, 700px, 1280px, 1440px에서 페이지 가로 넘침 없음.
- AI & Automation 및 Web & Data 필터, solvPS 상세 열기와 Esc 닫기 확인.
- 브라우저 콘솔 경고 및 오류 없음. 터치 기기나 OS 모션 감소 설정의 실제 기기 검증은 수행하지 않음.

## 2026-09-13 힉스필드 오브제 및 전체 리디자인

- `npm run build`: TypeScript 검사와 Vite 프로덕션 빌드 성공.
- `git diff --check`: 통과.
- JavaScript 169.92 KB (gzip 58.54 KB), CSS 22.67 KB (gzip 5.71 KB).
- 힉스필드 생성 오브제: 1024 × 1024로 정상 로딩. 웹용 JPEG 약 109 KiB.
- 1280px 데스크톱에서 표지, 프로젝트 카드, 소개, 경력 시각 확인.
- 390px에서 표지, 소개, 프로젝트 상세 및 모바일 메뉴 시각 확인.
- 320px에서 표지와 연락처, 700px에서 표지 시각 확인.
- 320px, 390px, 700px, 1280px, 1440px에서 페이지 가로 넘침 없음.
- Finance 필터: Pocket Stock, SOLMate 및 PayTrace 표시.
- AI & Automation 필터: AIOps와 Figma MCP 표시.
- Web & Data 필터: ELO와 solvPS 표시. All work로 복원 확인.
- Pocket Stock 상세 창 열림, 제목과 설명 표시, Esc 닫기 및 `#work` 복귀 확인.
- 영상 3개에 포스터와 재생 컨트롤 포함, 자동재생 없음. 전체 재생 시간은 재검증하지 않음.
- 모바일 메뉴에서 About과 Contact 이동 및 메뉴 닫힘 확인.
- Motion off에서 이미지 애니메이션이 `none`으로 변경됨.
- 육군 장교 복무 이력 표시 확인.
- 브라우저 오류 및 경고 없음. 실제 iOS/Safari 기기 검증이나 자동 접근성 감사는 수행하지 않음.

## 이전 리디자인 검증

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

## 2026-09-13 메인 표지 단순화

- `npm run build`: TypeScript 검사와 Vite 프로덕션 빌드 성공.
- `git diff --check`: 통과.
- 1440px 데스크톱과 390px, 320px 모바일에서 제목, 버튼, 새 이미지 배치 확인.
- 700px, 390px, 320px에서 페이지 가로 넘침 없음. 설명 및 버튼과 이미지 영역 사이에 36px 간격을 확보하며 겹치지 않음.
- 장식 화살표, 좌표 레이블, 보조 문구가 DOM에서 제거됨.
- 새 `quiet-loop.jpg`: 원본 크기 1536 × 1024로 정상 로딩, 웹용 파일 약 133 KB.
- Motion off에서 이미지의 계산된 `animation-name`이 `none`으로 변경됨.
- 프로젝트 살펴보기 링크가 `#work`로 이동하고, 홈 링크가 표지로 돌아옴.
