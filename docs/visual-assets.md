# 이미지 자산

2026-09-13 리디자인의 메인 오브제는 **Higgsfield 연결 도구**에서 생성한 파란색의 둥근 별표 형태입니다. 화면에서는 작은 포인트 하나로 사용합니다.

- 서비스: Higgsfield
- 생성 모델: `gpt_image_2`
- 생성 작업: `00a8417a-d385-48bf-b910-9757b0d8ded9`
- 생성 설정: 1:1, 1k, quality low, 1장. 해상도와 품질은 서비스 기본값.
- 웹용 파일: `public/imgs/blue-asterisk.jpg` (1024 × 1024, 약 109 KiB)
- 생성 원본: `design-assets/blue-asterisk-higgsfield.png`
- JPEG는 원본을 웹 전송용으로 변환한 파일. 웹사이트 실행에는 Higgsfield 계정이나 API 키가 필요하지 않음.
- 이미지 경로 및 크기: `src/App.tsx`의 hero-art. 표시 크기와 움직임: `src/styles/app.css`.

## 실제 생성 프롬프트

```text
Create one standalone design object for a calm, editorial software developer portfolio. A single cobalt blue sculptural asterisk with six broad softly rounded arms, sculpted as one continuous solid piece. The shape is compact, playful but sophisticated, with a distinctive clear silhouette. Stylized 2.5D graphic, matte smooth clay-like finish with very soft volume and restrained shading; no photorealistic texture. Viewed nearly front-on with just a slight tilt to reveal thickness. Exact primary color vivid ultramarine blue #2455D6. Center the object on a completely plain warm ivory #F6F5F1 background with no floor, no horizon, no cast shadow. Object occupies 62% of a square canvas with generous equal empty margins. This is a tiny accent beside oversized typography, so prioritize an instantly readable simple silhouette and broad clean surfaces. No rings, no loop, no ribbon, no knot, no chrome, no glass, no wires, no fibers, no sparkles, no particles, no extra shapes, no text, no letters, no logos, no watermark, no UI. One object only. Clean, minimal contemporary editorial graphic.
```

생성 결과는 다섯 갈래의 둥근 형태로 나왔으며, 단순한 포인트 오브제로 선택했습니다.

## 프로젝트 화면

Pocket Stock, AIOps, SOLMate의 썸네일과 상세 화면은 기존 저장소의 실제 서비스 캡처 및 영상을 사용합니다. Figma MCP, ELO, solvPS는 사용자 요청으로 `d71b5e8`의 그래픽 표지를 복원했습니다. Figma→코드 도식, A/B 전환율 그래프, 개념 코드 창을 기존 색상과 글꼴로 표시합니다. 모바일에서는 코드가 잘리지 않도록 행간과 내부 여백을 조정했습니다. 새 이미지 생성은 수행하지 않았습니다.

## 이전 이미지 보관

기존 `signal-loop`와 `quiet-loop`의 웹용 이미지 및 원본은 그대로 보관합니다. 해당 이미지들은 내장 image_gen으로 생성한 이전 시안이며, 각각의 프롬프트는 이 문서의 Git 기록에 남아 있습니다.
