import{K as b,s as h}from"./index.33d1dcae.js";const t=[];function q(i,l=b){let n;const o=new Set;function r(e){if(h(i,e)&&(i=e,n)){const c=!t.length;for(const s of o)s[1](),t.push(s,i);if(c){for(let s=0;s<t.length;s+=2)t[s][0](t[s+1]);t.length=0}}}function a(e){r(e(i))}function _(e,c=b){const s=[e,c];return o.add(s),o.size===1&&(n=l(r)||b),e(i),()=>{o.delete(s),o.size===0&&n&&(n(),n=null)}}return{set:r,update:a,subscribe:_}}var f;const p=((f=globalThis.__sveltekit_1qfle4c)==null?void 0:f.base)??"/FLAGUESSR";var u;const d=((u=globalThis.__sveltekit_1qfle4c)==null?void 0:u.assets)??p;export{d as a,p as b,q as w};
