# 이미지 자산

힉스필드 연결 없이 내장 이미지 생성 도구로 `signal-loop`를 생성했습니다. 이 웹사이트에는 이미지 생성 API 키나 계정 연결이 필요하지 않습니다.

- 웹용 이미지: `public/imgs/signal-loop.jpg` (1536 × 1024, 약 452 KB)
- 원본 PNG: `design-assets/signal-loop-original.png`
- 생성 방식: Codex 내장 image_gen. JPEG는 웹 전송용 포맷 변환본입니다.
- 이미지 경로를 바꿀 곳: `src/App.tsx`의 hero-art.
- 프로젝트 이미지와 영상: 기존 저장소의 `public/imgs` 및 `public/shots`.

## 실제 생성 프롬프트

```text
Use case: stylized-concept. Asset type: a standalone hero artwork for a software engineer's interactive portfolio. Create a sophisticated abstract 3D sculptural loop of flowing interlaced fiber-optic filaments, shaped as one asymmetrical open knot suggesting interconnected systems and continuous learning. Brushed silver strands with crisp electric chartreuse highlights, subtle glasslike transparency and delicate graphite shadows. Deep near-black charcoal backdrop (#10110f), restrained studio side lighting, tactile material, crisp fine filament detail, high-end experimental design studio aesthetic. Landscape 3:2 composition, object centered with generous margins, single object occupying 75% of frame. No text, no letters, no logo, no UI, no watermark. Output intended as a website hero image.
```

힉스필드 등 다른 이미지 도구에서도 이 프롬프트를 참고해 대체 자산을 만들 수 있습니다. 생성 결과를 3:2 비율 이미지로 저장한 뒤 웹용 파일을 교체하면 됩니다. 실제 프로젝트 화면과 생성한 콘셉트 이미지는 구분해서 사용합니다.
