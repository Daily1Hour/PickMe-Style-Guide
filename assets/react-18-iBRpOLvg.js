import{importShared as c}from"./__federation_fn_import-CRVwYFb8.js";import{r as m}from"./index-CJ88nXQk.js";var n={},s;function R(){if(s)return n;s=1;var e=m();return n.createRoot=e.createRoot,n.hydrateRoot=e.hydrateRoot,n}var v=R();const a=await c("react");var i=new Map;function f(){return globalThis.IS_REACT_ACT_ENVIRONMENT}var h=({callback:e,children:r})=>{let t=a.useRef();return a.useLayoutEffect(()=>{t.current!==e&&(t.current=e,e())},[e]),r};typeof Promise.withResolvers>"u"&&(Promise.withResolvers=()=>{let e=null,r=null;return{promise:new Promise((t,o)=>{e=t,r=o}),resolve:e,reject:r}});var w=async(e,r,t)=>{let o=await p(r,t);if(f()){o.render(e);return}let{promise:u,resolve:l}=Promise.withResolvers();return o.render(a.createElement(h,{callback:l},e)),u},y=(e,r)=>{let t=i.get(e);t&&(t.unmount(),i.delete(e))},p=async(e,r)=>{let t=i.get(e);return t||(t=v.createRoot(e,r),i.set(e,t)),t};export{w as renderElement,y as unmountElement};
