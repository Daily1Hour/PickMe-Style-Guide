import{i as O}from"./split-props-Bv6r1p3G.js";const a=r=>r!=null;function d(r,n,i={}){const{stop:s,getKey:c}=i;function f(t,e=[]){if(O(t)||Array.isArray(t)){const o={};for(const[u,l]of Object.entries(t)){const m=(c==null?void 0:c(u,l))??u,y=[...e,m];if(s!=null&&s(t,y))return n(t,e);const A=f(l,y);a(A)&&(o[m]=A)}return o}return n(t,e)}return f(r)}function k(r,n){return Array.isArray(r)?r.map(i=>n(i)):O(r)?d(r,i=>n(i)):r!=null?n(r):r}export{k as m,d as w};
