# 이미지 자산

메인 표지에는 무광 라임색 리본 하나로 구성한 `quiet-loop`를 사용합니다. 힉스필드 설치가 완료되지 않아 Codex 내장 이미지 생성 도구로 생성했습니다. 웹사이트 실행에는 이미지 생성 API 키나 계정 연결이 필요하지 않습니다.

- 웹용 이미지: `public/imgs/quiet-loop.jpg` (1536 × 1024, 약 133 KB)
- 원본 PNG: `design-assets/quiet-loop-original.png`
- 생성 방식: Codex 내장 image_gen. JPEG는 웹 전송용 포맷 변환본입니다.
- 이미지 경로를 바꿀 곳: `src/App.tsx`의 hero-art.
- 프로젝트 이미지와 영상: 기존 저장소의 `public/imgs` 및 `public/shots`.

## 실제 생성 프롬프트

```text
Use case: stylized-concept.
Asset type: replacement hero artwork for a minimalist software engineer portfolio, landscape 3:2.
Primary request: a single simple, bold, sculptural loop with a wide continuous ribbon and one gentle twist. An iconic silhouette, easily readable at small size. Flat editorial illustration with restrained soft 3D volume, deliberately stylized, not photorealistic.
Scene/backdrop: completely plain near-black charcoal (#10110f), no environment, no horizon, no floor, no glow. Background must be uniform all the way to all four edges.
Subject: just ONE smooth thick ribbon loop, gently tilted diagonally, with a generous open center. Broad unbroken surfaces and rounded edges. Matte chartreuse lime (#d4fa5b) front surface; muted dark olive underside; very gentle shading, no glossy highlights.
Composition/framing: object centered, occupying about 65% of the canvas width and 74% of the height, generous empty margin around it. Calm, confident, clean graphic design, minimal visual information.
Constraints: no text, no labels, no logo, no watermark, no symbols, no arrows. No fibers, no strands, no wires, no repeated ridges, no woven elements, no chrome, no metal, no glass, no sparkles, no particles, no realistic material textures. No additional objects. Produce only the standalone artwork, not a website mockup.
```

힉스필드 등 다른 이미지 도구에서도 이 프롬프트를 참고해 대체 자산을 만들 수 있습니다. 생성 결과를 3:2 비율 이미지로 저장한 뒤 웹용 파일을 교체하면 됩니다. 다른 비율을 사용하면 `src/App.tsx`의 이미지 `width`와 `height`도 함께 수정합니다. 실제 프로젝트 화면과 생성한 콘셉트 이미지는 구분해서 사용합니다.

## 이전 이미지 보관

기존 섬유 형태의 `public/imgs/signal-loop.jpg`와 `design-assets/signal-loop-original.png`도 보관합니다. 이전 생성 프롬프트는 이 문서의 Git 기록에서 확인할 수 있습니다.
