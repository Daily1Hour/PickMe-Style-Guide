const b={},f=new Set(["Module","__esModule","default","_export_sfc"]);let p={"./global":()=>(h(["style-B_VdViCB.css"],!1,"./global"),u("./__federation_expose_Global-l0sNRNKZ.js").then(e=>Object.keys(e).every(t=>f.has(t))?()=>e.default:()=>e)),"./vue":()=>(h(["style-B_VdViCB.css"],!1,"./vue"),u("./__federation_expose_Vue-CUiOTazP.js").then(e=>Object.keys(e).every(t=>f.has(t))?()=>e.default:()=>e)),"./react":()=>(h(["style-B_VdViCB.css"],!1,"./react"),u("./__federation_expose_React-DHDx7Bs3.js").then(e=>Object.keys(e).every(t=>f.has(t))?()=>e.default:()=>e))};const k={},h=(e,t,l)=>{const o=import.meta.url;if(typeof o>"u"){console.warn('The remote style takes effect only when the build.target option in the vite.config.ts file is higher than that of "es2020".');return}const i=o.substring(0,o.lastIndexOf("pickme-style-guide.js")),_='/';'',e.forEach(a=>{let n="";const c=_||i;if(c){const r={trailing:s=>s.endsWith("/")?s.slice(0,-1):s,leading:s=>s.startsWith("/")?s.slice(1):s},m=s=>s.startsWith("http")||s.startsWith("//"),y=r.trailing(c),g=r.leading(a),w=r.trailing(i);m(c)?n=[y,g].filter(Boolean).join("/"):n=[w+y,g].filter(Boolean).join("/")}else n=a;if(n in k)return;if(k[n]=!0,!t){const r=document.createElement("link");r.rel="stylesheet",r.href=n,document.head.appendChild(r);return}const d="css__"+options.name+"__"+l;window[d]=window[d]||[],window[d].push(n)})};async function u(e){return b[e]??=import(e),b[e]}const v=e=>{if(!p[e])throw new Error("Can not find remote module "+e);return p[e]()},E=e=>{globalThis.__federation_shared__=globalThis.__federation_shared__||{},Object.entries(e).forEach(([t,l])=>{const o=Object.keys(l)[0],i=Object.values(l)[0],_=i.scope||"default";globalThis.__federation_shared__[_]=globalThis.__federation_shared__[_]||{};const a=globalThis.__federation_shared__[_];(a[t]=a[t]||{})[o]=i})};export{h as dynamicLoadingCss,v as get,E as init};
