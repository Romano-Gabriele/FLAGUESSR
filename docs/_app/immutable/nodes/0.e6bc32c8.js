import{S as q,i as w,s as D,k as g,a as k,e as A,l as h,m as j,c as C,h as d,C as I,n as f,D as M,b,E as y,g as v,d as S,f as H,F as E,G as L,H as N,I as O,J as z,v as F}from"../chunks/index.33d1dcae.js";import{v as J}from"../chunks/style.6257a348.js";import{u as P}from"../chunks/auth.1c26fe00.js";import{p as R}from"../chunks/stores.6c772b5a.js";const T=!0,X=Object.freeze(Object.defineProperty({__proto__:null,prerender:T},Symbol.toStringTag,{value:"Module"}));function G(u){let l,t;const i=u[5].default,e=L(i,u,u[4],null);return{c(){l=g("main"),e&&e.c(),this.h()},l(s){l=h(s,"MAIN",{class:!0});var c=j(l);e&&e.l(c),c.forEach(d),this.h()},h(){f(l,"class","svelte-1bu6pd1")},m(s,c){b(s,l,c),e&&e.m(l,null),t=!0},p(s,c){e&&e.p&&(!t||c&16)&&N(e,i,s,s[4],t?z(i,s[4],c,null):O(s[4]),null)},i(s){t||(v(e,s),t=!0)},o(s){S(e,s),t=!1},d(s){s&&d(l),e&&e.d(s)}}}function B(u){let l,t,i,e,s,c,p,_,a,m,r=u[0]==!0&&G(u);return{c(){l=g("header"),t=g("img"),e=k(),s=g("img"),_=k(),r&&r.c(),a=A(),this.h()},l(o){l=h(o,"HEADER",{class:!0});var n=j(l);t=h(n,"IMG",{src:!0,alt:!0,class:!0}),e=C(n),s=h(n,"IMG",{src:!0,alt:!0,class:!0}),n.forEach(d),_=C(o),r&&r.l(o),a=A(),this.h()},h(){I(t.src,i="logos/flaguessr-icon.png")||f(t,"src",i),f(t,"alt","flaguessr_icon"),f(t,"class","svelte-1bu6pd1"),I(s.src,c="logos/flaguessr_logo.png")||f(s,"src",c),f(s,"alt","flaguessr_Logo"),f(s,"class","svelte-1bu6pd1"),f(l,"class",p=M(u[1]?"slide-down":"")+" svelte-1bu6pd1")},m(o,n){b(o,l,n),y(l,t),y(l,e),y(l,s),b(o,_,n),r&&r.m(o,n),b(o,a,n),m=!0},p(o,[n]){(!m||n&2&&p!==(p=M(o[1]?"slide-down":"")+" svelte-1bu6pd1"))&&f(l,"class",p),o[0]==!0?r?(r.p(o,n),n&1&&v(r,1)):(r=G(o),r.c(),v(r,1),r.m(a.parentNode,a)):r&&(F(),S(r,1,1,()=>{r=null}),H())},i(o){m||(v(r),m=!0)},o(o){S(r),m=!1},d(o){o&&d(l),o&&d(_),r&&r.d(o),o&&d(a)}}}function K(u,l,t){let i,e,s;E(u,P,a=>t(2,i=a)),E(u,R,a=>t(3,e=a)),E(u,J,a=>t(1,s=a));let{$$slots:c={},$$scope:p}=l,_=!1;return u.$$set=a=>{"$$scope"in a&&t(4,p=a.$$scope)},u.$$.update=()=>{var a,m;u.$$.dirty&12&&(!i&&((a=e==null?void 0:e.routes)==null?void 0:a.id)==="/"||((m=e==null?void 0:e.routes)==null?void 0:m.id)==="/login"?(t(0,_=!0),console.log("CASE 1:",i)):i?t(0,_=!0):(t(0,_=!1),console.log("CASE 2:",i)))},[_,s,i,e,p,c]}class Y extends q{constructor(l){super(),w(this,l,K,B,D,{})}}export{Y as component,X as universal};
