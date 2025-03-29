import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as i}from"./index-B-BHbqEy.js";import"./preview-uptUKSCD.js";import{b as a}from"./DocsRenderer-CFRXHY34-Bw3IRkqU.js";import{g as h}from"./generateColorScale-BiF4pKaR.js";const{definePreview:f}=__STORYBOOK_MODULE_PREVIEW_API__,x=[50,100,200,300,400,500,600,700,800,900,950],m=[{name:"Primary",color:"#E27396"},{name:"Secondary",color:"#B1DEE2"},{name:"Tertiary",color:"#EBF3D8"}].map(({color:r,...n})=>({color:r,shades:h(r,x).reverse(),...n}));function o(r){const n={code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",td:"td",tr:"tr",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Docs/Welcome"}),`
`,e.jsx(n.h1,{id:"pickme-storybook",children:"PickMe Storybook"}),`
`,e.jsx(n.p,{children:"Micro Frontend 구성의 PickMe 애플리케이션들의 공통 컴포넌트를 위한 Storybook 페이지입니다."}),`
`,e.jsx("div",{className:"subheading",children:"rules"}),`
`,e.jsx(n.p,{children:"storybook을 작성할 때 아래와 같은 규칙들을 따릅니다."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"컴포넌트 생성"})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[`각 프레임워크에 맞는 위치에서 컴포넌트를 생성합니다.
`,e.jsx(n.code,{children:"/src/react-components/"})," ",e.jsx(n.code,{children:"/src/vue-components/"})]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"외부로 내보낼 컴포넌트는 index 파일에서 export 합니다."}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"스토리 생성"})}),`
`,e.jsxs(n.p,{children:["각 컴포넌트의 확장자에 ",e.jsx(n.code,{children:".stories."}),"를 추가하여 생성합니다."]}),`
`]}),`
`]}),`
`,e.jsx("div",{className:"subheading",children:"use"}),`
`,e.jsx(n.p,{children:`Module Federation을 통해 외부에서 컴포넌트를 불러올 수 있도록 빌드됩니다.
외부 프로젝트는 아래와 같이 컴포넌트를 불러올 수 있습니다.`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { Button } from '@styleguide/react';
`})}),`
`,e.jsx(n.h2,{id:"색상-팔레트",children:"색상 팔레트"}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"https://github.com/user-attachments/assets/124ce6af-bc46-4134-aef2-c2822358b038",alt:"palette"})}),`
`,`
`,`
`,`
`,e.jsx("table",{children:m.map(({name:c,color:s,shades:l})=>e.jsxs(n.tr,{children:[l.map((t,d)=>e.jsxs(n.td,{className:"palette-cell",style:{backgroundColor:t},children:[d===0?c:"",t==s?"✓":""]})),e.jsx(n.td,{children:s})]}))}),`
`,e.jsx("style",{children:`
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

    .palette-cell {
        width:10px;
        color: white !important;
    }
`})]})}function k(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}export{m as color_scheme,k as default,x as token_keys};
