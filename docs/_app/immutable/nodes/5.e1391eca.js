import{S as K,i as M,s as Q,k as $,l as b,m as w,h as _,n as m,b as P,E as p,L as j,Q as G,K as q,w as H,N as W,y as E,a as T,z as I,c as L,A as D,O as X,g as S,d as N,B as V,o as Y}from"../chunks/index.0c0b7b79.js";import{F as Z,a as x}from"../chunks/flagname.c7bb9efc.js";import{T as ee}from"../chunks/taskbar.4e938d39.js";function te(s){let e,a,r,c,l,t,u,d;return{c(){e=$("button"),a=$("span"),r=$("span"),this.h()},l(i){e=b(i,"BUTTON",{class:!0});var f=w(e);a=b(f,"SPAN",{class:!0,"aria-hidden":!0});var g=w(a);r=b(g,"SPAN",{class:!0}),w(r).forEach(_),g.forEach(_),f.forEach(_),this.h()},h(){m(r,"class",c="icon arrow "+s[0]+" svelte-1g7dzty"),m(a,"class",l="circle "+s[0]+" svelte-1g7dzty"),m(a,"aria-hidden","true"),m(e,"class",t="learn-more "+s[0]+" "+s[1]+" svelte-1g7dzty")},m(i,f){P(i,e,f),p(e,a),p(a,r),u||(d=j(e,"click",function(){G(s[2])&&s[2].apply(this,arguments)}),u=!0)},p(i,[f]){s=i,f&1&&c!==(c="icon arrow "+s[0]+" svelte-1g7dzty")&&m(r,"class",c),f&1&&l!==(l="circle "+s[0]+" svelte-1g7dzty")&&m(a,"class",l),f&3&&t!==(t="learn-more "+s[0]+" "+s[1]+" svelte-1g7dzty")&&m(e,"class",t)},i:q,o:q,d(i){i&&_(e),u=!1,d()}}}function ne(s,e,a){let{direction:r}=e,{direzione:c}=e,{handler:l}=e;return s.$$set=t=>{"direction"in t&&a(0,r=t.direction),"direzione"in t&&a(1,c=t.direzione),"handler"in t&&a(2,l=t.handler)},[r,c,l]}class C extends K{constructor(e){super(),M(this,e,ne,te,Q,{direction:0,direzione:1,handler:2})}}function se(s){let e,a,r,c,l,t,u,d,i,f,g,h,A,v,O,F;r=new C({props:{direction:"dir-left",direzione:"left",handler:s[4]}}),t=new Z({props:{src:s[0]}}),i=new C({props:{direction:"dir-right",handler:s[3]}}),h=new x({props:{name:s[1]}});function R(n){s[5](n)}let U={};return s[2]!==void 0&&(U.selection=s[2]),v=new ee({props:U}),H.push(()=>W(v,"selection",R)),{c(){e=$("div"),a=$("div"),E(r.$$.fragment),c=T(),l=$("div"),E(t.$$.fragment),u=T(),d=$("div"),E(i.$$.fragment),f=T(),g=$("div"),E(h.$$.fragment),A=T(),E(v.$$.fragment),this.h()},l(n){e=b(n,"DIV",{class:!0});var o=w(e);a=b(o,"DIV",{class:!0});var z=w(a);I(r.$$.fragment,z),z.forEach(_),c=L(o),l=b(o,"DIV",{class:!0});var y=w(l);I(t.$$.fragment,y),y.forEach(_),u=L(o),d=b(o,"DIV",{class:!0});var k=w(d);I(i.$$.fragment,k),k.forEach(_),f=L(o),g=b(o,"DIV",{class:!0});var B=w(g);I(h.$$.fragment,B),B.forEach(_),o.forEach(_),A=L(n),I(v.$$.fragment,n),this.h()},h(){m(a,"class","left svelte-9dxd7s"),m(l,"class","flag svelte-9dxd7s"),m(d,"class","right svelte-9dxd7s"),m(g,"class","flag-name svelte-9dxd7s"),m(e,"class","container svelte-9dxd7s")},m(n,o){P(n,e,o),p(e,a),D(r,a,null),p(e,c),p(e,l),D(t,l,null),p(e,u),p(e,d),D(i,d,null),p(e,f),p(e,g),D(h,g,null),P(n,A,o),D(v,n,o),F=!0},p(n,[o]){const z={};o&1&&(z.src=n[0]),t.$set(z);const y={};o&2&&(y.name=n[1]),h.$set(y);const k={};!O&&o&4&&(O=!0,k.selection=n[2],X(()=>O=!1)),v.$set(k)},i(n){F||(S(r.$$.fragment,n),S(t.$$.fragment,n),S(i.$$.fragment,n),S(h.$$.fragment,n),S(v.$$.fragment,n),F=!0)},o(n){N(r.$$.fragment,n),N(t.$$.fragment,n),N(i.$$.fragment,n),N(h.$$.fragment,n),N(v.$$.fragment,n),F=!1},d(n){n&&_(e),V(r),V(t),V(i),V(h),n&&_(A),V(v,n)}}}let J=195;function ae(s,e,a){let r;Y(()=>{r=JSON.parse(sessionStorage.getItem("flags")),console.log(r),d()});let c="",l="",t=0,u=2;function d(){a(0,c=r[t].URL_ID),a(1,l=r[t].nation),console.log(t)}function i(){t++,t>=J&&(t=0),d()}function f(){t--,t<0&&(t=J-1),d()}function g(h){u=h,a(2,u)}return[c,l,u,i,f,g]}class oe extends K{constructor(e){super(),M(this,e,ae,se,Q,{})}}export{oe as component};
