import{e as u,r as n,o as c,c as l,a as e,w as s,b as d,k as m,d as h,u as p,g}from"./app.cb1cbdda.js";const f={__name:"toast-code",setup(i){let a=u("\u8BF7\u4F11\u606F\u4E00\u4F1A\u513F");const o=m(),t=()=>{o({message:a.value,duration:3e3})},_=()=>{o({message:'<span style="color: gold;"><i>hello</i></span>',type:"warning",enableHtml:!0})};return(y,N)=>{const r=n("u-button");return c(),l("div",null,[e(r,{onClick:t},{default:s(()=>[d("\u547D\u4EE4\u5F0F\u8C03\u7528 toast")]),_:1}),e(r,{onClick:_},{default:s(()=>[d("\u652F\u6301\u4F20\u5165 html")]),_:1})])}}},k=`<script setup>
import { ref } from "vue";
import { useToast } from "units-ui";

let message = ref("\u8BF7\u4F11\u606F\u4E00\u4F1A\u513F");
const toast = useToast()
const handleClick1 = () => {
  toast({
    message: message.value,
    duration: 3000,
  });
};

const handleClick2 = () => {
  toast({
    message: '<span style="color: gold;"><i>hello</i></span>',
    type: 'warning',
    enableHtml: true,
  });
};
<\/script>
<template>
  <div>
    <u-button @click="handleClick1">\u547D\u4EE4\u5F0F\u8C03\u7528 toast</u-button>
    <u-button @click="handleClick2">\u652F\u6301\u4F20\u5165 html</u-button>
  </div>
</template>
`,b={class:"demo-section"},C={class:"demo-block"},v={__name:"toast",setup(i){return(a,o)=>{const t=n("highlightjs");return c(),l("div",b,[h("div",C,[e(f)]),e(t,{class:"code-block",language:"javascript xml",code:p(k)},null,8,["code"])])}}},T=g("",3),w=JSON.parse('{"title":"Toast \u63D0\u793A","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5","link":"#\u57FA\u672C\u7528\u6CD5","children":[]}],"relativePath":"component/toast/index.md"}'),x={name:"component/toast/index.md"},S=Object.assign(x,{setup(i){return(a,o)=>{const t=n("ClientOnly");return c(),l("div",null,[T,e(t,null,{default:s(()=>[e(v)]),_:1})])}}});export{w as __pageData,S as default};
