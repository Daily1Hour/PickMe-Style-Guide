import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as o}from"./index-B-BHbqEy.js";import"./preview-BFGeiHcv.js";import{b as i}from"./DocsRenderer-CFRXHY34-btBqe4Al.js";const{definePreview:x}=__STORYBOOK_MODULE_PREVIEW_API__;function s(r){const e={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Docs/Welcome"}),`
`,n.jsx(e.h1,{id:"pickme-storybook",children:"PickMe Storybook"}),`
`,n.jsx(e.p,{children:"Micro Frontend 구성의 PickMe 애플리케이션들의 공통 컴포넌트를 위한 Storybook 페이지입니다."}),`
`,n.jsx("div",{className:"subheading",children:"rules"}),`
`,n.jsx(e.p,{children:"storybook을 작성할 때 아래와 같은 규칙들을 따릅니다."}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"컴포넌트 생성"})}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[`각 프레임워크에 맞는 위치에서 컴포넌트를 생성합니다.
`,n.jsx(e.code,{children:"/src/react-components/"})," ",n.jsx(e.code,{children:"/src/vue-components/"})]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"외부로 내보낼 컴포넌트는 index 파일에서 export 합니다."}),`
`]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"스토리 생성"})}),`
`,n.jsxs(e.p,{children:["각 컴포넌트의 확장자에 ",n.jsx(e.code,{children:".stories."}),"를 추가하여 생성합니다."]}),`
`]}),`
`]}),`
`,n.jsx("div",{className:"subheading",children:"use"}),`
`,n.jsx(e.p,{children:`Module Federation을 통해 외부에서 컴포넌트를 불러올 수 있도록 빌드됩니다.
외부 프로젝트는 아래와 같이 컴포넌트를 불러올 수 있습니다.`}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { Button } from '@styleguide/react';
`})}),`
`,n.jsx("style",{children:`
    .subheading {
        --mediumdark: '#999999';
        font-weight: 900;
        font-size: 13px;
        color: #999;
        letter-spacing: 6px;
        line-height: 24px;
        text-transform: uppercase;
        margin-bottom: 12px;
        margin-top: 40px;
    }

    a.recruit {
        color: #152447;
    }

    .aside {
        font-size: 87.5%;
        line-height: 1.43;
        color: rgb(102, 102, 102);
        background: rgb(248, 250, 252);
        border-radius: 5px;
        padding: 1em;
        margin: 1.5em 0px;
    }
`})]})}function h(r={}){const{wrapper:e}={...o(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{h as default};
