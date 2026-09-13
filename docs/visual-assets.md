# 이미지 자산

2026-09-13 메인 오브제는 **Higgsfield 연결 도구**에서 새로 생성한 블루 글라스 루프와 라일락 클로버입니다. 두 이미지의 둥근 곡면, 빛의 방향과 반투명 유리 질감을 통일했습니다. 큰 루프와 작은 클로버를 대각선으로 배치하며 드래그, 관성, 충돌과 키보드 조작을 유지합니다.

## 현재 글라스 오브제

- 서비스 / 모델: Higgsfield / `gpt_image_2`
- 설정: 각각 1:1, 1k, quality high, 1장.
- 블루 루프 작업: `28262493-489f-49da-b0c6-e6118e57982b`
- 라일락 클로버 작업: `29f1ba0c-fe15-4924-973f-1bbdebbc445c`
- 웹용: `public/imgs/azure-loop.jpg` (1024 × 1024, 약 102 KiB), `public/imgs/lilac-clover.jpg` (1024 × 1024, 약 99 KiB).
- 생성 원본: `design-assets/azure-loop-higgsfield.png`, `design-assets/lilac-clover-higgsfield.png`.
- 정확한 생성 프롬프트와 작업 ID: `design-assets/glass-objects-prompts.json`.
- 원본은 아이보리 배경을 포함합니다. JPEG로 인코딩하고 CSS multiply 및 가장자리 마스크로 페이지 배경에 연결합니다. 투명 PNG가 아닙니다.
- 이미지 경로 및 인터랙션: `src/components/HeroPlayground.tsx`. 표시 크기 및 반응형 배치: `src/styles/app.css`.
- 세 번째 조약돌 생성 요청은 크레딧 부족으로 접수되지 않았습니다. 완료된 두 이미지만 사용합니다. 사이트 실행에는 Higgsfield 계정이나 API 키가 필요하지 않습니다.

### Pinterest 참고

직접 확인한 [유리 매듭](https://in.pinterest.com/pin/920141767622636899/)의 연속적인 곡면과 [Khyati Trehan의 형태·색 조합](https://in.pinterest.com/pin/840062136732952339/), [굴절된 유리와 둥근 입체](https://co.pinterest.com/pin/343962490309893410/)를 참고했습니다. 레퍼런스의 금속 반사, 줄무늬, 많은 색과 복잡한 배치는 덜어냈습니다. 참고 이미지를 복사하거나 생성 도구에 업로드하지 않고 새 형태를 프롬프트로 생성했습니다.

## 이전 별표 오브제

이전 파란 별표 원본과 웹용 파일은 보관합니다. 초록 타일과 코랄 링을 그리던 CSS는 현재 메인에서 제거했습니다.

- 서비스: Higgsfield
- 생성 모델: `gpt_image_2`
- 생성 작업: `00a8417a-d385-48bf-b910-9757b0d8ded9`
- 생성 설정: 1:1, 1k, quality low, 1장. 해상도와 품질은 서비스 기본값.
- 웹용 파일: `public/imgs/blue-asterisk.jpg` (1024 × 1024, 약 109 KiB)
- 생성 원본: `design-assets/blue-asterisk-higgsfield.png`
- JPEG는 원본을 웹 전송용으로 변환한 파일. 웹사이트 실행에는 Higgsfield 계정이나 API 키가 필요하지 않음.

### 이전 별표 생성 프롬프트

```text
Create one standalone design object for a calm, editorial software developer portfolio. A single cobalt blue sculptural asterisk with six broad softly rounded arms, sculpted as one continuous solid piece. The shape is compact, playful but sophisticated, with a distinctive clear silhouette. Stylized 2.5D graphic, matte smooth clay-like finish with very soft volume and restrained shading; no photorealistic texture. Viewed nearly front-on with just a slight tilt to reveal thickness. Exact primary color vivid ultramarine blue #2455D6. Center the object on a completely plain warm ivory #F6F5F1 background with no floor, no horizon, no cast shadow. Object occupies 62% of a square canvas with generous equal empty margins. This is a tiny accent beside oversized typography, so prioritize an instantly readable simple silhouette and broad clean surfaces. No rings, no loop, no ribbon, no knot, no chrome, no glass, no wires, no fibers, no sparkles, no particles, no extra shapes, no text, no letters, no logos, no watermark, no UI. One object only. Clean, minimal contemporary editorial graphic.
```

생성 결과는 다섯 갈래의 둥근 형태로 나왔으며, 단순한 포인트 오브제로 선택했습니다.

## 프로젝트 화면

Pocket Stock, AIOps, SOLMate의 썸네일과 상세 화면은 기존 저장소의 실제 서비스 캡처 및 영상을 사용합니다. Figma MCP, ELO, solvPS는 사용자 요청으로 `d71b5e8`의 그래픽 표지를 복원했습니다. Figma→코드 도식, A/B 전환율 그래프, 개념 코드 창을 기존 색상과 글꼴로 표시합니다. 이후 요청에 따라 여섯 표지의 비율을 데스크톱 1.48:1, 모바일 1.45:1로 통일하고 왼쪽 위에 같은 형식의 분야명을 표시합니다. 코드는 표지 너비에 맞춰 글꼴과 여백을 조정합니다. 새 이미지 생성은 수행하지 않았습니다.

## solvPS 상세 이미지

사용자가 제공한 `스크린샷 2026-03-09 오후 4.09.07.png`(2880 × 1800)를 사용합니다. 팀 활동 랭킹, 학습 로드맵과 팀 코드 비교가 보이는 실제 서비스 화면입니다. 원본의 구도와 내용을 유지하며 JPEG 품질 92로 인코딩한 `public/imgs/solvps-group-dashboard.jpg`를 상세 영역 전체 너비에 맞춰 표시합니다. 이미지 URL도 변경해 이전 목업의 캐시와 구분합니다. 메인 프로젝트 표지는 기존 개념 코드 그래픽을 유지합니다.

이전 PDF에서 추출한 699 × 432 노트북 목업은 Git 기록에 남아 있습니다.

## 이전 생성 이미지 보관

기존 `signal-loop`와 `quiet-loop`의 웹용 이미지 및 원본은 그대로 보관합니다. 해당 이미지들은 내장 image_gen으로 생성한 이전 시안이며, 각각의 프롬프트는 이 문서의 Git 기록에 남아 있습니다.
