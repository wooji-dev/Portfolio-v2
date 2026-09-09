# 포트폴리오

프론트엔드 포트폴리오 사이트. React + TypeScript + Vite.

## 실행

```bash
npm install
npm run dev
```

## 명령

| 명령 | 설명 |
| --- | --- |
| `npm run dev` | 개발 서버 |
| `npm run build` | 타입 검사 후 프로덕션 빌드 |
| `npm run preview` | 빌드 결과 미리보기 |
| `npm run typecheck` | 타입 검사만 실행 |

## 구조

```
src/
├─ data/          내용. 프로젝트, 스택, 이력을 타입이 붙은 데이터로 관리한다
├─ components/    화면 조각
├─ hooks/         useReveal — 스크롤 등장 처리
├─ styles/        tokens.css(디자인 토큰), app.css(레이아웃과 컴포넌트)
├─ types.ts       데이터 스키마
└─ App.tsx
```

내용을 고칠 때는 `src/data` 안의 파일만 수정하면 된다. 컴포넌트는 건드릴 필요가 없다.

## 이미지 채우기

`src/data/projects.ts`의 각 프로젝트 `slots` 배열이 이미지 자리다.
`src` 값을 넣으면 그 자리에 이미지가 들어가고, 비워두면 안내 문구가 있는 placeholder가 보인다.

```ts
{ kind: "phone", title: "홈 · 잔돈 적립", hint: "1170×2532", src: "/shots/pocketstock-home.png" }
```

이미지는 `public/shots/`에 넣는다.

## 배포

GitHub Pages 프로젝트 페이지로 배포한다면 `vite.config.ts`의 `base`를 저장소 이름으로 바꾼다.

```ts
base: "/portfolio/"
```

## 접근성과 모션

- 등장 효과는 첫 화면 밖 요소에만 적용된다. 스크립트가 없거나 인쇄할 때도 내용은 모두 보인다.
- `prefers-reduced-motion: reduce` 환경에서는 모션을 적용하지 않는다.
# Portfolio-v2
