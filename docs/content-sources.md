# 콘텐츠 근거

확인일: 2026-09-12. 최신 경험 기록을 우선하고, 기존 포트폴리오의 실제 캡처와 영상은 재사용했습니다.

## 본문 근거

- [Notion 경험 통합 기록](https://app.notion.com/p/31f3bc423167801ca29beefc309e1bf7): 브라우저에서 경력, 교육, 자격 및 PART 4 프로젝트 정리와 AIOps 2026.09.04 최종 발표 원문을 읽었습니다.
- [기존 포트폴리오 저장소](https://github.com/wooji-dev/Portfolio-v2): 기존 React / Vite 구조, 이미지와 시연 영상, 연락처를 유지했습니다.
- 일반 프로필 이외의 주소, 생년월일, 전화번호, 자격증 식별번호는 포트폴리오에 옮기지 않았습니다.

## 반영 내용

- 정보처리기사 취득일 2026.09.11 추가.
- 신한투자증권 인턴 종료일 2026.09.04, 교육 수료일 2026.07.02 확인.
- 육군 장교 복무 이력 추가: 2021.03.02~2023.06.30, 공보정훈 / 홍보문화장교, 중위 만기전역. 앞서 열람한 Notion 기록의 장병 교육, 군 행사 기획 및 운영, 홍보 업무와 군 인트라넷 UI 개선 공모전 참여를 반영.
- Pocket Stock: 전 화면, User / Security 및 거래 인증 담당 범위 반영. 노션 최신 정리에서 확인되지 않은 PM 역할과 멱등키 구현 및 무결점 검사 서술은 제외.
- SOLMate: Redis 분산 락, DB 비관적 락, 단일 트랜잭션, SharedWorker와 서버 시세 처리 반영. 오래된 포트폴리오의 추가 디버깅 에피소드를 재구성하지 않음.
- Figma MCP: 기존 오픈소스 확장, 도구 7개, stdout / stderr 분리, 입력 형식과 인증 토큰 처리 반영.
- AIOps: 주 경로의 룰 판별과 미등록 건 비동기 검토, 15분 집계 분석을 구분. 1시간 → 30초는 개발 환경의 흐름 검증 시간. 실 로그 연동 및 탐지 정확도, 장기 중단 재현은 미완료로 명시. 기존 사이트의 무손실 검증 완료 표현 수정.
- ELO: 2025.06~12. 전환율 2.7% → 3.9%, ROAS 190% → 240%는 협업한 데이터 기반 개선 과정의 결과로 표시.
- solvPS와 PayTrace 추가. PayTrace는 UI / PDF 리포트 MVP와 설계 단계인 연동 기능을 구분하며 미확인 개별 기간은 쓰지 않음.
- Figma MCP, ELO, solvPS 썸네일은 `d71b5e8`의 그래픽 표지를 복원한 것. 각각 Figma→코드 연결 도식, 전환율 2.7%→3.9%를 표시한 A/B 그래프, 학습 분석을 표현한 개념 코드이며 실제 서비스 화면이 아님. Pocket Stock, AIOps, SOLMate 썸네일에는 기존 실제 캡처를 사용.
- 2026-09-13 solvPS 상세에 기존 `Portfolio_우정인.pdf`의 팀 활동 랭킹·학습 로드맵 노트북 이미지를 추가. 원본 PDF의 해당 프로젝트 섹션과 포함 이미지 `X55`를 직접 확인한 뒤 추출했으며, 본문이나 표지 그래픽은 변경하지 않음.

## 2026-09-13 리디자인 참고

- [Rauno Freiberg](https://rauno.me/): 공개 포트폴리오를 브라우저에서 열어 큰 글자와 제한된 색, 여백 중심의 구성을 확인.
- [Pinterest — Minimalist website design with white space and serif typefaces](https://www.pinterest.com/pin/124552745935441658/): 공개 핀의 여백 및 세리프 타이포그래피 방향 참고.
- 아이보리 `#f6f5f1`, 짙은 회색 `#232321`, 파랑 `#2455d6`으로 색을 제한. DM Sans와 Instrument Serif, Noto Sans KR 조합 사용.
- 힉스필드 오브제는 표지의 작은 포인트 하나로 사용. 프로젝트는 실제 화면과 간결한 제목, 소개 및 경력은 텍스트와 구분선 중심으로 구성.
- 실제 콘텐츠와 포트폴리오 정보 구조에 맞춰 새로 구현했으며 다른 사이트의 코드나 자산을 복제하지 않음.

## 이전 리디자인 참고

특정 사이트를 복제하지 않고 큰 타이포그래피, 비대칭 프로젝트 배열, 일관된 작은 모션, 프로젝트 상세 전환을 참고했습니다.

- [laksonline — Awwwards](https://www.awwwards.com/sites/laksonline): 2025년 후보, 타이포그래피 및 일관된 테마와 미세한 인터랙션.
- [Dipsy Portfolio — Awwwards](https://www.awwwards.com/inspiration/dipsy-portfolio-dipsy-studio): 타이포그래피, 미니멀한 구성과 모션.
- [Project Gallery — Donprod Portfolio](https://www.awwwards.com/inspiration/project-gallery-donprod-portfolio-double-or-nothing): 프로젝트 갤러리와 상세 화면 전환.
