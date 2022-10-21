import{e as h,r as a,o as i,c as u,a as e,w as c,b as l,j as C,d as n,u as f,g as v}from"./app.cb1cbdda.js";const b={__name:"formal-code",setup(d){let o=h("\u8BF7\u4F11\u606F\u4E00\u4F1A\u513F");const s=C(),t=()=>{s({message:o.value,type:"error",onClose:()=>{console.log("close message")}})},g=()=>{s({message:"<strong>\u8FD9\u662F <i>HTML</i> \u7247\u6BB5</strong>",type:"success",enableHtml:!0})},_=()=>{s({message:o.value,type:"info",autoClose:!1,onClose:()=>{console.log("close message")}})},p=()=>{s({message:o.value,autoClose:!1,customClass:"msg-custom",onClose:()=>{console.log("close custom class message")}})};return(k,r)=>{const m=a("u-button");return i(),u("div",null,[e(m,{onClick:t},{default:c(()=>[l("\u547D\u4EE4\u5F0F\u8C03\u7528")]),_:1}),e(m,{onClick:g},{default:c(()=>[l("\u652F\u6301 HTML")]),_:1}),e(m,{onClick:_},{default:c(()=>[l("\u975E\u81EA\u52A8\u5173\u95ED")]),_:1}),e(m,{onClick:p},{default:c(()=>[l("\u81EA\u5B9A\u4E49\u6837\u5F0F")]),_:1})])}}},y=`<script setup>
import { ref } from "vue";
import { useMessage } from "units-ui";

let message = ref("\u8BF7\u4F11\u606F\u4E00\u4F1A\u513F");
const msg = useMessage();
const handleClick1 = () => {
  msg({
    message: message.value,
    type: "error",
    onClose: () => {
      console.log("close message");
    },
  });
};

const handleClick2 = () => {
  msg({
    message: "<strong>\u8FD9\u662F <i>HTML</i> \u7247\u6BB5</strong>",
    type: "success",
    enableHtml: true,
  });
};

const handleClick3 = () => {
  msg({
    message: message.value,
    type: "info",
    autoClose: false,
    onClose: () => {
      console.log("close message");
    },
  });
};

const handleClick4 = () => {
  msg({
    message: message.value,
    autoClose: false,
    customClass: "msg-custom",
    onClose: () => {
      console.log("close custom class message");
    },
  });
};
<\/script>

<template>
  <div>
    <u-button @click="handleClick1">\u547D\u4EE4\u5F0F\u8C03\u7528</u-button>
    <u-button @click="handleClick2">\u652F\u6301 HTML</u-button>
    <u-button @click="handleClick3">\u975E\u81EA\u52A8\u5173\u95ED</u-button>
    <u-button @click="handleClick4">\u81EA\u5B9A\u4E49\u6837\u5F0F</u-button>
  </div>
</template>

<style>
.msg-custom {
  color: white;
  border-color: red;
  background-color: red;
}
</style>
`,x=`<script setup>
import { ref } from "vue";
import {useMessage} from "units-ui";

let message = ref("\u8BF7\u4F11\u606F\u4E00\u4F1A\u513F");
const msg = useMessage()
const handleClick1 = () => {
  msg({
    message: message.value,
    type: "success",
    position: "left",
  });
};
const handleClick2 = () => {
  msg({
    message: message.value,
    type: "warning",
    position: "center",
  });
};
const handleClick3 = () => {
  msg({
    message: message.value,
    type: "info",
    position: "right",
    onClose: () => {
      console.log("close right message");
    },
  });
};
<\/script>
<template>
  <div>
    <u-button @click="handleClick1">\u5DE6\u8FB9</u-button>
    <u-button @click="handleClick2">\u4E0A\u9762\u7684\u4E2D\u95F4</u-button>
    <u-button @click="handleClick3">\u53F3\u8FB9</u-button>
  </div>
</template>
`,M={class:"demo-section"},T={class:"demo-block"},j={__name:"formal-page",setup(d){return(o,s)=>{const t=a("highlightjs");return i(),u("div",M,[n("div",T,[e(b)]),e(t,{class:"code-block",language:"javascript xml",code:f(y)},null,8,["code"])])}}},H={__name:"position-code",setup(d){let o=h("\u8BF7\u4F11\u606F\u4E00\u4F1A\u513F");const s=C(),t=()=>{s({message:o.value,type:"success",position:"left"})},g=()=>{s({message:o.value,type:"warning",position:"center"})},_=()=>{s({message:o.value,type:"info",position:"right",onClose:()=>{console.log("close right message")}})};return(p,k)=>{const r=a("u-button");return i(),u("div",null,[e(r,{onClick:t},{default:c(()=>[l("\u5DE6\u8FB9")]),_:1}),e(r,{onClick:g},{default:c(()=>[l("\u4E0A\u9762\u7684\u4E2D\u95F4")]),_:1}),e(r,{onClick:_},{default:c(()=>[l("\u53F3\u8FB9")]),_:1})])}}},$={class:"demo-section"},w={class:"demo-block"},N={__name:"position-page",setup(d){return(o,s)=>{const t=a("highlightjs");return i(),u("div",$,[n("div",w,[e(H)]),e(t,{class:"code-block",language:"javascript xml",code:f(x)},null,8,["code"])])}}},V=v('<h1 id="message-\u6D88\u606F\u63D0\u793A" tabindex="-1">Message \u6D88\u606F\u63D0\u793A <a class="header-anchor" href="#message-\u6D88\u606F\u63D0\u793A" aria-hidden="true">#</a></h1><h2 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h2><p>\u901A\u8FC7 <code>type</code> \u8BBE\u7F6E\u4E0D\u540C\u7684\u4E3B\u9898\uFF0C\u5BF9\u5E94\u7684\u503C\u6709 <code>primary | info | success | warning | error</code>\uFF1B<code>message</code> \u4E3A\u6D88\u606F\u5185\u5BB9\uFF1B<code>enableHtml</code> \u5141\u8BB8 <code>message</code> \u4E3A <code>html</code> \u7247\u6BB5\uFF1B<code>autoClose</code> \u5B57\u6BB5\u4E3A\u662F\u5426\u81EA\u52A8\u5173\u95ED\uFF1B<code>customClass</code> \u4E3A\u81EA\u5B9A\u4E49\u7C7B\u540D\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E0D\u4E00\u6837\u7684\u6837\u5F0F\uFF1B<code>onClose</code> \u76D1\u542C\u5173\u95ED\u65F6\u7684\u56DE\u8C03\u51FD\u6570\u3002</p>',3),S=n("h2",{id:"\u4E0D\u540C\u4F4D\u7F6E",tabindex:"-1"},[l("\u4E0D\u540C\u4F4D\u7F6E "),n("a",{class:"header-anchor",href:"#\u4E0D\u540C\u4F4D\u7F6E","aria-hidden":"true"},"#")],-1),L=n("p",null,[n("code",null,"position"),l(" \u6709\u4E09\u79CD\u503C "),n("code",null,"left | center | right"),l("\u3002")],-1),B=JSON.parse('{"title":"Message \u6D88\u606F\u63D0\u793A","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5","link":"#\u57FA\u672C\u7528\u6CD5","children":[]},{"level":2,"title":"\u4E0D\u540C\u4F4D\u7F6E","slug":"\u4E0D\u540C\u4F4D\u7F6E","link":"#\u4E0D\u540C\u4F4D\u7F6E","children":[]}],"relativePath":"component/message/index.md"}'),O={name:"component/message/index.md"},P=Object.assign(O,{setup(d){return(o,s)=>{const t=a("ClientOnly");return i(),u("div",null,[V,e(t,null,{default:c(()=>[e(j)]),_:1}),S,L,e(t,null,{default:c(()=>[e(N)]),_:1})])}}});export{B as __pageData,P as default};
