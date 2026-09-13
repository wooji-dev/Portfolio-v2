# 우정인 — Interactive Portfolio

React 18 + TypeScript + Vite 기반 GitHub Pages 포트폴리오입니다. 아이보리 바탕, 큰 타이포그래피, 힉스필드에서 생성한 파란 오브제 하나로 구성했습니다. 7개 프로젝트, 분야별 필터, 프로젝트 상세 창, 실제 시연 영상, 기술 및 경력 타임라인을 제공합니다.

## 실행

Node.js 20 이상을 권장합니다. 의존성 버전과 package-lock.json은 기존 프로젝트를 유지했습니다.

```bash
npm ci
npm run dev
```

```bash
npm run typecheck
npm run build
npm run preview
```

`npm run dev -- --host 127.0.0.1 --port 5173 --strictPort`처럼 주소와 포트를 지정할 수 있습니다. `scripts/vite.mjs`에서 Vite API를 호출하고 `vite.config.mjs`를 ESM으로 직접 불러옵니다. 설정 파일을 다시 esbuild로 번들링하는 과정을 생략해 로컬 설정 로딩 정지를 피합니다.

## 변경할 곳

- `src/data/projects.ts`: 프로젝트 본문, 역할, 기술, 이미지와 GitHub 링크.
- `src/data/profile.ts`: 이름, 소개, 연락처.
- `src/App.tsx`: 사이트 구성, 경력, 기술 묶음, 필터와 상세 창.
- `src/hooks/useHeroInteraction.ts`: 커서 반응, 스크롤 깊이감, 오브제 클릭 회전.
- `src/styles/tokens.css`: 색상과 글꼴.
- `src/styles/app.css`: 반응형 레이아웃과 모션.
- `public/imgs/blue-asterisk.jpg`: 힉스필드에서 생성한 첫 화면의 작은 오브제.

프로젝트 상세는 `#pocketstock`, `#aiops`, `#solmate`, `#mcp`, `#elo`, `#solvps`, `#paytrace` 주소로 바로 열립니다. 이전 `#summary`, `#stack`, `#history` 링크도 관련 섹션으로 연결합니다.

## 배포

기존 `.github/workflows/deploy.yml`을 유지했습니다. `main`에 반영되면 빌드 후 GitHub Pages로 배포됩니다. GitHub 저장소의 Settings → Pages에서 Source를 GitHub Actions로 설정합니다.

`base: "./"`를 유지해 `/Portfolio-v2/` 프로젝트 경로에서도 자산을 상대 주소로 불러옵니다. `dist/`는 로컬 빌드 산출물이며 Git에는 넣지 않습니다.

## 접근성과 모션

- 시맨틱 링크와 버튼, 네이티브 dialog, Esc 닫기, 키보드 포커스 표시.
- 커서에 반응하는 오브제 기울기, 클릭·터치·키보드 회전, 스크롤에 따라 움직이는 제목과 오브제.
- `prefers-reduced-motion` 지원 및 첫 화면의 Motion on/off 버튼. 모션을 끄면 인터랙션 위치를 초기화하고 오브제 회전을 비활성화합니다.
- 포인터와 스크롤 입력은 `requestAnimationFrame`으로 한 프레임에 한 번 처리합니다. 입력이 없으면 반복 루프를 실행하지 않습니다.
- 영상은 사용자 조작으로 재생하고 컨트롤을 제공합니다.
- 모바일 메뉴, 단일 열 프로젝트 목록, 터치 가능한 필터와 가로 스크롤 영상 갤러리.
- 이미지 로딩 공간을 미리 확보하고 첫 화면 이미지만 우선 로딩합니다.
- 외부 웹폰트를 못 불러와도 시스템 글꼴로 표시합니다.

[콘텐츠 근거](docs/content-sources.md) · [이미지 생성 프롬프트 및 교체 방법](docs/visual-assets.md) · [검증 기록](docs/validation.md)
