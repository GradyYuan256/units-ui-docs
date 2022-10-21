import{e as p,f as m,r,o as i,c as g,a as o,u as l,i as f,d as e,w as P,b as n}from"./app.cb1cbdda.js";const v={__name:"pagination-code",setup(d){let a=p(2),s=p(10);const t=c=>{console.log("change --> ",c)};return m(()=>a.value,c=>{console.log("watch page number --> ",c)}),(c,u)=>{const h=r("u-pagination");return i(),g("div",null,[o(h,{total:l(s),currentPage:l(a),"onUpdate:currentPage":u[0]||(u[0]=_=>f(a)?a.value=_:a=_),onChange:t},null,8,["total","currentPage"])])}}},x=`<script setup>
import { ref, watch } from "vue";

let currentPage = ref(2);
let totalPage = ref(10);
const changePage = (n) => {
  console.log("change --> ", n);
};
watch(
  () => currentPage.value,
  (newV) => {
    console.log("watch page number --> ", newV);
  }
);
<\/script>

<template>
  <div>
    <u-pagination
      :total="totalPage"
      v-model:currentPage="currentPage"
      @change="changePage"
    ></u-pagination>
  </div>
</template>
`,w={class:"demo-section"},b={class:"demo-block"},C={__name:"pagination",setup(d){return(a,s)=>{const t=r("highlightjs");return i(),g("div",w,[e("div",b,[o(v)]),o(t,{class:"code-block",language:"javascript xml",code:l(x)},null,8,["code"])])}}},k=e("h1",{id:"message-\u6D88\u606F\u63D0\u793A",tabindex:"-1"},[n("Message \u6D88\u606F\u63D0\u793A "),e("a",{class:"header-anchor",href:"#message-\u6D88\u606F\u63D0\u793A","aria-hidden":"true"},"#")],-1),V=e("h2",{id:"\u57FA\u672C\u7528\u6CD5",tabindex:"-1"},[n("\u57FA\u672C\u7528\u6CD5 "),e("a",{class:"header-anchor",href:"#\u57FA\u672C\u7528\u6CD5","aria-hidden":"true"},"#")],-1),j=e("p",null,[e("code",null,"v-model:currentPage"),n(" \u7ED1\u5B9A\u5F53\u524D\u9875\uFF1B"),e("code",null,"total"),n(" \u662F\u603B\u9875\u6570\uFF1B"),e("code",null,"@change"),n(" \u76D1\u542C\u5206\u9875\u5668\u7684\u53D8\u5316\u3002")],-1),B=JSON.parse('{"title":"Message \u6D88\u606F\u63D0\u793A","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5","link":"#\u57FA\u672C\u7528\u6CD5","children":[]}],"relativePath":"component/pagination/index.md"}'),N={name:"component/pagination/index.md"},$=Object.assign(N,{setup(d){return(a,s)=>{const t=r("ClientOnly");return i(),g("div",null,[k,V,j,o(t,null,{default:P(()=>[o(C)]),_:1})])}}});export{B as __pageData,$ as default};
