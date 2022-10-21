import{e as v,f as m,r as d,o as h,c as r,a as o,u,i as p,d as t,w,b as s}from"./app.cb1cbdda.js";const g={__name:"formal-code",setup(_){let e=v(!0);const n=l=>{console.log("switch \u70B9\u51FB\u4E8B\u4EF6\uFF1A",l)};return m(()=>e.value,(l,a)=>{console.log("switch watch -->",l,a)}),(l,a)=>{const i=d("u-switch");return h(),r("div",null,[o(i,{value:u(e),"onUpdate:value":[a[0]||(a[0]=c=>p(e)?e.value=c:e=c),n]},null,8,["value"]),o(i,{value:u(e),"onUpdate:value":a[1]||(a[1]=c=>p(e)?e.value=c:e=c),disabled:""},null,8,["value"])])}}},f=`<script setup>
import { ref, watch } from "vue";

let switchValue = ref(true);
const handleChange = (e) => {
  console.log("switch \u70B9\u51FB\u4E8B\u4EF6\uFF1A", e);
};

watch(() => switchValue.value, (newV, oldV) => {
  console.log('switch watch -->', newV, oldV);
})
<\/script>
<template>
  <div>
    <u-switch v-model:value="switchValue" @update:value="handleChange"></u-switch>
    <u-switch v-model:value="switchValue" disabled></u-switch>
  </div>
</template>
`,V=`<script setup>
import { ref, watch } from "vue";

let switchValue = ref(true);
const handleChange = (e) => {
  console.log("switch \u70B9\u51FB\u4E8B\u4EF6\uFF1A", e);
};

watch(() => switchValue.value, (newV, oldV) => {
  console.log('switch watch -->', newV, oldV);
})
<\/script>
<template>
  <div>
    <u-switch v-model:value="switchValue" @update:value="handleChange" square></u-switch>
    <u-switch v-model:value="switchValue" disabled square></u-switch>
  </div>
</template>
`,b={class:"demo-section"},x={class:"demo-block"},C={__name:"formal-switch",setup(_){return(e,n)=>{const l=d("highlightjs");return h(),r("div",b,[t("div",x,[o(g)]),o(l,{class:"code-block",language:"javascript xml",code:u(f)},null,8,["code"])])}}},k={__name:"square-code",setup(_){let e=v(!0);const n=l=>{console.log("switch \u70B9\u51FB\u4E8B\u4EF6\uFF1A",l)};return m(()=>e.value,(l,a)=>{console.log("switch watch -->",l,a)}),(l,a)=>{const i=d("u-switch");return h(),r("div",null,[o(i,{value:u(e),"onUpdate:value":[a[0]||(a[0]=c=>p(e)?e.value=c:e=c),n],square:""},null,8,["value"]),o(i,{value:u(e),"onUpdate:value":a[1]||(a[1]=c=>p(e)?e.value=c:e=c),disabled:"",square:""},null,8,["value"])])}}},q={class:"demo-section"},j={class:"demo-block"},N={__name:"square-switch",setup(_){return(e,n)=>{const l=d("highlightjs");return h(),r("div",q,[t("div",j,[o(k)]),o(l,{class:"code-block",language:"javascript xml",code:u(V)},null,8,["code"])])}}},O=t("h1",{id:"switch-\u5F00\u5173",tabindex:"-1"},[s("Switch \u5F00\u5173 "),t("a",{class:"header-anchor",href:"#switch-\u5F00\u5173","aria-hidden":"true"},"#")],-1),U=t("h2",{id:"\u57FA\u672C\u7528\u6CD5",tabindex:"-1"},[s("\u57FA\u672C\u7528\u6CD5 "),t("a",{class:"header-anchor",href:"#\u57FA\u672C\u7528\u6CD5","aria-hidden":"true"},"#")],-1),$=t("p",null,[s("\u4F7F\u7528 "),t("code",null,"v-model:value"),s(" \u7ED1\u5B9A\u503C\uFF0C"),t("code",null,"@update:value"),s(" \u53EF\u76D1\u542C\u503C\u7684\u53D8\u5316\uFF1B"),t("code",null,"disabled"),s(" \u53EF\u7981\u7528\u5F00\u5173\u3002")],-1),B=t("h2",{id:"\u65B9\u5F62\u5F00\u5173",tabindex:"-1"},[s("\u65B9\u5F62\u5F00\u5173 "),t("a",{class:"header-anchor",href:"#\u65B9\u5F62\u5F00\u5173","aria-hidden":"true"},"#")],-1),S=t("p",null,[s("\u4F7F\u7528 "),t("code",null,"v-model:value"),s(" \u7ED1\u5B9A\u503C\uFF0C"),t("code",null,"@update:value"),s(" \u53EF\u76D1\u542C\u503C\u7684\u53D8\u5316\uFF1B"),t("code",null,"disabled"),s(" \u53EF\u7981\u7528\u5F00\u5173\uFF1B\u6DFB\u52A0 "),t("code",null,"square"),s(" \u5B57\u6BB5\u53EF\u6539\u53D8\u5F00\u5173\u5F62\u72B6\u3002")],-1),E=JSON.parse('{"title":"Switch \u5F00\u5173","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5","link":"#\u57FA\u672C\u7528\u6CD5","children":[]},{"level":2,"title":"\u65B9\u5F62\u5F00\u5173","slug":"\u65B9\u5F62\u5F00\u5173","link":"#\u65B9\u5F62\u5F00\u5173","children":[]}],"relativePath":"component/switch/index.md"}'),y={name:"component/switch/index.md"},J=Object.assign(y,{setup(_){return(e,n)=>{const l=d("ClientOnly");return h(),r("div",null,[O,U,$,o(l,null,{default:w(()=>[o(C)]),_:1}),B,S,o(l,null,{default:w(()=>[o(N)]),_:1})])}}});export{E as __pageData,J as default};
