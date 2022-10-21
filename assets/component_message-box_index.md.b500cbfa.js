import{h as u,r as l,o as a,c as i,a as e,w as d,b as s,d as o,u as m,g as p}from"./app.cb1cbdda.js";const g={__name:"formal-code",setup(r){const c=u(),n=()=>{c({confirmBtnText:"\u786E\u5B9A",title:"\u5F39\u6846\u63D0\u793A",enableHtml:!0,content:"\u8FD9\u662F<i>html</i>\u7247\u6BB5",closeOnClickMask:!1}).then(()=>{console.log("ok")}).catch(()=>{console.log("cancel")})};return(t,h)=>{const _=l("u-button");return a(),i("div",null,[e(_,{onClick:n},{default:d(()=>[s("\u547D\u4EE4\u5F0F\u8C03\u7528")]),_:1})])}}},f=`<script setup>
import {useMessageBox} from "units-ui";

const messageBox = useMessageBox()
const handleClick = () => {
    messageBox({
        confirmBtnText: '\u786E\u5B9A',
        title: '\u5F39\u6846\u63D0\u793A',
        enableHtml: true,
        content: '\u8FD9\u662F<i>html</i>\u7247\u6BB5',
        closeOnClickMask: false
    })
    .then(() => {
        console.log('ok');
    })
    .catch(() => {
        console.log('cancel');
    })
};
<\/script>

<template>
  <div>
    <u-button @click="handleClick">\u547D\u4EE4\u5F0F\u8C03\u7528</u-button>
  </div>
</template>
`,x=`<script setup>
import { useMessageBox } from "units-ui";

const messageBox = useMessageBox();
const handleClick = () => {
  messageBox
    .alert({
      confirmBtnText: "\u786E\u5B9A",
      cancelBtnText: "\u53D6\u6D88",
      title: "\u5F39\u6846\u63D0\u793A",
      content: "\u8D76\u7D27\u4F11\u606F\u7761\u89C9",
    })
    .then(() => {
      console.log("alert ok");
    })
    .catch(() => {
      console.log("alert cancel");
    });
};
<\/script>

<template>
  <div>
    <u-button @click="handleClick">alert</u-button>
  </div>
</template>
`,k=`<script setup>
import { useMessageBox } from "units-ui";

const messageBox = useMessageBox();
const handleClick = () => {
  messageBox
    .confirm({
      showCancelBtn: true,
      cancelBtnText: "\u53D6\u6D88",
      title: "\u5F39\u6846\u63D0\u793A",
      content: "\u8BF7\u4F11\u606F\u4E00\u4F1A\u513F",
    })
    .then(() => {
      console.log("confirm ok");
    })
    .catch(() => {
      console.log("confirm cancel");
    });
};
<\/script>

<template>
  <div>
    <u-button @click="handleClick">confirm</u-button>
  </div>
</template>
`,B={class:"demo-section"},b={class:"demo-block"},C={__name:"formal-page",setup(r){return(c,n)=>{const t=l("highlightjs");return a(),i("div",B,[o("div",b,[e(g)]),e(t,{class:"code-block",language:"javascript xml",code:m(f)},null,8,["code"])])}}},v={__name:"alert-code",setup(r){const c=u(),n=()=>{c.alert({confirmBtnText:"\u786E\u5B9A",cancelBtnText:"\u53D6\u6D88",title:"\u5F39\u6846\u63D0\u793A",content:"\u8D76\u7D27\u4F11\u606F\u7761\u89C9"}).then(()=>{console.log("alert ok")}).catch(()=>{console.log("alert cancel")})};return(t,h)=>{const _=l("u-button");return a(),i("div",null,[e(_,{onClick:n},{default:d(()=>[s("alert")]),_:1})])}}},T={class:"demo-section"},M={class:"demo-block"},$={__name:"alert-page",setup(r){return(c,n)=>{const t=l("highlightjs");return a(),i("div",T,[o("div",M,[e(v)]),e(t,{class:"code-block",language:"javascript xml",code:m(x)},null,8,["code"])])}}},j={__name:"confirm-code",setup(r){const c=u(),n=()=>{c.confirm({showCancelBtn:!0,cancelBtnText:"\u53D6\u6D88",title:"\u5F39\u6846\u63D0\u793A",content:"\u8BF7\u4F11\u606F\u4E00\u4F1A\u513F"}).then(()=>{console.log("confirm ok")}).catch(()=>{console.log("confirm cancel")})};return(t,h)=>{const _=l("u-button");return a(),i("div",null,[e(_,{onClick:n},{default:d(()=>[s("confirm")]),_:1})])}}},O={class:"demo-section"},N={class:"demo-block"},V={__name:"confirm-page",setup(r){return(c,n)=>{const t=l("highlightjs");return a(),i("div",O,[o("div",N,[e(j)]),e(t,{class:"code-block",language:"javascript xml",code:m(k)},null,8,["code"])])}}},w=p('<h1 id="message-\u6D88\u606F\u63D0\u793A" tabindex="-1">Message \u6D88\u606F\u63D0\u793A <a class="header-anchor" href="#message-\u6D88\u606F\u63D0\u793A" aria-hidden="true">#</a></h1><h2 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h2><p><code>title</code> \u4E3A\u5F39\u6846\u6807\u9898\uFF1B<code>content</code> \u4E3A\u5F39\u6846\u5185\u5BB9\uFF1B<code>enableHtml</code> \u662F\u5426\u652F\u6301 <code>html</code> \u7247\u6BB5\uFF1B<code>showCancelBtn</code> \u5C55\u793A\u6216\u9690\u85CF\u53D6\u6D88\u6309\u94AE\uFF0C\u9ED8\u8BA4\u9690\u85CF\uFF1B<code>confirmBtnText</code> \u4E3A\u786E\u8BA4\u6309\u94AE\u6587\u672C\uFF1B<code>cancelBtnText</code> \u4E3A\u53D6\u6D88\u6309\u94AE\u6587\u672C\uFF1B<code>closeOnClickMask</code> \u4E3A\u662F\u5426\u901A\u8FC7\u70B9\u51FB\u8499\u5C42\u5173\u95ED\u5F39\u6846\u3002</p>',3),A=o("h2",{id:"alert-\u6D88\u606F\u5F39\u6846",tabindex:"-1"},[s("Alert \u6D88\u606F\u5F39\u6846 "),o("a",{class:"header-anchor",href:"#alert-\u6D88\u606F\u5F39\u6846","aria-hidden":"true"},"#")],-1),S=o("p",null,[s("\u53EF\u4EE5\u8FD9\u6837\u4F7F\u7528 "),o("code",null,"useMessage().alert(options)"),s("\u3002")],-1),H=o("h2",{id:"confirm-\u6D88\u606F\u5F39\u6846",tabindex:"-1"},[s("Confirm \u6D88\u606F\u5F39\u6846 "),o("a",{class:"header-anchor",href:"#confirm-\u6D88\u606F\u5F39\u6846","aria-hidden":"true"},"#")],-1),P=o("p",null,[s("\u4E5F\u53EF\u4EE5\u8FD9\u6837\u4F7F\u7528 "),o("code",null,"useMessage().confirm(options)"),s("\u3002")],-1),E=JSON.parse('{"title":"Message \u6D88\u606F\u63D0\u793A","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5","link":"#\u57FA\u672C\u7528\u6CD5","children":[]},{"level":2,"title":"Alert \u6D88\u606F\u5F39\u6846","slug":"alert-\u6D88\u606F\u5F39\u6846","link":"#alert-\u6D88\u606F\u5F39\u6846","children":[]},{"level":2,"title":"Confirm \u6D88\u606F\u5F39\u6846","slug":"confirm-\u6D88\u606F\u5F39\u6846","link":"#confirm-\u6D88\u606F\u5F39\u6846","children":[]}],"relativePath":"component/message-box/index.md"}'),y={name:"component/message-box/index.md"},I=Object.assign(y,{setup(r){return(c,n)=>{const t=l("ClientOnly");return a(),i("div",null,[w,e(t,null,{default:d(()=>[e(C)]),_:1}),A,S,e(t,null,{default:d(()=>[e($)]),_:1}),H,P,e(t,null,{default:d(()=>[e(V)]),_:1})])}}});export{E as __pageData,I as default};
