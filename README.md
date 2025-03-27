# 스타일가이드

## 🛠️ 기술 스택

[![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=flat-square&logo=storybook&logoColor=white)](https://storybook.js.org)
[![Module Federation](https://img.shields.io/badge/Module_Federation-bfeaf9.svg?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAxNTkgMTUyIj4KICA8cGF0aCBzdHJva2U9IiMxMDhDQjkiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIzLjIiIGQ9Ik05Ni4zIDEyLjcgNzkgMy4ybS0xNyA5LjYgMTctOS42bTE3LjMgMTM2LjFMNzkgMTQ4LjhtLTE3LTkuNiAxNy4xIDkuNk0zMi43IDI5LjYgMTYgMzkuOG0tLjMgMTkuNi4yLTE5LjZtLjEgMC0xMy44LThtMTQwLjQgNjAuOS0uMyAxOS42bS0xNi45IDEwLjEgMTYuOS0xMC4xbTAgMCAxMy43IDcuOU0xNS43IDkzbC40IDE5LjVNMzMgMTIyLjZsLTE3LTEwbTAtLjEtMTMuNiA4bTEyMi45LTkxLjEgMTYuOCAxMC4ybS4zIDE5LjYtLjMtMTkuNm0wIDAgMTMuNy04Ii8+CiAgPHBhdGggZmlsbD0iIzk1ODlFQyIgZD0iTTk2LjUgNDMuMyA3OSAzMy4zbC0xNy41IDEwTDc5IDUzLjRsMTcuNS0xMFoiLz4KICA8cGF0aCBmaWxsPSIjMUMyMTM1IiBkPSJNNzkgMzIuOCA2MS4yIDQzLjF2MjAuNkw3OSA3NC4xbDE4LTEwLjRWNDMuMUw3OSAzMi44Wm0xNi44IDEwLjVMNzkgNTNsLTE2LjctOS43TDc5IDMzLjdsMTYuOCA5LjZabS0zMy45LjcgMTYuNyA5LjZWNzNMNjIgNjMuM1Y0NFptMTcuNSAyOVY1My41TDk2LjEgNDR2MTkuM2wtMTYuNyA5LjZaIi8+CiAgPHBhdGggZmlsbD0iIzk1ODlFQyIgZD0iTTU5LjggMTA3LjRWODcuMkw0Mi40IDc3djIwLjJsMTcuNCAxMFoiLz4KICA8cGF0aCBmaWxsPSIjMUMyMTM1IiBkPSJNNTkuOCA2Ni42IDQyIDc2Ljl2MjAuNmwxNy44IDEwLjMgMTgtMTAuM1Y3Ni45bC0xOC0xMC4zWk03Ni42IDc3bC0xNi44IDkuNkw0My4xIDc3bDE2LjctOS43TDc2LjYgNzdabS0zMy45LjcgMTYuOCA5LjZ2MTkuM0w0Mi43IDk3Vjc3LjhabTE3LjUgMjguOVY4Ny40TDc3IDc3LjhWOTdsLTE2LjcgOS43WiIvPgogIDxwYXRoIGZpbGw9IiM5NTg5RUMiIGQ9Ik05OC4yIDEwNy40Vjg3LjJMMTE1LjcgNzd2MjAuMmwtMTcuNSAxMFoiLz4KICA8cGF0aCBmaWxsPSIjMUMyMTM1IiBkPSJNOTguMiA2Ni42IDgwLjMgNzYuOXYyMC42bDE4IDEwLjNMMTE2IDk3LjVWNzYuOUw5OC4yIDY2LjZaTTExNSA3N2wtMTYuNyA5LjZMODEuNiA3N2wxNi43LTkuN0wxMTUgNzdabS0zMy44LjcgMTYuNyA5LjZ2MTkuM0w4MS4yIDk3Vjc3LjhabTE3LjUgMjguOVY4Ny40bDE2LjctOS42Vjk3bC0xNi43IDkuNloiLz4KICA8cGF0aCBmaWxsPSIjOTU4OUVDIiBkPSJtMTE1LjcgNTQuOC0xNy41LTEwLTE3LjUgMTBMOTguMiA2NWwxNy41LTEwWiIvPgogIDxwYXRoIGZpbGw9IiM5NTg5RUMiIGQ9Ik05OC4yIDg1LjFWNjVsMTcuNS0xMHYyMEw5OC4yIDg1LjFaIi8+CiAgPHBhdGggZmlsbD0iIzFDMjEzNSIgZD0iTTk4LjIgNDQuMyA4MC4zIDU0LjZ2MjAuNmwxOCAxMC40TDExNiA3NS4yVjU0LjZMOTguMiA0NC4zWk0xMTUgNTQuOGwtMTYuNyA5LjctMTYuNy05LjcgMTYuNy05LjYgMTYuNyA5LjZabS0zMy44LjcgMTYuNyA5Ljd2MTkuM2wtMTYuNy05LjdWNTUuNVptMTcuNSAyOVY2NS4ybDE2LjctOS43djE5LjNsLTE2LjcgOS43WiIvPgogIDxwYXRoIGZpbGw9IiM5NTg5RUMiIGQ9Im03Ny4zIDU0LjgtMTcuNS0xMC0xNy40IDEwTDU5LjggNjVsMTcuNS0xMFpNNTkuOCA4NS4xVjY1TDQyLjQgNTV2MjBsMTcuNCAxMC4xWiIvPgogIDxwYXRoIGZpbGw9IiMxQzIxMzUiIGQ9Ik01OS44IDQ0LjMgNDIgNTQuNnYyMC42bDE3LjggMTAuNCAxOC0xMC40VjU0LjZsLTE4LTEwLjNabTE2LjggMTAuNS0xNi44IDkuNy0xNi43LTkuNyAxNi43LTkuNiAxNi44IDkuNlptLTMzLjkuNyAxNi44IDkuN3YxOS4zbC0xNi44LTkuN1Y1NS41Wm0xNy41IDI5VjY1LjJMNzcgNTUuNXYxOS4zbC0xNi43IDkuN1oiLz4KICA8cGF0aCBmaWxsPSIjOTU4OUVDIiBkPSJNNzkgMTE4LjVWOTguM2wtMTcuNS0xMHYyMC4xbDE3LjUgMTBabTAgMFY5OC4zbDE3LjUtMTB2MjAuMWwtMTcuNSAxMFoiLz4KICA8cGF0aCBmaWxsPSIjMUMyMTM1IiBkPSJNNzkgNzcuNyA2MS4yIDg4djIwLjZMNzkgMTE5bDE4LTEwLjRWODhMNzkgNzcuN1ptMTYuOCAxMC41TDc5IDk4bC0xNi43LTkuN0w3OSA3OC42bDE2LjggOS42Wm0tMzMuOS43IDE2LjcgOS42djE5LjNMNjIgMTA4LjJWODguOVptMTcuNSAyOVY5OC40TDk2LjEgODl2MTkuM2wtMTYuNyA5LjZaIi8+CiAgPHBhdGggZmlsbD0iIzcxQkVEQiIgZD0iTTEzNC41IDQzLjIgODAgMTEuNnYyMEwxMTcuMyA1M2wxNy4yLTEwWm0tOTMuNyAxMCAzNy41LTIxLjdWMTEuNkwyMy41IDQzLjJsMTcuMyAxMFptNzcuMiAxLjN2NDMuM2wxNy4zIDEwVjQ0LjRsLTE3LjMgMTBabS03Ny44LjEtMTcuMy0xMHY2M2wxNy4zLTEwdi00M1pNMjMuNyAxMDlsNTQuNiAzMS40di0yMEw0MSA5OWwtMTcuMyAxMFptNTYuMiAxMS41djIwbDU0LjUtMzEuNUwxMTcgOTlsLTM3IDIxLjVaIi8+CiAgPHBhdGggZmlsbD0iIzk1ODlFQyIgZD0iTTk2LjUgNjYuNCA3OSA1Ni4zbC0xNy41IDEwTDc5IDc2LjVsMTcuNS0xMFoiLz4KICA8cGF0aCBmaWxsPSIjOTU4OUVDIiBkPSJNNzkgOTYuNlY3Ni40bC0xNy41LTEwdjIwLjFMNzkgOTYuNlptMCAwVjc2LjRsMTcuNS0xMHYyMC4xTDc5IDk2LjZaIi8+CiAgPHBhdGggZmlsbD0iIzFDMjEzNSIgZD0iTTc5IDU1LjggNjEuMiA2Ni4xdjIwLjdMNzkgOTdsMTgtMTAuMlY2Nkw3OSA1NS44Wm0xNi44IDEwLjZMNzkgNzZsLTE2LjctOS42TDc5IDU2LjdsMTYuOCA5LjdabS0zMy45LjYgMTYuNyA5LjdWOTZMNjIgODYuM1Y2N1ptMTcuNSAyOVY3Ni43TDk2LjEgNjd2MTkuM0w3OS40IDk2WiIvPgo8L3N2Zz4K&style=flat-square&logoColor)](https://module-federation.io/)  
[![Vuejs](https://img.shields.io/badge/Vue.js-4FC08D?style=flat-square&logo=vuedotjs&logoColor=white)](https://vuejs.org/)
[![React](https://img.shields.io/badge/React-191B1F?style=flat-square&logo=React&logoColor=61DAFB)](https://reactjs.org)
[![Chakra UI](https://img.shields.io/badge/Chakra_UI-319795?style=flat-square&logo=chakraui&logoColor=white)](https://www.chakra-ui.com/)  
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://ko.vite.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

## 🎨 색상 팔레트

![palette](https://github.com/user-attachments/assets/124ce6af-bc46-4134-aef2-c2822358b038)

<table>
  <tr>
    <td style="background-color: #f6d5df; color:white; height:10px;">Primary</td>
    <td style="background-color: #f6d5df; width:10px;"><img src="https://placehold.co/30x25/f6d5df/f6d5df.png" /></td>
    <td style="background-color: #e580a0; width:10px;"><img src="https://placehold.co/30x25/e580a0/e580a0.png" /></td>
    <td style="background-color: #dc5680; width:10px;"><img src="https://placehold.co/30x25/dc5680/dc5680.png" /></td>
    <td style="background-color: #a9234d; width:10px;"><img src="https://placehold.co/30x25/a9234d/a9234d.png" /></td>
    <td style="background-color: #7f1a3a; width:10px;"><img src="https://placehold.co/30x25/7f1a3a/7f1a3a.png" /></td>
    <td>#E27396</td>
  </tr>
  <tr>
    <td style="background-color: #daeff1; color:white; height:10px;">Secondary</td>
    <td style="background-color: #daeff1; width:10px;"><img src="https://placehold.co/30x25/daeff1/daeff1.png" /></td>
    <td style="background-color: #b5dfe3; width:10px;"><img src="https://placehold.co/30x25/b5dfe3/b5dfe3.png" /></td>
    <td style="background-color: #6bbfc7; width:10px;"><img src="https://placehold.co/30x25/6bbfc7/6bbfc7.png" /></td>
    <td style="background-color: #388c94; width:10px;"><img src="https://placehold.co/30x25/388c94/388c94.png" /></td>
    <td style="background-color: #2a696f; width:10px;"><img src="https://placehold.co/30x25/2a696f/2a696f.png" /></td>
    <td>#B3DEE2</td>
  </tr>
  <tr>
    <td style="background-color: #ebf3d8; color:white; height:10px;">Tertiary</td>
    <td style="background-color: #ebf3d8; width:10px;"><img src="https://placehold.co/30x25/ebf3d8/ebf3d8.png" /></td>
    <td style="background-color: #d6e6b2; width:10px;"><img src="https://placehold.co/30x25/d6e6b2/d6e6b2.png" /></td>
    <td style="background-color: #aecd65; width:10px;"><img src="https://placehold.co/30x25/aecd65/aecd65.png" /></td>
    <td style="background-color: #7b9a32; width:10px;"><img src="https://placehold.co/30x25/7b9a32/7b9a32.png" /></td>
    <td style="background-color: #5c7425; width:10px;"><img src="https://placehold.co/30x25/5c7425/5c7425.png" /></td>
    <td>#EAF2D7</td>
  </tr>
</table>

## 📖 스토리북

<a href="https://daily1hour.github.io/PickMe-Style-Guide/">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/storybook/storybook-original.svg" width='50px' >@PickMe/Style-Guide/Storybook</img>
</a>

## 💁 소개

이 프로젝트는 멀티 프레임워크 지원과 일관된 UI/UX 유지를 위한 공용 UI 컴포넌트 시스템입니다.

Vite 기반으로 빌드 및 서빙이 가능하며, 런타임에서 원격 컴포넌트를 로드해 패키징 없이 공유할 수 있습니다.  
스토리북을 통해 자동화된 문서 생성, 실시간 UI 테스트, 디자인 시스템 연계를 통해 효율적인 개발과 유지보수를 제공합니다.

## 💡 주요 기능

1.  **Module Federation**을 활용한 컴포넌트 동적 제공

    | 기능                  | 설명                                                                                          |
    | --------------------- | --------------------------------------------------------------------------------------------- |
    | UI 색상 시스템 정의   | 일관된 디자인을 유지하기 위해 UI 색상 시스템을 정의하여 관리합니다.                           |
    | 공용 UI 컴포넌트 제공 | 코드 중복을 최소화하고 캐싱을 활용하여 성능을 최적화한 공용 UI 컴포넌트를 제공합니다.         |
    | 컴포넌트 로딩 최적화  | 필요한 컴포넌트만 로드하여 번들 크기를 줄이고, 애플리케이션 성능을 향상시킵니다.              |
    | Vite 기반 정적 서빙   | Vite를 사용하여 빌드 후 정적 파일로 서빙하여 프론트엔드 애플리케이션을 독립적으로 배포합니다. |
    | 원격 컴포넌트 로드    | 런타임에 원격 컴포넌트를 로드하여 패키징 없이 컴포넌트를 공유할 수 있습니다.                  |

2.  **Storybook**을 활용한 컴포넌트 문서화

    | 기능                       | 설명                                                                     |
    | -------------------------- | ------------------------------------------------------------------------ |
    | 멀티 프레임워크 지원       | 각 프레임워크별로 빌드한 후, `refs`를 활용해 외부 스토리북과 연결합니다. |
    | 컴포넌트 예시 및 변형 제공 | 각 컴포넌트의 사용 예시와 다양한 props 변형 사례를 제공합니다.           |
    | 자동화된 문서 생성         | 컴포넌트 정보를 바탕으로 자동으로 문서를 생성하여 관리합니다.            |
    | 실시간 UI 테스트           | 개발 중 실시간으로 UI를 테스트하여 즉각적인 피드백을 받을 수 있습니다.   |
    | 디자인 시스템 연계         | 디자인 시스템과 통합하여 일관된 UI/UX를 유지할 수 있도록 지원합니다.     |

## 📝 호스트 사용법

```mermaid
flowchart BT
    %% 스타일 및 컴포넌트 공유
    subgraph styleguide[@pickme/style-guide]
        subgraph react["/react-components"]
            styleguide/react/chakra-ui-system.jsx[chakra-ui-system.jsx]
            styleguide/react/components[Shared Components]
        end
        subgraph vue["/vue-components"]
            styleguide/vue/components[Shared Components]
        end
        subgraph styles["/styles"]
            styleguide/styles/global.ts[global.css]
        end
    end

    %% Microfrontend 루트 앱
    subgraph mfa-root[@pickme/mfa-root]
        mfa-root/microfrontend-layout.html[microfrontend-layout.html]
        mfa-root/index.ejs[index.ejs]
    end
    mfa-root/index.ejs -.-> styleguide/styles/global.ts

    %% Vue 앱
    subgraph report[@pickme/report]
        report/Components[Components]
    end
    report/Components -.-> styleguide/vue/components
    report:::delegate

    %% React 앱
    subgraph record[@pickme/record]
        record/ChakraProvider[ChakraProvider]
        record/Components[Components]
    end
    record/ChakraProvider -.-> styleguide/react/chakra-ui-system.jsx
    record/Components -.-> styleguide/react/components
    record:::delegate

    %% 대표 앱 표시
    classDef delegate stroke-width:3px;
```

### EJS

```html
<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta charset="UTF-8" />
        <title>Host</title>
        <meta
            http-equiv="Content-Security-Policy"
            content="style-src 'unsafe-inline' https: localhost:*;"
        />
        <meta name="importmap-type" use-injector />

        <% if (isLocal) { %>
        <script type="injector-importmap">
            {
                "imports": {
                    "@styleguide": "//localhost:9001/pickme-style-guide.js"
                }
            }
        </script>
        <% } %>

        <script src="https://cdn.jsdelivr.net/npm/import-map-overrides@4.1.0/dist/import-map-overrides.js"></script>
    </head>
    <body>
        <script>
            window.importMapInjector.initPromise.then(() => {
                import("@styleguide").then((module) => module.get("./global"));
            });
        </script>
    </body>
</html>
```

### Vite

```js
// vite.config.js
import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
    plugins: [
        federation({
            name: "host-app",
            remotes: {
                "@styleguide": "http://localhost:9001/pickme-style-guide.js",
            },
            shared: ["react", "react-dom", "@chakra-ui/react"],
        }),
    ],
});
```

-   스타일시트

```js
// index.js
import("@styleguide/global");
```

-   컴포넌트

```js
// page.js
import { Button, Item } from "@styleguide/react";
```

## 📂 폴더 구조

<details>
<summary>열기</summary>

```python
PickMe-Style-Guide
├─ .github
│  └─ workflows # 깃헙 액션 워크플로어 프로세스
│     ├─ deploy-aws-s3.yml # AWS S3로 페이지로 배포
│     ├─ deploy-gh-pages.yml # 깃헙 페이지로 배포
│     └─ vite-build.yml # Vite로 빌드
├─ .env # 환경변수
├─ .prettierrc # 포맷터 설정
├─ .storybook # 스토리북 설정
│  └─ main.ts # 애드온 설정 및 외부 스토리북 연결
├─ stories # 루트 스토리북
│  └─ Welcome.mdx # 소개 스토리
├─ src
│  ├─ main.js # index.html 대신 빈 진입점
│  ├─ styles # 공용 스타일
│  │  ├─ global.css
│  │  └─ global.js
│  ├─ react-components # React용 컴포넌트
│  │  ├─ .storybook # 스토리북 설정
│  │  │  ├─ main.ts
│  │  │  └─ preview.tsx # chakra-ui 프로바이더 설정
│  │  ├─ index.js # 컴포넌트 제공 아웃풋
│  │  ├─ Button.jsx # (*.jsx/tsx) 컴포넌트
│  │  ├─ Button.stories.tsx # (*.stories.tsx) 스토리
│  │  ├─ chakra-ui-system.jsx
│  │  ├─ Container.stories.tsx
│  │  ├─ Container.tsx
│  │  ├─ Drawer.stories.tsx
│  │  ├─ Drawer.tsx
│  │  ├─ IconButton.jsx
│  │  ├─ IconButton.stories.tsx
│  │  ├─ Item.stories.tsx
│  │  ├─ Item.tsx
│  │  ├─ List.stories.tsx
│  │  ├─ List.tsx
│  │  ├─ PaginateController.stories.tsx
│  │  └─ PaginateController.tsx
│  ├─ shared # 서드파티 컴포넌트
│  │  └─ chakra-ui
│  │     ├─ close-button.tsx
│  │     └─ drawer.tsx
│  └─ vue-components # Vue용 컴포넌트
│     ├─ .storybook # 스토리북 설정
│     │  ├─ main.ts
│     │  └─ preview.ts
│     ├─ index.js # 컴포넌트 제공 아웃풋
│     ├─ bleed.stories.ts
│     └─ bleed.vue
├─ README.md
├─ tsconfig.json # 타입스크립트 설정
├─ types.d.ts # Module Federation 리모트 타입 정의
└─ vite.config.js # Module Federation 플러그인 사용
```

</details>

## 🚀 실행 방법

### Storybook 실행

```sh
$ npm install
# 환경변수 PUBLIC_URL= (배포 url)
$ npm run storybook
```

로컬 개발 서버 실행

```sh
$ npm run storybook:vue
$ npm run storybook:react
# 환경변수 PUBLIC_URL= (빈값처리)
$ npm run storybook
```

### Module Federation 리모트 실행

```sh
$ npm install
$ npm run dev
```
