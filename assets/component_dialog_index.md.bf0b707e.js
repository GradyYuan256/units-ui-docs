import{e as b,r as u,o as i,c as d,a as l,w as n,b as e,u as r,i as D,d as t,g as y}from"./app.cb1cbdda.js";const w=t("span",null,"\u6807\u9898 ",-1),U=t("p",null,[e("Hello, Welcome to "),t("i",null,"Units UI"),e("!")],-1),S=t("p",null,[e("\u6B22\u8FCE\u6765\u5230 "),t("i",null,"Units UI"),e("!")],-1),T={__name:"dialog-code",setup(g){let o=b(!1);const s=()=>{o.value=!o.value},a=()=>{s(),console.log("slot footer --> ok")},m=()=>{s(),console.log("slot footer --> cancel")},v=()=>{console.log("confirm"),setTimeout(()=>{s()},2e3)},k=()=>{console.log("cancel")},C=()=>{console.log("beforeClose")};let c=b(!1);const _=()=>{c.value=!c.value};return(j,p)=>{const h=u("u-button"),x=u("u-dialog");return i(),d("div",null,[l(h,{onClick:s},{default:n(()=>[e("\u6253\u5F00\u5BF9\u8BDD\u6846")]),_:1}),l(x,{title:"\u6CE8\u610F\u6807\u9898",width:"30vw",top:"20vh",maxHeight:"400px",visible:r(o),"onUpdate:visible":p[0]||(p[0]=f=>D(o)?o.value=f:o=f),fullscreen:r(c),closeOnClickMask:!0,showClose:!0,onOk:v,onCancel:k,onBeforeClose:C},{title:n(()=>[w,r(c)?(i(),d("span",{key:1,onClick:_}," [\u8FD8\u539F]")):(i(),d("span",{key:0,onClick:_}," [\u5168\u5C4F]"))]),content:n(()=>[U,S]),footer:n(()=>[l(h,{onClick:m},{default:n(()=>[e("\u53D6 \u6D88")]),_:1}),l(h,{onClick:a,type:"primary"},{default:n(()=>[e("\u786E \u5B9A")]),_:1})]),_:1},8,["visible","fullscreen"])])}}},B=`<script setup>
import { ref } from "vue";
import UButton from "../components/button/index.vue";
import UDialog from "../components/dialog/index.vue";

let visible = ref(false);
const toggle = () => {
  visible.value = !visible.value;
};

const ok = () => {
  toggle()
  console.log('slot footer --> ok');
};
const cancel = () => {
  toggle()
  console.log('slot footer --> cancel');
};

const confirm = () => {
  console.log('confirm');
  setTimeout(() => {
    toggle()
  }, 2000)
};
const cancelBtn = () => {
  console.log('cancel');
};
const close = () => {
  console.log('close');
};
const beforeClose = () => {
  console.log('beforeClose');
};
let fullscreen = ref(false)
const zoom = () => {
    fullscreen.value = !fullscreen.value
}
<\/script>
<template>
  <div>
    <u-button @click="toggle">\u6253\u5F00\u5BF9\u8BDD\u6846</u-button>
    <u-dialog
      title="\u6CE8\u610F\u6807\u9898"
      width="30vw"
      top="20vh"
      maxHeight="400px"
      v-model:visible="visible"
      :fullscreen="fullscreen"
      :closeOnClickMask="true"
      :showClose="true"
      @ok="confirm"
      @cancel="cancelBtn"
      @beforeClose="beforeClose"
    >
      <template v-slot:title>
        <span>\u6807\u9898 </span>
        <span @click="zoom" v-if="!fullscreen"> [\u5168\u5C4F]</span>
        <span @click="zoom" v-else> [\u8FD8\u539F]</span>
      </template>
      <template v-slot:content>
        <p>Hello, Welcome to <i>Units UI</i>!</p>
        <p>\u6B22\u8FCE\u6765\u5230 <i>Units UI</i>!</p>
      </template>
      <template v-slot:footer>
        <u-button @click="cancel">\u53D6 \u6D88</u-button>
        <u-button @click="ok" type="primary">\u786E \u5B9A</u-button>
      </template>
    </u-dialog>
  </div>
</template>
`,O={class:"demo-section"},I={class:"demo-block"},N={__name:"dialog",setup(g){return(o,s)=>{const a=u("highlightjs");return i(),d("div",O,[t("div",I,[l(T)]),l(a,{class:"code-block",language:"javascript xml",code:r(B)},null,8,["code"])])}}},V=t("h1",{id:"dialog-\u5BF9\u8BDD\u6846",tabindex:"-1"},[e("Dialog \u5BF9\u8BDD\u6846 "),t("a",{class:"header-anchor",href:"#dialog-\u5BF9\u8BDD\u6846","aria-hidden":"true"},"#")],-1),$=t("h2",{id:"\u57FA\u672C\u7528\u6CD5",tabindex:"-1"},[e("\u57FA\u672C\u7528\u6CD5 "),t("a",{class:"header-anchor",href:"#\u57FA\u672C\u7528\u6CD5","aria-hidden":"true"},"#")],-1),A=y('<h2 id="\u6587\u6863\u8BF4\u660E" tabindex="-1">\u6587\u6863\u8BF4\u660E <a class="header-anchor" href="#\u6587\u6863\u8BF4\u660E" aria-hidden="true">#</a></h2><h3 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-hidden="true">#</a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>v-model:visible</td><td>\u662F\u5426\u663E\u793A Dialog</td><td>boolean</td></tr><tr><td>title</td><td>Dialog \u7684\u6807\u9898\uFF0C\u4E5F\u53EF\u901A\u8FC7\u5177\u540D slot \u4F20\u5165</td><td>-</td></tr><tr><td>width</td><td>Dialog \u7684\u5BBD\u5EA6\uFF0C\u652F\u6301 px | % | vw</td><td>string</td></tr><tr><td>fullscreen</td><td>\u662F\u5426\u4E3A\u5168\u5C4F Dialog</td><td>boolean</td></tr><tr><td>top</td><td>Dialog CSS \u4E2D\u7684 top \u503C\uFF0C\u652F\u6301 px | % | vh</td><td>string</td></tr><tr><td>closeOnClickMask</td><td>\u662F\u5426\u53EF\u4EE5\u901A\u8FC7\u70B9\u51FB\u8499\u5C42\u5173\u95ED Dialog</td><td>boolean</td></tr><tr><td>maxHeight</td><td>Dialog \u6700\u5927\u9AD8\u5EA6\uFF0C\u652F\u6301 px | % | vh</td><td>string</td></tr><tr><td>showClose</td><td>\u662F\u5426\u663E\u793A Dialog \u5173\u95ED\u6309\u94AE</td><td>boolean</td></tr></tbody></table><h3 id="slot" tabindex="-1">Slot <a class="header-anchor" href="#slot" aria-hidden="true">#</a></h3><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>title</td><td>Dialog \u5934\u90E8\u6807\u9898\u533A\u7684\u5185\u5BB9</td></tr><tr><td>content</td><td>Dialog \u5185\u5BB9\u533A\u7684\u5185\u5BB9</td></tr><tr><td>footer</td><td>Dialog \u5E95\u90E8\u6309\u94AE\u7684\u5185\u5BB9</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>ok</td><td>Dialog \u70B9\u51FB\u786E\u8BA4\u6309\u94AE\u7684\u56DE\u8C03</td></tr><tr><td>cencel</td><td>Dialog \u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u7684\u56DE\u8C03</td></tr><tr><td>beforeClose</td><td>Dialog \u5173\u95ED\u524D\u7684\u56DE\u8C03</td></tr></tbody></table>',7),E=JSON.parse('{"title":"Dialog \u5BF9\u8BDD\u6846","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5","link":"#\u57FA\u672C\u7528\u6CD5","children":[]},{"level":2,"title":"\u6587\u6863\u8BF4\u660E","slug":"\u6587\u6863\u8BF4\u660E","link":"#\u6587\u6863\u8BF4\u660E","children":[{"level":3,"title":"Attributes","slug":"attributes","link":"#attributes","children":[]},{"level":3,"title":"Slot","slug":"slot","link":"#slot","children":[]},{"level":3,"title":"Events","slug":"events","link":"#events","children":[]}]}],"relativePath":"component/dialog/index.md"}'),H={name:"component/dialog/index.md"},M=Object.assign(H,{setup(g){return(o,s)=>{const a=u("ClientOnly");return i(),d("div",null,[V,$,l(a,null,{default:n(()=>[l(N)]),_:1}),A])}}});export{E as __pageData,M as default};
