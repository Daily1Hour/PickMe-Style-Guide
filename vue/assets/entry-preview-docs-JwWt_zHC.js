import{c as _,n as C,z as j,o as v,g as $,b as N,y as A}from"./index-Bx-go_-4.js";import{w as E,i as O}from"./vue.esm-bundler-DQS1R2H_.js";const{addons:T}=__STORYBOOK_MODULE_PREVIEW_API__;var V=["props","events","slots","exposed","expose"],D=e=>{if(!j(e))return null;let t="exposed"in e.__docgenInfo?"vue-component-meta":"vue-docgen-api",a={};return V.forEach(r=>{v(e,r).forEach(n=>{let l;if(t==="vue-docgen-api"){let u=n.docgenInfo;l=M(u,r,n)}else{let u=n.docgenInfo;l=q(u,r)}!l||a[l.name]||(["events","expose","exposed"].includes(r)&&(l.control={disable:!0}),a[l.name]=l)})}),a},M=(e,t,a)=>{var u,s,i;let r,n;if(t==="events"&&(r=(u=e.type)==null?void 0:u.names.join(),n={name:"other",value:r??"",required:!1}),t==="slots"){let o=(s=e.bindings)==null?void 0:s.filter(m=>!!m.name).map(m=>{var p;return`${m.name}: ${((p=m.type)==null?void 0:p.name)??"unknown"}`}).join("; ");r=o?`{ ${o} }`:void 0,n={name:"other",value:r??"",required:!1}}if(t==="props"){let o=e;if(r=(i=o.type)==null?void 0:i.name,n=a?N(a.docgenInfo):{name:"other",value:r},o.type&&"elements"in o.type&&Array.isArray(o.type.elements)&&o.type.elements.length>0){let m=o.type.elements.map(p=>p.name);r==="Array"&&(r=`${m.length===1?m[0]:`(${m.join(" | ")})`}[]`),r==="union"?r=m.join(" | "):r==="intersection"&&(r=m.join(" & "))}}let l="required"in e?e.required??!1:!1;return{name:e.name,description:e.description,type:n?{...n,required:l}:{name:"other",value:r??""},table:{type:r?{summary:r}:void 0,defaultValue:(a==null?void 0:a.propDef.defaultValue)??void 0,jsDocTags:a==null?void 0:a.propDef.jsDocTags,category:t}}},q=(e,t)=>{if("global"in e&&e.global)return;let a={summary:e.type.replace(" | undefined","")};if(t==="props"){let r=e,n=r.default?{summary:r.default}:void 0;return{name:r.name,description:w(r.description,r.tags),defaultValue:n,type:f(r),table:{type:a,defaultValue:n,category:t}}}else return{name:e.name,description:"description"in e?e.description:"",type:{name:"other",value:e.type},table:{type:a,category:t}}},f=e=>{var l,u;let t=e.schema,a=e.required,r={name:"other",value:e.type,required:a},n=["string","number","function","boolean","symbol"];if(typeof t=="string")return n.includes(t)?{name:t,required:a}:r;switch(t.kind){case"enum":{let s=((l=t.schema)==null?void 0:l.filter(i=>i!=="undefined"))??[];return W(s)?{name:"boolean",required:a}:F(s)||B(s)?{name:"enum",value:s.map(i=>i.replace(/"/g,"")),required:a}:s.length===1?f({schema:s[0],type:e.type,required:a}):(s.length>2&&s.includes("true")&&s.includes("false")&&(s=s.filter(i=>i!=="true"&&i!=="false"),s.push("boolean")),{name:"union",value:s.map(i=>f(typeof i=="object"?{schema:i,type:i.type,required:!1}:{schema:i,type:i,required:!1})),required:a})}case"array":{let s=((u=t.schema)==null?void 0:u.filter(i=>i!=="undefined"))??[];return s.length===0?r:s.length===1?{name:"array",value:f({schema:s[0],type:e.type,required:!1}),required:a}:{name:"union",value:s.map(i=>f(typeof i=="object"?{schema:i,type:i.type,required:!1}:{schema:i,type:i,required:!1})),required:a}}case"object":return{name:"object",value:{},required:a};default:return r}},w=(e,t)=>!(t!=null&&t.length)||!e?e??"":`${t.map(a=>`@${a.name}: ${a.text}`).join("<br>")}<br><br>${e}`,F=e=>e.every(t=>typeof t=="string"&&t.startsWith('"')&&t.endsWith('"')),B=e=>e.every(t=>typeof t=="string"&&t.includes(".")),W=e=>e.length===2&&e.includes("true")&&e.includes("false"),y=Symbol("DEEP_ACCESS_SYMBOL"),k=e=>!!(e&&typeof e=="object"&&y in e),R=(e,t)=>{let a=e();if(Y(t))return a;let r=T.getChannel();return E(()=>t.args,()=>{let n=I(t);r.emit(A,{id:t.id,args:t.args,source:n,format:"vue"})},{immediate:!0,deep:!0}),a},I=e=>{let t={imports:{},scriptVariables:{}},{displayName:a,slotNames:r,eventNames:n}=G(e.component),l=h(e.args,r,n,t),u=b(e.args,r,t),s=a||e.title.split("/").at(-1),i=u?`<${s} ${l}> ${u} </${s}>`:`<${s} ${l} />`,o=Object.entries(t.scriptVariables).map(([d,c])=>`const ${d} = ${c};`).join(`

`),m=Object.entries(t.imports).map(([d,c])=>`import { ${Array.from(c.values()).sort().join(", ")} } from "${d}";`).join(`
`),p=`<template>
  ${i}
</template>`;return!m&&!o?p:`<script lang="ts" setup>
${m?`${m}

${o}`:o}
<\/script>

${p}`},Y=e=>{var a;let t=(a=e==null?void 0:e.parameters.docs)==null?void 0:a.source;return(t==null?void 0:t.type)===$.DYNAMIC?!1:!(e!=null&&e.parameters.__isArgsStory)||(t==null?void 0:t.code)||(t==null?void 0:t.type)===$.CODE},G=e=>{if(!e||!("__docgenInfo"in e)||!e.__docgenInfo||typeof e.__docgenInfo!="object")return{displayName:e==null?void 0:e.__name,eventNames:[],slotNames:[]};let t=e.__docgenInfo,a="displayName"in t&&typeof t.displayName=="string"?t.displayName:void 0,r=n=>!(n in t)||!Array.isArray(t[n])?[]:t[n].map(l=>l&&typeof l=="object"&&"name"in l?l.name:void 0).filter(l=>typeof l=="string");return{displayName:a||e.__name,slotNames:r("slots").sort((n,l)=>n==="default"?-1:l==="default"?1:n.localeCompare(l)),eventNames:r("events")}},h=(e,t,a,r)=>{let n=[];Object.entries(e).forEach(([u,s])=>{if(!t.includes(u)&&s!=null)switch(k(s)&&(s=s.toString()),typeof s){case"string":if(s==="")return;n.push({name:u,value:s.includes('"')?`'${s}'`:`"${s}"`,templateFn:(i,o)=>`${i}=${o}`});break;case"number":n.push({name:u,value:s.toString(),templateFn:(i,o)=>`:${i}="${o}"`});break;case"bigint":n.push({name:u,value:`BigInt(${s.toString()})`,templateFn:(i,o)=>`:${i}="${o}"`});break;case"boolean":n.push({name:u,value:s?"true":"false",templateFn:(i,o)=>o==="true"?i:`:${i}="false"`});break;case"symbol":n.push({name:u,value:`Symbol(${s.description?`'${s.description}'`:""})`,templateFn:(i,o)=>`:${i}="${o}"`});break;case"object":{n.push({name:u,value:U(s??{}),templateFn:void 0});break}}}),n.sort((u,s)=>u.name.localeCompare(s.name));let l=[];return n.forEach(u=>{let s=a.includes(`update:${u.name}`);if(!s&&u.templateFn){l.push(u.templateFn(u.name,u.value));return}let i=u.name;if(i in r.scriptVariables){let o=1;do i=`${u.name}${o}`,o++;while(i in r.scriptVariables)}if(!s){r.scriptVariables[i]=u.value,l.push(`:${u.name}="${i}"`);return}r.scriptVariables[i]=`ref(${u.value})`,r.imports.vue||(r.imports.vue=new Set),r.imports.vue.add("ref"),u.name==="modelValue"?l.push(`v-model="${i}"`):l.push(`v-model:${u.name}="${i}"`)}),l.join(" ")},b=(e,t,a)=>{let r=[];return t.forEach(n=>{let l=e[n];if(!l)return;let u=g([l],a);if(!u)return;let s=typeof l=="function"?S(l):[];n==="default"&&!s.length?r.push(u):r.push(`<template ${J(n,s)}>${u}</template>`)}),r.join(`

`)},g=(e,t)=>{let a=[],r=n=>{if(O(n))return K(n,t);switch(typeof n){case"string":case"number":case"boolean":return n.toString();case"object":return n===null?"":Array.isArray(n)?n.map(r).filter(l=>l!=="").join(`
`):JSON.stringify(n);case"function":{let l=S(n).filter(i=>!["{","}"].includes(i)),u={};l.forEach(i=>{u[i]=new Proxy({[y]:!0},{get:(o,m)=>m===y?o[y]:[Symbol.toPrimitive,Symbol.toStringTag,"toString"].includes(m)?()=>`{{ ${i} }}`:m==="v-bind"?`${i}`:`{{ ${i}.${m.toString()} }}`,ownKeys:()=>["v-bind"],getOwnPropertyDescriptor:()=>({configurable:!0,enumerable:!0,value:i,writable:!0})})});let s=n(u);return g([s],t).replaceAll(/ (\S+)="{{ (\S+) }}"/g,' :$1="$2"')}case"bigint":return`{{ BigInt(${n.toString()}) }}`;default:return""}};return e.forEach(n=>{let l=r(n);l!==""&&a.push(l)}),a.join(`
`)},K=(e,t)=>{let a=L(e),r="";typeof e.children=="string"?r=e.children:Array.isArray(e.children)?r=g(e.children,t):e.children&&(r=b(e.children,Object.keys(e.children).filter(l=>l!=="$stable"),t));let n=e.props?h(e.props,[],[],t):"";return r?`<${a}${n?` ${n}`:""}>${r}</${a}>`:`<${a}${n?` ${n}`:""} />`},L=e=>{if(typeof e.type=="string")return e.type;if(typeof e.type=="object"){if("name"in e.type&&e.type.name)return e.type.name;if("__name"in e.type&&e.type.__name)return e.type.__name}return"component"},S=e=>{let t=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,a=/([^\s,]+)/g,r=e.toString().replace(t,""),n=r.slice(r.indexOf("(")+1,r.indexOf(")")).match(a);return n?n.flatMap(l=>{if(["{","}"].includes(l))return l;let u=l.split(":")[0].trim();return u.startsWith("{")?["{",u.substring(1)]:l.endsWith("}")&&!u.endsWith("}")?[u,"}"]:u}):[]},J=(e,t)=>t.length?t.length===1?`#${e}="${t[0]}"`:`#${e}="{ ${t.filter(a=>!["{","}"].includes(a)).join(", ")} }"`:`#${e}`,U=e=>Object.values(e).every(t=>t==null||typeof t!="object")?JSON.stringify(e):JSON.stringify(e,null,2),Q={docs:{story:{inline:!0},extractArgTypes:D,extractComponentDescription:C}},X=[R],Z=[_];export{Z as argTypesEnhancers,X as decorators,Q as parameters};
