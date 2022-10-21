import{e as h,f as m,r as c,o as p,c as d,d as t,b as o,a as e,u,i as f,t as v,_ as x,w as s,g}from"./app.cb1cbdda.js";const b={__name:"formal-code",setup(i){let a=h();return m(a,l=>{console.log("basic input --> ",l)}),(l,n)=>{const r=c("u-input");return p(),d("div",null,[t("p",null,[o(" \u8F93\u5165\u6846\uFF1A"),e(r,{value:u(a),"onUpdate:value":n[0]||(n[0]=_=>f(a)?a.value=_:a=_),placeholder:"\u8BF7\u8F93\u5165...",clearable:""},null,8,["value"]),t("span",null," \u7ED3\u679C\uFF1A"+v(u(a)),1)]),t("p",null,[o("\u6587\u672C\u57DF\uFF1A"),e(r,{type:"textarea"})]),t("p",null,[o("\u7981\u7528\u72B6\u6001\uFF1A"),e(r,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",disabled:""})])])}}},V=`<script setup>
import { ref, watch } from "vue";

let textValue = ref()
watch(textValue, (newV) => {
  console.log('basic input --> ', newV);
})
<\/script>
<template>
  <div>
    <p>
      \u8F93\u5165\u6846\uFF1A<u-input v-model:value="textValue" placeholder="\u8BF7\u8F93\u5165..." clearable></u-input>
      <span> \u7ED3\u679C\uFF1A{{ textValue }}</span>
    </p>
    <p>\u6587\u672C\u57DF\uFF1A<u-input type="textarea"></u-input></p>
    <p>\u7981\u7528\u72B6\u6001\uFF1A<u-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" disabled></u-input></p>
  </div>
</template>
`,C=`<template>
  <div>
    <u-input>
      <template v-slot:prepend>URL: </template>
      <template v-slot:append><u-icon name="refresh"></u-icon></template>
    </u-input>
    <p></p>
    <u-input>
      <template v-slot:append><u-icon name="refresh"></u-icon></template>
    </u-input>
  </div>
</template>
`,k={class:"demo-section"},j={class:"demo-block"},w={__name:"formal-input",setup(i){return(a,l)=>{const n=c("highlightjs");return p(),d("div",k,[t("div",j,[e(b)]),e(n,{class:"code-block",language:"javascript xml",code:u(V)},null,8,["code"])])}}},T={},$=t("p",null,null,-1);function y(i,a){const l=c("u-icon"),n=c("u-input");return p(),d("div",null,[e(n,null,{prepend:s(()=>[o("URL: ")]),append:s(()=>[e(l,{name:"refresh"})]),_:1}),$,e(n,{disabled:""},{append:s(()=>[e(l,{name:"refresh"})]),_:1})])}const N=x(T,[["render",y]]),S={class:"demo-section"},I={class:"demo-block"},O={__name:"compound-input",setup(i){return(a,l)=>{const n=c("highlightjs");return p(),d("div",S,[t("div",I,[e(N)]),e(n,{class:"code-block",language:"javascript xml",code:u(C)},null,8,["code"])])}}},R=g('<h1 id="input-\u8F93\u5165\u6846" tabindex="-1">Input \u8F93\u5165\u6846 <a class="header-anchor" href="#input-\u8F93\u5165\u6846" aria-hidden="true">#</a></h1><h2 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h2><p>\u4F7F\u7528 <code>v-model:value</code> \u7ED1\u5B9A\u503C\uFF0C\u53EF\u8BBE\u7F6E <code>placeholder</code>\uFF0C<code>type</code> \u7684\u503C\u6709 <code>text | textarea</code>\uFF0C\u9ED8\u8BA4\u503C\u662F <code>text</code>\uFF0C<code>disabled</code> \u53EF\u7981\u7528\u8F93\u5165\u6846\uFF0C\u8BBE\u7F6E <code>clearable</code> \u5B57\u6BB5\u53EF\u62E5\u6709\u6E05\u9664\u529F\u80FD\u3002</p>',3),A=t("h2",{id:"\u590D\u5408\u8F93\u5165\u6846",tabindex:"-1"},[o("\u590D\u5408\u8F93\u5165\u6846 "),t("a",{class:"header-anchor",href:"#\u590D\u5408\u8F93\u5165\u6846","aria-hidden":"true"},"#")],-1),B=t("p",null,[o("\u4F7F\u7528 "),t("code",null,"slot"),o(" \u7684\u65B9\u5F0F\u63D2\u5165\u524D\u7F00\uFF08"),t("code",null,"prepend"),o("\uFF09\u548C\u540E\u7F00\uFF08"),t("code",null,"append"),o("\uFF09\u3002")],-1),U=JSON.parse('{"title":"Input \u8F93\u5165\u6846","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5","link":"#\u57FA\u672C\u7528\u6CD5","children":[]},{"level":2,"title":"\u590D\u5408\u8F93\u5165\u6846","slug":"\u590D\u5408\u8F93\u5165\u6846","link":"#\u590D\u5408\u8F93\u5165\u6846","children":[]}],"relativePath":"component/input/index.md"}'),D={name:"component/input/index.md"},E=Object.assign(D,{setup(i){return(a,l)=>{const n=c("ClientOnly");return p(),d("div",null,[R,e(n,null,{default:s(()=>[e(w)]),_:1}),A,B,e(n,null,{default:s(()=>[e(O)]),_:1})])}}});export{U as __pageData,E as default};
