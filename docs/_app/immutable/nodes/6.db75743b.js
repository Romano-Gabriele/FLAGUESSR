import{S as Ve,i as We,s as je,G as rt,R as de,T as Se,e as Ze,U as Ue,m as _,h as c,V as Qe,b as me,E as r,H as nt,I as ot,J as it,W as xe,g as $,d as x,X as Tt,Y as _t,Z as Le,y as Ce,z as Me,A as Oe,_ as kt,B as ze,k as d,q as L,a as k,l as p,r as V,c as P,n as o,p as se,$ as Z,L as Q,v as Pt,f as Nt,M as It,F as Ae,o as St,P as Je,u as Ut,K as vt}from"../chunks/index.33d1dcae.js";import{s as De,v as $e,c as Bt,a as st,u as At,b as Dt,d as Lt,g as Vt}from"../chunks/auth.fa417745.js";import{a as lt,u as mt}from"../chunks/helper.55f201cf.js";import{b as at}from"../chunks/paths.17a9f838.js";import{g as Wt,u as Ye}from"../chunks/dbFuncs.3a01df92.js";/**
 * @license lucide-svelte v0.473.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 */const Ct={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"},gt=Ct;function bt(a,e,s){const t=a.slice();return t[11]=e[s][0],t[12]=e[s][1],t}function tt(a){let e,s=[a[12]],t={};for(let l=0;l<s.length;l+=1)t=de(t,s[l]);return{c(){e=Se(a[11]),this.h()},l(l){e=Ue(l,a[11],{}),_(e).forEach(c),this.h()},h(){Qe(e,t)},m(l,n){me(l,e,n)},p(l,n){Qe(e,t=xe(s,[n&32&&l[12]]))},d(l){l&&c(e)}}}function yt(a){let e=a[11],s,t=a[11]&&tt(a);return{c(){t&&t.c(),s=Ze()},l(l){t&&t.l(l),s=Ze()},m(l,n){t&&t.m(l,n),me(l,s,n)},p(l,n){l[11]?e?je(e,l[11])?(t.d(1),t=tt(l),e=l[11],t.c(),t.m(s.parentNode,s)):t.p(l,n):(t=tt(l),e=l[11],t.c(),t.m(s.parentNode,s)):e&&(t.d(1),t=null,e=l[11])},d(l){l&&c(s),t&&t.d(l)}}}function Mt(a){let e,s,t,l,n,i=a[5],h=[];for(let u=0;u<i.length;u+=1)h[u]=yt(bt(a,i,u));const m=a[10].default,v=rt(m,a,a[9],null);let w=[gt,a[7],{width:a[2]},{height:a[2]},{stroke:a[1]},{"stroke-width":t=a[4]?Number(a[3])*24/Number(a[2]):a[3]},{class:l=a[6]("lucide-icon","lucide",a[0]?`lucide-${a[0]}`:"",a[8].class)}],N={};for(let u=0;u<w.length;u+=1)N=de(N,w[u]);return{c(){e=Se("svg");for(let u=0;u<h.length;u+=1)h[u].c();s=Ze(),v&&v.c(),this.h()},l(u){e=Ue(u,"svg",{width:!0,height:!0,stroke:!0,"stroke-width":!0,class:!0});var g=_(e);for(let f=0;f<h.length;f+=1)h[f].l(g);s=Ze(),v&&v.l(g),g.forEach(c),this.h()},h(){Qe(e,N)},m(u,g){me(u,e,g);for(let f=0;f<h.length;f+=1)h[f]&&h[f].m(e,null);r(e,s),v&&v.m(e,null),n=!0},p(u,[g]){if(g&32){i=u[5];let f;for(f=0;f<i.length;f+=1){const b=bt(u,i,f);h[f]?h[f].p(b,g):(h[f]=yt(b),h[f].c(),h[f].m(e,s))}for(;f<h.length;f+=1)h[f].d(1);h.length=i.length}v&&v.p&&(!n||g&512)&&nt(v,m,u,u[9],n?it(m,u[9],g,null):ot(u[9]),null),Qe(e,N=xe(w,[gt,g&128&&u[7],(!n||g&4)&&{width:u[2]},(!n||g&4)&&{height:u[2]},(!n||g&2)&&{stroke:u[1]},(!n||g&28&&t!==(t=u[4]?Number(u[3])*24/Number(u[2]):u[3]))&&{"stroke-width":t},(!n||g&257&&l!==(l=u[6]("lucide-icon","lucide",u[0]?`lucide-${u[0]}`:"",u[8].class)))&&{class:l}]))},i(u){n||($(v,u),n=!0)},o(u){x(v,u),n=!1},d(u){u&&c(e),Tt(h,u),v&&v.d(u)}}}function Ot(a,e,s){const t=["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"];let l=_t(e,t),{$$slots:n={},$$scope:i}=e,{name:h=void 0}=e,{color:m="currentColor"}=e,{size:v=24}=e,{strokeWidth:w=2}=e,{absoluteStrokeWidth:N=!1}=e,{iconNode:u=[]}=e;const g=(...f)=>f.filter((b,B,F)=>!!b&&F.indexOf(b)===B).join(" ");return a.$$set=f=>{s(8,e=de(de({},e),Le(f))),s(7,l=_t(e,t)),"name"in f&&s(0,h=f.name),"color"in f&&s(1,m=f.color),"size"in f&&s(2,v=f.size),"strokeWidth"in f&&s(3,w=f.strokeWidth),"absoluteStrokeWidth"in f&&s(4,N=f.absoluteStrokeWidth),"iconNode"in f&&s(5,u=f.iconNode),"$$scope"in f&&s(9,i=f.$$scope)},e=Le(e),[h,m,v,w,N,u,g,l,e,i,n]}class zt extends Ve{constructor(e){super(),We(this,e,Ot,Mt,je,{name:0,color:1,size:2,strokeWidth:3,absoluteStrokeWidth:4,iconNode:5})}}const jt=zt;function Ft(a){let e;const s=a[2].default,t=rt(s,a,a[3],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,n){t&&t.m(l,n),e=!0},p(l,n){t&&t.p&&(!e||n&8)&&nt(t,s,l,l[3],e?it(s,l[3],n,null):ot(l[3]),null)},i(l){e||($(t,l),e=!0)},o(l){x(t,l),e=!1},d(l){t&&t.d(l)}}}function Rt(a){let e,s;const t=[{name:"eye-off"},a[1],{iconNode:a[0]}];let l={$$slots:{default:[Ft]},$$scope:{ctx:a}};for(let n=0;n<t.length;n+=1)l=de(l,t[n]);return e=new jt({props:l}),{c(){Ce(e.$$.fragment)},l(n){Me(e.$$.fragment,n)},m(n,i){Oe(e,n,i),s=!0},p(n,[i]){const h=i&3?xe(t,[t[0],i&2&&kt(n[1]),i&1&&{iconNode:n[0]}]):{};i&8&&(h.$$scope={dirty:i,ctx:n}),e.$set(h)},i(n){s||($(e.$$.fragment,n),s=!0)},o(n){x(e.$$.fragment,n),s=!1},d(n){ze(e,n)}}}function Gt(a,e,s){let{$$slots:t={},$$scope:l}=e;const n=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"}],["path",{d:"m2 2 20 20"}]];return a.$$set=i=>{s(1,e=de(de({},e),Le(i))),"$$scope"in i&&s(3,l=i.$$scope)},e=Le(e),[n,e,t,l]}class Ht extends Ve{constructor(e){super(),We(this,e,Gt,Rt,je,{})}}const qt=Ht;function Jt(a){let e;const s=a[2].default,t=rt(s,a,a[3],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,n){t&&t.m(l,n),e=!0},p(l,n){t&&t.p&&(!e||n&8)&&nt(t,s,l,l[3],e?it(s,l[3],n,null):ot(l[3]),null)},i(l){e||($(t,l),e=!0)},o(l){x(t,l),e=!1},d(l){t&&t.d(l)}}}function Kt(a){let e,s;const t=[{name:"eye"},a[1],{iconNode:a[0]}];let l={$$slots:{default:[Jt]},$$scope:{ctx:a}};for(let n=0;n<t.length;n+=1)l=de(l,t[n]);return e=new jt({props:l}),{c(){Ce(e.$$.fragment)},l(n){Me(e.$$.fragment,n)},m(n,i){Oe(e,n,i),s=!0},p(n,[i]){const h=i&3?xe(t,[t[0],i&2&&kt(n[1]),i&1&&{iconNode:n[0]}]):{};i&8&&(h.$$scope={dirty:i,ctx:n}),e.$set(h)},i(n){s||($(e.$$.fragment,n),s=!0)},o(n){x(e.$$.fragment,n),s=!1},d(n){ze(e,n)}}}function Xt(a,e,s){let{$$slots:t={},$$scope:l}=e;const n=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}],["circle",{cx:"12",cy:"12",r:"3"}]];return a.$$set=i=>{s(1,e=de(de({},e),Le(i))),"$$scope"in i&&s(3,l=i.$$scope)},e=Le(e),[n,e,t,l]}class Yt extends Ve{constructor(e){super(),We(this,e,Xt,Kt,je,{})}}const Zt=Yt;function Qt(a){let e,s;return e=new qt({}),{c(){Ce(e.$$.fragment)},l(t){Me(e.$$.fragment,t)},m(t,l){Oe(e,t,l),s=!0},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){x(e.$$.fragment,t),s=!1},d(t){ze(e,t)}}}function $t(a){let e,s;return e=new Zt({}),{c(){Ce(e.$$.fragment)},l(t){Me(e.$$.fragment,t)},m(t,l){Oe(e,t,l),s=!0},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){x(e.$$.fragment,t),s=!1},d(t){ze(e,t)}}}function wt(a){let e,s;return{c(){e=d("p"),s=L(a[3]),this.h()},l(t){e=p(t,"P",{class:!0});var l=_(e);s=V(l,a[3]),l.forEach(c),this.h()},h(){o(e,"class","error svelte-swyih5")},m(t,l){me(t,e,l),r(e,s)},p(t,l){l&8&&Ut(s,t[3])},d(t){t&&c(e)}}}function xt(a){let e,s,t,l,n,i,h,m,v,w,N,u,g,f,b,B,F,R,A,ge,le,O,G,be,I,pe,q,W,J,ye,X,ie,C,z,ue,K,D,ce,H,fe,_e,ae,Y,we,re,ne,Ee,ee,ke,Pe,E,M,te;const j=[$t,Qt],he=[];function Fe(y,U){return y[4]?0:1}W=Fe(a),J=he[W]=j[W](a);let T=a[3]&&wt(a);return{c(){e=d("main"),s=d("form"),t=d("h1"),l=L("Sign Up"),n=k(),i=d("p"),h=L("Create your account to get started"),m=k(),v=d("div"),w=d("div"),N=d("label"),u=L("Email"),g=k(),f=d("div"),b=d("input"),B=k(),F=d("div"),R=d("div"),A=d("label"),ge=L("Password"),le=k(),O=d("div"),G=d("input"),be=k(),I=d("input"),pe=k(),q=d("button"),J.c(),ye=k(),X=d("div"),ie=d("div"),C=d("label"),z=L("Confirm Password"),ue=k(),K=d("div"),D=d("input"),ce=k(),H=d("input"),fe=k(),T&&T.c(),_e=k(),ae=d("button"),Y=d("span"),we=L("Sign Up"),re=k(),ne=d("p"),Ee=L(`Already have an account?
      `),ee=d("button"),ke=L("Sign In"),this.h()},l(y){e=p(y,"MAIN",{class:!0});var U=_(e);s=p(U,"FORM",{class:!0});var S=_(s);t=p(S,"H1",{class:!0});var Re=_(t);l=V(Re,"Sign Up"),Re.forEach(c),n=P(S),i=p(S,"P",{class:!0});var Ge=_(i);h=V(Ge,"Create your account to get started"),Ge.forEach(c),m=P(S),v=p(S,"DIV",{class:!0});var oe=_(v);w=p(oe,"DIV",{class:!0});var He=_(w);N=p(He,"LABEL",{for:!0,class:!0});var Ne=_(N);u=V(Ne,"Email"),Ne.forEach(c),He.forEach(c),g=P(oe),f=p(oe,"DIV",{class:!0});var ve=_(f);b=p(ve,"INPUT",{type:!0,class:!0,placeholder:!0}),ve.forEach(c),oe.forEach(c),B=P(S),F=p(S,"DIV",{class:!0});var Ie=_(F);R=p(Ie,"DIV",{class:!0});var Te=_(R);A=p(Te,"LABEL",{for:!0,class:!0});var qe=_(A);ge=V(qe,"Password"),qe.forEach(c),Te.forEach(c),le=P(Ie),O=p(Ie,"DIV",{class:!0});var Be=_(O);G=p(Be,"INPUT",{class:!0,type:!0,placeholder:!0,style:!0}),be=P(Be),I=p(Be,"INPUT",{class:!0,type:!0,placeholder:!0,style:!0}),pe=P(Be),q=p(Be,"BUTTON",{type:!0,class:!0,tabindex:!0,"aria-label":!0});var ut=_(q);J.l(ut),ut.forEach(c),Be.forEach(c),Ie.forEach(c),ye=P(S),X=p(S,"DIV",{class:!0});var Ke=_(X);ie=p(Ke,"DIV",{class:!0});var ct=_(ie);C=p(ct,"LABEL",{for:!0,class:!0});var ft=_(C);z=V(ft,"Confirm Password"),ft.forEach(c),ct.forEach(c),ue=P(Ke),K=p(Ke,"DIV",{class:!0});var Xe=_(K);D=p(Xe,"INPUT",{class:!0,type:!0,placeholder:!0,style:!0}),ce=P(Xe),H=p(Xe,"INPUT",{class:!0,type:!0,placeholder:!0,style:!0}),Xe.forEach(c),Ke.forEach(c),fe=P(S),T&&T.l(S),_e=P(S),ae=p(S,"BUTTON",{type:!0,class:!0});var ht=_(ae);Y=p(ht,"SPAN",{class:!0});var dt=_(Y);we=V(dt,"Sign Up"),dt.forEach(c),ht.forEach(c),re=P(S),ne=p(S,"P",{class:!0});var et=_(ne);Ee=V(et,`Already have an account?
      `),ee=p(et,"BUTTON",{class:!0});var pt=_(ee);ke=V(pt,"Sign In"),pt.forEach(c),et.forEach(c),S.forEach(c),U.forEach(c),this.h()},h(){o(t,"class","form-title svelte-swyih5"),o(i,"class","form-subtitle svelte-swyih5"),o(N,"for","email"),o(N,"class","svelte-swyih5"),o(w,"class","flex-column svelte-swyih5"),o(b,"type","email"),o(b,"class","input svelte-swyih5"),o(b,"placeholder","Enter your Email"),o(f,"class","inputForm svelte-swyih5"),o(v,"class","input-group svelte-swyih5"),o(A,"for","password"),o(A,"class","svelte-swyih5"),o(R,"class","flex-column svelte-swyih5"),o(G,"class","input password-hidden svelte-swyih5"),o(G,"type","password"),o(G,"placeholder","Enter your Password"),se(G,"display",a[4]?"none":"block"),o(I,"class","input password-visible svelte-swyih5"),o(I,"type","text"),o(I,"placeholder","Enter your Password"),se(I,"display",a[4]?"block":"none"),o(q,"type","button"),o(q,"class","toggle-password svelte-swyih5"),o(q,"tabindex","-1"),o(q,"aria-label","Toggle password visibility"),o(O,"class","inputForm svelte-swyih5"),o(F,"class","input-group svelte-swyih5"),o(C,"for","confirmPassword"),o(C,"class","svelte-swyih5"),o(ie,"class","flex-column svelte-swyih5"),o(D,"class","input password-hidden svelte-swyih5"),o(D,"type","password"),o(D,"placeholder","Re-enter your Password"),se(D,"display",a[4]?"none":"block"),o(H,"class","input password-visible svelte-swyih5"),o(H,"type","text"),o(H,"placeholder","Re-enter your Password"),se(H,"display",a[4]?"block":"none"),o(K,"class","inputForm svelte-swyih5"),o(X,"class","input-group svelte-swyih5"),o(Y,"class","text svelte-swyih5"),o(ae,"type","submit"),o(ae,"class","btn svelte-swyih5"),o(ee,"class","span svelte-swyih5"),o(ne,"class","p svelte-swyih5"),o(s,"class",Pe="form "+(a[5]?"visible":"")+" svelte-swyih5"),o(e,"class","svelte-swyih5")},m(y,U){me(y,e,U),r(e,s),r(s,t),r(t,l),r(s,n),r(s,i),r(i,h),r(s,m),r(s,v),r(v,w),r(w,N),r(N,u),r(v,g),r(v,f),r(f,b),Z(b,a[0]),r(s,B),r(s,F),r(F,R),r(R,A),r(A,ge),r(F,le),r(F,O),r(O,G),Z(G,a[1]),r(O,be),r(O,I),Z(I,a[1]),r(O,pe),r(O,q),he[W].m(q,null),r(s,ye),r(s,X),r(X,ie),r(ie,C),r(C,z),r(X,ue),r(X,K),r(K,D),Z(D,a[2]),r(K,ce),r(K,H),Z(H,a[2]),r(s,fe),T&&T.m(s,null),r(s,_e),r(s,ae),r(ae,Y),r(Y,we),r(s,re),r(s,ne),r(ne,Ee),r(ne,ee),r(ee,ke),E=!0,M||(te=[Q(b,"input",a[9]),Q(G,"input",a[10]),Q(I,"input",a[11]),Q(q,"click",a[8]),Q(D,"input",a[12]),Q(H,"input",a[13]),Q(ee,"click",a[7]),Q(s,"submit",a[6])],M=!0)},p(y,[U]){U&1&&b.value!==y[0]&&Z(b,y[0]),(!E||U&16)&&se(G,"display",y[4]?"none":"block"),U&2&&G.value!==y[1]&&Z(G,y[1]),(!E||U&16)&&se(I,"display",y[4]?"block":"none"),U&2&&I.value!==y[1]&&Z(I,y[1]);let S=W;W=Fe(y),W!==S&&(Pt(),x(he[S],1,1,()=>{he[S]=null}),Nt(),J=he[W],J||(J=he[W]=j[W](y),J.c()),$(J,1),J.m(q,null)),(!E||U&16)&&se(D,"display",y[4]?"none":"block"),U&4&&D.value!==y[2]&&Z(D,y[2]),(!E||U&16)&&se(H,"display",y[4]?"block":"none"),U&4&&H.value!==y[2]&&Z(H,y[2]),y[3]?T?T.p(y,U):(T=wt(y),T.c(),T.m(s,_e)):T&&(T.d(1),T=null),(!E||U&32&&Pe!==(Pe="form "+(y[5]?"visible":"")+" svelte-swyih5"))&&o(s,"class",Pe)},i(y){E||($(J),E=!0)},o(y){x(J),E=!1},d(y){y&&c(e),he[W].d(),T&&T.d(),M=!1,It(te)}}}function es(a,e,s){let t,l;Ae(a,De,R=>s(14,t=R)),Ae(a,$e,R=>s(5,l=R));let n="",i="",h="",m="",v=!1;St(()=>{setTimeout(()=>{Je($e,l=!0,l)},250)});const w=async R=>{if(R.preventDefault(),i!==h){s(3,m="Le password non corrispondono.");return}if(!n.includes("@")){s(3,m="Inserisci un'email valida.");return}if(i.length<6){s(3,m="La password deve contenere almeno 6 caratteri.");return}try{await Bt(st,n,i),Je(De,t=!1,t),lt(`${at}/home`)}catch(A){s(3,m=A.message)}};function N(){Je(De,t=!1,t)}const u=()=>{s(4,v=!v)};function g(){n=this.value,s(0,n)}function f(){i=this.value,s(1,i)}function b(){i=this.value,s(1,i)}function B(){h=this.value,s(2,h)}function F(){h=this.value,s(2,h)}return[n,i,h,m,v,l,w,N,u,g,f,b,B,F]}class ts extends Ve{constructor(e){super(),We(this,e,es,xt,je,{})}}function Et(a){let e,s;return{c(){e=d("p"),s=L(a[2]),this.h()},l(t){e=p(t,"P",{class:!0});var l=_(e);s=V(l,a[2]),l.forEach(c),this.h()},h(){o(e,"class","error svelte-13pj0e1")},m(t,l){me(t,e,l),r(e,s)},p(t,l){l&4&&Ut(s,t[2])},d(t){t&&c(e)}}}function ss(a){let e,s,t,l,n,i,h,m,v,w,N,u,g,f,b,B,F,R,A,ge,le,O,G,be,I,pe,q,W,J,ye,X,ie,C,z,ue,K,D,ce,H,fe,_e,ae,Y,we,re,ne,Ee,ee,ke,Pe,E=a[2]&&Et(a);return{c(){e=d("main"),s=d("form"),t=d("h1"),l=L("Welcome Back"),n=k(),i=d("p"),h=L("Sign in to continue"),m=k(),v=d("div"),w=d("label"),N=L("Email"),u=k(),g=d("input"),f=k(),b=d("div"),B=d("label"),F=L("Password"),R=k(),A=d("input"),ge=k(),le=d("button"),O=d("span"),G=L("Sign in"),be=k(),I=d("div"),pe=d("span"),q=k(),W=d("span"),J=L("Or"),ye=k(),X=d("span"),ie=k(),C=d("button"),z=Se("svg"),ue=Se("path"),K=Se("path"),D=Se("path"),ce=Se("path"),H=k(),fe=d("span"),_e=L("Google"),ae=k(),Y=d("p"),we=L("Don't have an account? "),re=d("button"),ne=L("Sign Up"),Ee=k(),E&&E.c(),this.h()},l(M){e=p(M,"MAIN",{class:!0});var te=_(e);s=p(te,"FORM",{class:!0});var j=_(s);t=p(j,"H1",{class:!0});var he=_(t);l=V(he,"Welcome Back"),he.forEach(c),n=P(j),i=p(j,"P",{class:!0});var Fe=_(i);h=V(Fe,"Sign in to continue"),Fe.forEach(c),m=P(j),v=p(j,"DIV",{class:!0});var T=_(v);w=p(T,"LABEL",{for:!0,class:!0});var y=_(w);N=V(y,"Email"),y.forEach(c),u=P(T),g=p(T,"INPUT",{type:!0,class:!0,placeholder:!0}),T.forEach(c),f=P(j),b=p(j,"DIV",{class:!0});var U=_(b);B=p(U,"LABEL",{for:!0,class:!0});var S=_(B);F=V(S,"Password"),S.forEach(c),R=P(U),A=p(U,"INPUT",{type:!0,class:!0,placeholder:!0}),U.forEach(c),ge=P(j),le=p(j,"BUTTON",{type:!0,class:!0});var Re=_(le);O=p(Re,"SPAN",{class:!0});var Ge=_(O);G=V(Ge,"Sign in"),Ge.forEach(c),Re.forEach(c),be=P(j),I=p(j,"DIV",{class:!0});var oe=_(I);pe=p(oe,"SPAN",{class:!0}),_(pe).forEach(c),q=P(oe),W=p(oe,"SPAN",{class:!0});var He=_(W);J=V(He,"Or"),He.forEach(c),ye=P(oe),X=p(oe,"SPAN",{class:!0}),_(X).forEach(c),oe.forEach(c),ie=P(j),C=p(j,"BUTTON",{type:!0,class:!0});var Ne=_(C);z=Ue(Ne,"svg",{version:!0,width:!0,xmlns:!0,viewBox:!0,class:!0});var ve=_(z);ue=Ue(ve,"path",{style:!0,d:!0}),_(ue).forEach(c),K=Ue(ve,"path",{style:!0,d:!0}),_(K).forEach(c),D=Ue(ve,"path",{style:!0,d:!0}),_(D).forEach(c),ce=Ue(ve,"path",{style:!0,d:!0}),_(ce).forEach(c),ve.forEach(c),H=P(Ne),fe=p(Ne,"SPAN",{class:!0});var Ie=_(fe);_e=V(Ie,"Google"),Ie.forEach(c),Ne.forEach(c),ae=P(j),Y=p(j,"P",{class:!0});var Te=_(Y);we=V(Te,"Don't have an account? "),re=p(Te,"BUTTON",{class:!0});var qe=_(re);ne=V(qe,"Sign Up"),qe.forEach(c),Te.forEach(c),Ee=P(j),E&&E.l(j),j.forEach(c),te.forEach(c),this.h()},h(){o(t,"class","title svelte-13pj0e1"),o(i,"class","subtitle svelte-13pj0e1"),o(w,"for","email"),o(w,"class","svelte-13pj0e1"),o(g,"type","email"),o(g,"class","input svelte-13pj0e1"),o(g,"placeholder","Enter your Email"),o(v,"class","input-group svelte-13pj0e1"),o(B,"for","password"),o(B,"class","svelte-13pj0e1"),o(A,"type","password"),o(A,"class","input svelte-13pj0e1"),o(A,"placeholder","Enter your Password"),o(b,"class","input-group svelte-13pj0e1"),o(O,"class","text"),o(le,"type","submit"),o(le,"class","btn submit-btn svelte-13pj0e1"),o(pe,"class","line svelte-13pj0e1"),o(W,"class","or svelte-13pj0e1"),o(X,"class","line svelte-13pj0e1"),o(I,"class","separator svelte-13pj0e1"),se(ue,"fill","#FBBB00"),o(ue,"d","M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456C103.821,274.792,107.225,292.797,113.47,309.408z"),se(K,"fill","#518EF8"),o(K,"d","M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"),se(D,"fill","#28B446"),o(D,"d","M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"),se(ce,"fill","#F14336"),o(ce,"d","M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0C318.115,0,375.068,22.126,419.404,58.936z"),o(z,"version","1.1"),o(z,"width","20"),o(z,"xmlns","http://www.w3.org/2000/svg"),o(z,"viewBox","0 0 512 512"),o(z,"class","svelte-13pj0e1"),o(fe,"class","text"),o(C,"type","button"),o(C,"class","btn google svelte-13pj0e1"),o(re,"class","link svelte-13pj0e1"),o(Y,"class","signup svelte-13pj0e1"),o(s,"class",ee="form "+(a[3]?"visible":"")+" svelte-13pj0e1"),o(e,"class","svelte-13pj0e1")},m(M,te){me(M,e,te),r(e,s),r(s,t),r(t,l),r(s,n),r(s,i),r(i,h),r(s,m),r(s,v),r(v,w),r(w,N),r(v,u),r(v,g),Z(g,a[0]),r(s,f),r(s,b),r(b,B),r(B,F),r(b,R),r(b,A),Z(A,a[1]),r(s,ge),r(s,le),r(le,O),r(O,G),r(s,be),r(s,I),r(I,pe),r(I,q),r(I,W),r(W,J),r(I,ye),r(I,X),r(s,ie),r(s,C),r(C,z),r(z,ue),r(z,K),r(z,D),r(z,ce),r(C,H),r(C,fe),r(fe,_e),r(s,ae),r(s,Y),r(Y,we),r(Y,re),r(re,ne),r(s,Ee),E&&E.m(s,null),ke||(Pe=[Q(g,"input",a[7]),Q(A,"input",a[8]),Q(C,"click",a[9]),Q(re,"click",a[4]),Q(s,"submit",a[5])],ke=!0)},p(M,[te]){te&1&&g.value!==M[0]&&Z(g,M[0]),te&2&&A.value!==M[1]&&Z(A,M[1]),M[2]?E?E.p(M,te):(E=Et(M),E.c(),E.m(s,null)):E&&(E.d(1),E=null),te&8&&ee!==(ee="form "+(M[3]?"visible":"")+" svelte-13pj0e1")&&o(s,"class",ee)},i:vt,o:vt,d(M){M&&c(e),E&&E.d(),ke=!1,It(Pe)}}}function ls(a,e,s){let t,l,n;Ae(a,At,b=>s(10,t=b)),Ae(a,De,b=>s(11,l=b)),Ae(a,$e,b=>s(3,n=b));let i="",h="",m="";St(()=>{setTimeout(()=>{Je($e,n=!0,n)},250)});function v(){Je(De,l=!0,l)}const w=async b=>{b.preventDefault();try{await Dt(st,i,h),await mt(t.uid),lt(`${at}/home`)}catch(B){s(2,m=B.message)}},N=async b=>{try{await Lt(st,b),(await Wt(t.uid)).length>0&&(await Ye(t.uid,"email",t.email),await Ye(t.uid,"played",0),await Ye(t.uid,"last",0),await Ye(t.uid,"best",0)),await mt(t.uid),lt(`${at}/home`)}catch(B){s(2,m=B.message)}};function u(){i=this.value,s(0,i)}function g(){h=this.value,s(1,h)}return[i,h,m,n,v,w,N,u,g,async()=>await N(Vt)]}class as extends Ve{constructor(e){super(),We(this,e,ls,ss,je,{})}}function rs(a){let e,s;return e=new as({}),{c(){Ce(e.$$.fragment)},l(t){Me(e.$$.fragment,t)},m(t,l){Oe(e,t,l),s=!0},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){x(e.$$.fragment,t),s=!1},d(t){ze(e,t)}}}function ns(a){let e,s;return e=new ts({}),{c(){Ce(e.$$.fragment)},l(t){Me(e.$$.fragment,t)},m(t,l){Oe(e,t,l),s=!0},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){x(e.$$.fragment,t),s=!1},d(t){ze(e,t)}}}function os(a){let e,s,t,l;const n=[ns,rs],i=[];function h(m,v){return m[0]?0:1}return s=h(a),t=i[s]=n[s](a),{c(){e=d("div"),t.c(),this.h()},l(m){e=p(m,"DIV",{class:!0});var v=_(e);t.l(v),v.forEach(c),this.h()},h(){o(e,"class","bg svelte-14fzc2")},m(m,v){me(m,e,v),i[s].m(e,null),l=!0},p(m,[v]){let w=s;s=h(m),s!==w&&(Pt(),x(i[w],1,1,()=>{i[w]=null}),Nt(),t=i[s],t||(t=i[s]=n[s](m),t.c()),$(t,1),t.m(e,null))},i(m){l||($(t),l=!0)},o(m){x(t),l=!1},d(m){m&&c(e),i[s].d()}}}function is(a,e,s){let t;return Ae(a,De,l=>s(0,t=l)),[t]}class ps extends Ve{constructor(e){super(),We(this,e,is,os,je,{})}}export{ps as component};
