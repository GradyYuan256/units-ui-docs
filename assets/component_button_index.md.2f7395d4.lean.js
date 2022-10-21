import{_ as p,r as c,o as s,c as a,a as t,w as n,b as e,d as u,u as _,e as f,n as y}from"./app.cb1cbdda.js";const g={};function k(d,l){const o=c("u-button");return s(),a("div",null,[t(o,null,{default:n(()=>[e("\u9ED8\u8BA4\u6309\u94AE")]),_:1}),t(o,{type:"primary"},{default:n(()=>[e("\u4E3B\u8981\u6309\u94AE")]),_:1}),t(o,{type:"info"},{default:n(()=>[e("\u4FE1\u606F\u6309\u94AE")]),_:1}),t(o,{type:"success"},{default:n(()=>[e("\u6210\u529F\u6309\u94AE")]),_:1}),t(o,{type:"warning"},{default:n(()=>[e("\u8B66\u544A\u6309\u94AE")]),_:1}),t(o,{type:"error"},{default:n(()=>[e("\u9519\u8BEF\u6309\u94AE")]),_:1})])}const v=p(g,[["render",k]]),C=`<template>
  <div>
    <u-button>\u9ED8\u8BA4\u6309\u94AE</u-button>
    <u-button type="primary">\u4E3B\u8981\u6309\u94AE</u-button>
    <u-button type="info">\u4FE1\u606F\u6309\u94AE</u-button>
    <u-button type="success">\u6210\u529F\u6309\u94AE</u-button>
    <u-button type="warning">\u8B66\u544A\u6309\u94AE</u-button>
    <u-button type="error">\u9519\u8BEF\u6309\u94AE</u-button>
  </div>
</template>
`,x=`<template>
  <div>
    <u-button>\u9ED8\u8BA4\u6309\u94AE</u-button>
    <u-button type="primary" size="medium">\u4E3B\u8981\u6309\u94AE</u-button>
    <u-button type="info" size="small">\u4FE1\u606F\u6309\u94AE</u-button>
    <u-button type="success" size="mini">\u6210\u529F\u6309\u94AE</u-button>
  </div>
</template>
`,$=`<template>
  <div>
    <u-button plain>\u9ED8\u8BA4\u6309\u94AE</u-button>
    <u-button type="primary" plain>\u4E3B\u8981\u6309\u94AE</u-button>
    <u-button type="info" plain>\u4FE1\u606F\u6309\u94AE</u-button>
    <u-button type="success" plain>\u6210\u529F\u6309\u94AE</u-button>
    <u-button type="warning" plain>\u8B66\u544A\u6309\u94AE</u-button>
    <u-button type="error" plain>\u9519\u8BEF\u6309\u94AE</u-button>
  </div>
</template>
`,j=`<template>
  <div>
    <u-button disabled>\u9ED8\u8BA4\u6309\u94AE</u-button>
    <u-button type="primary" disabled>\u4E3B\u8981\u6309\u94AE</u-button>
    <u-button type="info" disabled>\u4FE1\u606F\u6309\u94AE</u-button>
    <u-button type="success" disabled>\u6210\u529F\u6309\u94AE</u-button>
    <u-button type="warning" disabled>\u8B66\u544A\u6309\u94AE</u-button>
    <u-button type="error" disabled>\u9519\u8BEF\u6309\u94AE</u-button>
  </div>
</template>
`,w=`<template>
  <div>
    <u-button round>\u9ED8\u8BA4\u6309\u94AE</u-button>
    <u-button type="primary" round>\u4E3B\u8981\u6309\u94AE</u-button>
    <u-button type="info" round>\u4FE1\u606F\u6309\u94AE</u-button>
    <u-button type="success" round>\u6210\u529F\u6309\u94AE</u-button>
    <u-button type="warning" round>\u8B66\u544A\u6309\u94AE</u-button>
    <u-button type="error" round>\u9519\u8BEF\u6309\u94AE</u-button>
  </div>
</template>
`,z=`<script setup>
import { ref } from "vue";

let isLoading = ref(false);
let timer = null;
const handleSpin = () => {
  if (timer) return;
  isLoading.value = true;
  timer = setTimeout(() => {
    isLoading.value = false;
    clearTimeout(timer);
    timer = null;
  }, 2000);
};
<\/script>
<template>
  <div>
    <u-button @click="handleSpin" circle>
      <u-icon name="refresh" :class="{'is-loading': isLoading}"></u-icon>
    </u-button>
    <u-button type="primary" circle>
      <u-icon name="plus"></u-icon>
    </u-button>
  </div>
</template>

<style scoped>
.is-loading {
  animation: spin 0.6s infinite linear;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
`,N=`<script setup>
const handleClick = () => {
  alert('Welcome to Units UI!')
}
<\/script>
<template>
  <div>
    <u-button-group>
      <u-button plain>Prev</u-button>
      <u-button plain>Now</u-button>
      <u-button plain>Next</u-button>
    </u-button-group>
    <p></p>
    <u-button-group>
      <u-button @click="handleClick" type="primary" plain>Click me</u-button>
      <u-button @click="handleClick" type="info" plain>Click me</u-button>
      <u-button @click="handleClick" type="success" plain>Click me</u-button>
      <u-button @click="handleClick" type="warning" plain>Click me</u-button>
      <u-button @click="handleClick" type="error" plain>Click me</u-button>
    </u-button-group>
    <p></p>
    <u-button-group>
      <u-button @click="handleClick" type="primary">Click me</u-button>
      <u-button @click="handleClick" type="info">Click me</u-button>
      <u-button @click="handleClick" type="success">Click me</u-button>
      <u-button @click="handleClick" type="warning">Click me</u-button>
      <u-button @click="handleClick" type="error">Click me</u-button>
    </u-button-group>
  </div>
</template>
`;const B={class:"demo-section"},L={class:"demo-block"},S={__name:"formal-button",setup(d){return(l,o)=>{const i=c("highlightjs");return s(),a("div",B,[u("div",L,[t(v)]),t(i,{class:"code-block custom-code-block",language:"javascript xml",code:_(C)},null,8,["code"])])}}},T={};function O(d,l){const o=c("u-button");return s(),a("div",null,[t(o,{plain:""},{default:n(()=>[e("\u9ED8\u8BA4\u6309\u94AE")]),_:1}),t(o,{type:"primary",plain:""},{default:n(()=>[e("\u4E3B\u8981\u6309\u94AE")]),_:1}),t(o,{type:"info",plain:""},{default:n(()=>[e("\u4FE1\u606F\u6309\u94AE")]),_:1}),t(o,{type:"success",plain:""},{default:n(()=>[e("\u6210\u529F\u6309\u94AE")]),_:1}),t(o,{type:"warning",plain:""},{default:n(()=>[e("\u8B66\u544A\u6309\u94AE")]),_:1}),t(o,{type:"error",plain:""},{default:n(()=>[e("\u9519\u8BEF\u6309\u94AE")]),_:1})])}const P=p(T,[["render",O]]),U={class:"demo-section"},I={class:"demo-block"},V={__name:"plain-button",setup(d){return(l,o)=>{const i=c("highlightjs");return s(),a("div",U,[u("div",I,[t(P)]),t(i,{class:"code-block",language:"javascript xml",code:_($)},null,8,["code"])])}}},D={};function W(d,l){const o=c("u-button");return s(),a("div",null,[t(o,{disabled:""},{default:n(()=>[e("\u9ED8\u8BA4\u6309\u94AE")]),_:1}),t(o,{type:"primary",disabled:""},{default:n(()=>[e("\u4E3B\u8981\u6309\u94AE")]),_:1}),t(o,{type:"info",disabled:""},{default:n(()=>[e("\u4FE1\u606F\u6309\u94AE")]),_:1}),t(o,{type:"success",disabled:""},{default:n(()=>[e("\u6210\u529F\u6309\u94AE")]),_:1}),t(o,{type:"warning",disabled:""},{default:n(()=>[e("\u8B66\u544A\u6309\u94AE")]),_:1}),t(o,{type:"error",disabled:""},{default:n(()=>[e("\u9519\u8BEF\u6309\u94AE")]),_:1})])}const E=p(D,[["render",W]]),F={class:"demo-section"},J={class:"demo-block"},R={__name:"disabled-button",setup(d){return(l,o)=>{const i=c("highlightjs");return s(),a("div",F,[u("div",J,[t(E)]),t(i,{class:"code-block",language:"javascript xml",code:_(j)},null,8,["code"])])}}},q={};function A(d,l){const o=c("u-button");return s(),a("div",null,[t(o,{round:""},{default:n(()=>[e("\u9ED8\u8BA4\u6309\u94AE")]),_:1}),t(o,{type:"primary",round:""},{default:n(()=>[e("\u4E3B\u8981\u6309\u94AE")]),_:1}),t(o,{type:"info",round:""},{default:n(()=>[e("\u4FE1\u606F\u6309\u94AE")]),_:1}),t(o,{type:"success",round:""},{default:n(()=>[e("\u6210\u529F\u6309\u94AE")]),_:1}),t(o,{type:"warning",round:""},{default:n(()=>[e("\u8B66\u544A\u6309\u94AE")]),_:1}),t(o,{type:"error",round:""},{default:n(()=>[e("\u9519\u8BEF\u6309\u94AE")]),_:1})])}const G=p(q,[["render",A]]),H={class:"demo-section"},K={class:"demo-block"},M={__name:"round-button",setup(d){return(l,o)=>{const i=c("highlightjs");return s(),a("div",H,[u("div",K,[t(G)]),t(i,{class:"code-block",language:"javascript xml",code:_(w)},null,8,["code"])])}}};const Q={__name:"circle-code",setup(d){let l=f(!1),o=null;const i=()=>{o||(l.value=!0,o=setTimeout(()=>{l.value=!1,clearTimeout(o),o=null},2e3))};return(r,m)=>{const b=c("u-icon"),h=c("u-button");return s(),a("div",null,[t(h,{onClick:i,circle:""},{default:n(()=>[t(b,{name:"refresh",class:y({"is-loading":_(l)})},null,8,["class"])]),_:1}),t(h,{type:"primary",circle:""},{default:n(()=>[t(b,{name:"plus"})]),_:1})])}}},X=p(Q,[["__scopeId","data-v-083ab5c1"]]),Y={class:"demo-section"},Z={class:"demo-block"},tt={__name:"circle-button",setup(d){return(l,o)=>{const i=c("highlightjs");return s(),a("div",Y,[u("div",Z,[t(X)]),t(i,{class:"code-block",language:"javascript xml",code:_(z)},null,8,["code"])])}}},et={},nt=u("p",null,null,-1);function ot(d,l){const o=c("u-button");return s(),a("div",null,[t(o,null,{default:n(()=>[e("\u9ED8\u8BA4\u6309\u94AE")]),_:1}),t(o,{type:"primary",size:"medium"},{default:n(()=>[e("\u4E3B\u8981\u6309\u94AE")]),_:1}),t(o,{type:"info",size:"small"},{default:n(()=>[e("\u4FE1\u606F\u6309\u94AE")]),_:1}),t(o,{type:"success",size:"mini"},{default:n(()=>[e("\u6210\u529F\u6309\u94AE")]),_:1}),nt,t(o,{round:""},{default:n(()=>[e("\u9ED8\u8BA4\u6309\u94AE")]),_:1}),t(o,{type:"primary",size:"medium",round:""},{default:n(()=>[e("\u4E3B\u8981\u6309\u94AE")]),_:1}),t(o,{type:"info",size:"small",round:""},{default:n(()=>[e("\u4FE1\u606F\u6309\u94AE")]),_:1}),t(o,{type:"success",size:"mini",round:""},{default:n(()=>[e("\u6210\u529F\u6309\u94AE")]),_:1})])}const ut=p(et,[["render",ot]]),lt={class:"demo-section"},it={class:"demo-block"},ct={__name:"size-button",setup(d){return(l,o)=>{const i=c("highlightjs");return s(),a("div",lt,[u("div",it,[t(ut)]),t(i,{class:"code-block",language:"javascript xml",code:_(x)},null,8,["code"])])}}},st=u("p",null,null,-1),at=u("p",null,null,-1),dt={__name:"group-code",setup(d){const l=()=>{alert("Welcome to Units UI!")};return(o,i)=>{const r=c("u-button"),m=c("u-button-group");return s(),a("div",null,[t(m,null,{default:n(()=>[t(r,{plain:""},{default:n(()=>[e("Prev")]),_:1}),t(r,{plain:""},{default:n(()=>[e("Now")]),_:1}),t(r,{plain:""},{default:n(()=>[e("Next")]),_:1})]),_:1}),st,t(m,null,{default:n(()=>[t(r,{onClick:l,type:"primary",plain:""},{default:n(()=>[e("Click me")]),_:1}),t(r,{onClick:l,type:"info",plain:""},{default:n(()=>[e("Click me")]),_:1}),t(r,{onClick:l,type:"success",plain:""},{default:n(()=>[e("Click me")]),_:1}),t(r,{onClick:l,type:"warning",plain:""},{default:n(()=>[e("Click me")]),_:1}),t(r,{onClick:l,type:"error",plain:""},{default:n(()=>[e("Click me")]),_:1})]),_:1}),at,t(m,null,{default:n(()=>[t(r,{onClick:l,type:"primary"},{default:n(()=>[e("Click me")]),_:1}),t(r,{onClick:l,type:"info"},{default:n(()=>[e("Click me")]),_:1}),t(r,{onClick:l,type:"success"},{default:n(()=>[e("Click me")]),_:1}),t(r,{onClick:l,type:"warning"},{default:n(()=>[e("Click me")]),_:1}),t(r,{onClick:l,type:"error"},{default:n(()=>[e("Click me")]),_:1})]),_:1})])}}},rt={class:"demo-section"},_t={class:"demo-block"},pt={__name:"group-button",setup(d){return(l,o)=>{const i=c("highlightjs");return s(),a("div",rt,[u("div",_t,[t(dt)]),t(i,{class:"code-block",language:"javascript xml",code:_(N)},null,8,["code"])])}}},mt=u("h1",{id:"button-\u6309\u94AE",tabindex:"-1"},[e("Button \u6309\u94AE "),u("a",{class:"header-anchor",href:"#button-\u6309\u94AE","aria-hidden":"true"},"#")],-1),bt=u("h2",{id:"\u57FA\u672C\u7528\u6CD5",tabindex:"-1"},[e("\u57FA\u672C\u7528\u6CD5 "),u("a",{class:"header-anchor",href:"#\u57FA\u672C\u7528\u6CD5","aria-hidden":"true"},"#")],-1),ht=u("p",null,[e("\u6839\u636E "),u("code",null,"type"),e(" \u6765\u9009\u62E9\u6837\u5F0F\uFF0C\u5BF9\u5E94\u7684\u503C\u6709 "),u("code",null,"primary | info | success | warning | error"),e("\uFF0C\u9ED8\u8BA4\u662F "),u("code",null,"default"),e("\u3002")],-1),ft=u("h2",{id:"\u6734\u7D20\u6309\u94AE",tabindex:"-1"},[e("\u6734\u7D20\u6309\u94AE "),u("a",{class:"header-anchor",href:"#\u6734\u7D20\u6309\u94AE","aria-hidden":"true"},"#")],-1),yt=u("p",null,[e("\u53EF\u4EE5\u6DFB\u52A0 "),u("code",null,"plain"),e(" \u5B57\u6BB5\u6539\u53D8\u6309\u94AE\u6837\u5F0F\u3002")],-1),gt=u("h2",{id:"\u7981\u7528\u6309\u94AE",tabindex:"-1"},[e("\u7981\u7528\u6309\u94AE "),u("a",{class:"header-anchor",href:"#\u7981\u7528\u6309\u94AE","aria-hidden":"true"},"#")],-1),kt=u("p",null,[e("\u53EF\u4EE5\u6DFB\u52A0 "),u("code",null,"disabled"),e(" \u5B57\u6BB5\u7981\u7528\u6309\u94AE\u3002")],-1),vt=u("h2",{id:"\u5706\u89D2\u6309\u94AE",tabindex:"-1"},[e("\u5706\u89D2\u6309\u94AE "),u("a",{class:"header-anchor",href:"#\u5706\u89D2\u6309\u94AE","aria-hidden":"true"},"#")],-1),Ct=u("p",null,[e("\u53EF\u4EE5\u6DFB\u52A0 "),u("code",null,"round"),e(" \u5B57\u6BB5\u4F7F\u6309\u94AE\u6709\u5706\u89D2\u6548\u679C\u3002")],-1),xt=u("h2",{id:"\u5706\u5F62\u6309\u94AE",tabindex:"-1"},[e("\u5706\u5F62\u6309\u94AE "),u("a",{class:"header-anchor",href:"#\u5706\u5F62\u6309\u94AE","aria-hidden":"true"},"#")],-1),$t=u("p",null,[e("\u53EF\u4EE5\u6DFB\u52A0 "),u("code",null,"round"),e(" \u5B57\u6BB5\u4F7F\u6309\u94AE\u53D8\u6210\u5706\u5F62\u3002")],-1),jt=u("h2",{id:"\u4E0D\u540C\u5C3A\u5BF8",tabindex:"-1"},[e("\u4E0D\u540C\u5C3A\u5BF8 "),u("a",{class:"header-anchor",href:"#\u4E0D\u540C\u5C3A\u5BF8","aria-hidden":"true"},"#")],-1),wt=u("p",null,[e("\u6839\u636E "),u("code",null,"size"),e(" \u8BBE\u7F6E\u6309\u94AE\u5C3A\u5BF8\u5927\u5C0F\uFF0C\u5BF9\u5E94\u7684\u503C\u6709 "),u("code",null,"medium | small | mini"),e("\uFF0C\u9ED8\u8BA4\u662F\u6B63\u5E38\u5927\u5C0F\u7684\u6309\u94AE\u3002")],-1),zt=u("h2",{id:"\u6309\u94AE\u7EC4",tabindex:"-1"},[e("\u6309\u94AE\u7EC4 "),u("a",{class:"header-anchor",href:"#\u6309\u94AE\u7EC4","aria-hidden":"true"},"#")],-1),Nt=u("p",null,[e("\u4F7F\u7528 "),u("code",null,"u-button-group"),e(" \u5305\u88F9 "),u("code",null,"u-button"),e(" \u5C31\u53EF\u4EE5\u5B9E\u73B0\u6309\u94AE\u7EC4\u3002")],-1),St=JSON.parse('{"title":"Button \u6309\u94AE","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5","link":"#\u57FA\u672C\u7528\u6CD5","children":[]},{"level":2,"title":"\u6734\u7D20\u6309\u94AE","slug":"\u6734\u7D20\u6309\u94AE","link":"#\u6734\u7D20\u6309\u94AE","children":[]},{"level":2,"title":"\u7981\u7528\u6309\u94AE","slug":"\u7981\u7528\u6309\u94AE","link":"#\u7981\u7528\u6309\u94AE","children":[]},{"level":2,"title":"\u5706\u89D2\u6309\u94AE","slug":"\u5706\u89D2\u6309\u94AE","link":"#\u5706\u89D2\u6309\u94AE","children":[]},{"level":2,"title":"\u5706\u5F62\u6309\u94AE","slug":"\u5706\u5F62\u6309\u94AE","link":"#\u5706\u5F62\u6309\u94AE","children":[]},{"level":2,"title":"\u4E0D\u540C\u5C3A\u5BF8","slug":"\u4E0D\u540C\u5C3A\u5BF8","link":"#\u4E0D\u540C\u5C3A\u5BF8","children":[]},{"level":2,"title":"\u6309\u94AE\u7EC4","slug":"\u6309\u94AE\u7EC4","link":"#\u6309\u94AE\u7EC4","children":[]}],"relativePath":"component/button/index.md"}'),Bt={name:"component/button/index.md"},Tt=Object.assign(Bt,{setup(d){return(l,o)=>{const i=c("ClientOnly");return s(),a("div",null,[mt,bt,ht,t(i,null,{default:n(()=>[t(S)]),_:1}),ft,yt,t(i,null,{default:n(()=>[t(V)]),_:1}),gt,kt,t(i,null,{default:n(()=>[t(R)]),_:1}),vt,Ct,t(i,null,{default:n(()=>[t(M)]),_:1}),xt,$t,t(i,null,{default:n(()=>[t(tt)]),_:1}),jt,wt,t(i,null,{default:n(()=>[t(ct)]),_:1}),zt,Nt,t(i,null,{default:n(()=>[t(pt)]),_:1})])}}});export{St as __pageData,Tt as default};
