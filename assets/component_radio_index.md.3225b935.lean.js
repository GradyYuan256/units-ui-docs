import{e as p,r,o as s,c as _,a as e,w as o,b as a,d,u as m,g as b}from"./app.cb1cbdda.js";const g=d("span",null,"China",-1),f={__name:"formal-code",setup(h){const l=p("US"),i=t=>{console.log("change",t.target.value)};return(t,n)=>{const u=r("u-radio");return s(),_("div",null,[e(u,{value:l.value,"onUpdate:value":n[0]||(n[0]=c=>l.value=c),onChange:i,label:"China",name:"country"},{default:o(()=>[g]),_:1},8,["value"]),e(u,{value:l.value,"onUpdate:value":n[1]||(n[1]=c=>l.value=c),label:"US",name:"country"},{default:o(()=>[a("US")]),_:1},8,["value"]),e(u,{value:l.value,"onUpdate:value":n[2]||(n[2]=c=>l.value=c),label:"RS",name:"country"},{default:o(()=>[a("RS")]),_:1},8,["value"]),e(u,{disabled:"",checked:l.value=="RS",label:"JP",name:"country"},{default:o(()=>[a("JP")]),_:1},8,["checked"])])}}},S=`<script setup>
import { ref } from 'vue'
const checkedValue = ref('US')
const handleChange = (e) => {
  console.log('change', e.target.value)
}
<\/script>
<template>
  <div>
    <u-radio
      v-model:value="checkedValue"
      @change="handleChange"
      label="China"
      name="country"
    >
      <span>China</span>
    </u-radio>
    <u-radio v-model:value="checkedValue" label="US" name="country">US</u-radio>
    <u-radio v-model:value="checkedValue" label="RS" name="country">RS</u-radio>
    <u-radio disabled :checked="checkedValue=='RS'" label="JP" name="country">JP</u-radio>
  </div>
</template>
`,k=`<script setup>
import { ref } from "vue";
const checkedValue = ref("US");
const handleChange = (e) => {
  console.log("change", e.target.value);
};
<\/script>
<template>
  <div>
    <u-radio-group v-model:value="checkedValue" name="downtown">
      <u-radio @change="handleChange" label="China">China</u-radio>
      <u-radio label="US">US</u-radio>
      <u-radio label="RS">RS</u-radio>
      <u-radio label="ES" :checked="checkedValue == 'RS'" disabled>ES</u-radio>
    </u-radio-group>
  </div>
</template>
`,C=`<script setup>
import { ref } from "vue";
const checkedValue = ref("sleep");
<\/script>
<template>
  <div>
    <u-radio-group v-model:value="checkedValue" name="life">
      <u-radio-button label="eat">\u5403\u996D</u-radio-button>
      <u-radio-button label="sleep">\u7761\u89C9</u-radio-button>
      <u-radio-button label="water">\u6D17\u8138</u-radio-button>
      <u-radio-button disabled>\u6253\u8C46\u8C46</u-radio-button>
    </u-radio-group>
    <u-radio-group v-model:value="checkedValue" name="disabled-life">
      <u-radio-button label="eat" disabled>\u5403\u996D</u-radio-button>
      <u-radio-button label="sleep" disabled>\u7761\u89C9</u-radio-button>
      <u-radio-button label="water" disabled>\u6D17\u8138</u-radio-button>
    </u-radio-group>
  </div>
</template>
`,V={class:"demo-section"},x={class:"demo-block"},U={__name:"formal-radio",setup(h){return(l,i)=>{const t=r("highlightjs");return s(),_("div",V,[d("div",x,[e(f)]),e(t,{class:"code-block",language:"javascript xml",code:m(S)},null,8,["code"])])}}},R={__name:"group-code",setup(h){const l=p("US"),i=t=>{console.log("change",t.target.value)};return(t,n)=>{const u=r("u-radio"),c=r("u-radio-group");return s(),_("div",null,[e(c,{value:l.value,"onUpdate:value":n[0]||(n[0]=v=>l.value=v),name:"downtown"},{default:o(()=>[e(u,{onChange:i,label:"China"},{default:o(()=>[a("China")]),_:1}),e(u,{label:"US"},{default:o(()=>[a("US")]),_:1}),e(u,{label:"RS"},{default:o(()=>[a("RS")]),_:1}),e(u,{label:"ES",checked:l.value=="RS",disabled:""},{default:o(()=>[a("ES")]),_:1},8,["checked"])]),_:1},8,["value"])])}}},$={class:"demo-section"},j={class:"demo-block"},w={__name:"group-radio",setup(h){return(l,i)=>{const t=r("highlightjs");return s(),_("div",$,[d("div",j,[e(R)]),e(t,{class:"code-block",language:"javascript xml",code:m(k)},null,8,["code"])])}}},y={__name:"button-radio-code",setup(h){const l=p("sleep");return(i,t)=>{const n=r("u-radio-button"),u=r("u-radio-group");return s(),_("div",null,[e(u,{value:l.value,"onUpdate:value":t[0]||(t[0]=c=>l.value=c),name:"life"},{default:o(()=>[e(n,{label:"eat"},{default:o(()=>[a("\u5403\u996D")]),_:1}),e(n,{label:"sleep"},{default:o(()=>[a("\u7761\u89C9")]),_:1}),e(n,{label:"water"},{default:o(()=>[a("\u6D17\u8138")]),_:1}),e(n,{disabled:""},{default:o(()=>[a("\u6253\u8C46\u8C46")]),_:1})]),_:1},8,["value"]),e(u,{value:l.value,"onUpdate:value":t[1]||(t[1]=c=>l.value=c),name:"life1"},{default:o(()=>[e(n,{label:"eat",disabled:""},{default:o(()=>[a("\u5403\u996D")]),_:1}),e(n,{label:"sleep",disabled:""},{default:o(()=>[a("\u7761\u89C9")]),_:1}),e(n,{label:"water",disabled:""},{default:o(()=>[a("\u6D17\u8138")]),_:1})]),_:1},8,["value"])])}}},P={class:"demo-section"},T={class:"demo-block"},E={__name:"button-radio",setup(h){return(l,i)=>{const t=r("highlightjs");return s(),_("div",P,[d("div",T,[e(y)]),e(t,{class:"code-block",language:"javascript xml",code:m(C)},null,8,["code"])])}}},N=b("",3),J=d("h2",{id:"\u5355\u9009\u6846\u7EC4\u5408",tabindex:"-1"},[a("\u5355\u9009\u6846\u7EC4\u5408 "),d("a",{class:"header-anchor",href:"#\u5355\u9009\u6846\u7EC4\u5408","aria-hidden":"true"},"#")],-1),O=d("p",null,[a("\u4F7F\u7528 "),d("code",null,"u-radio-group"),a(" \u5305\u88F9 "),d("code",null,"u-radio"),a("\uFF0C"),d("code",null,"name"),a(" \u533A\u5206\u5355\u9009\u6846\u7EC4\u5408\uFF0C"),d("code",null,"v-model:value"),a(" \u7ED1\u5B9A\u503C\u3002")],-1),A=d("h2",{id:"\u5355\u9009\u6846\u6309\u94AE\u7EC4",tabindex:"-1"},[a("\u5355\u9009\u6846\u6309\u94AE\u7EC4 "),d("a",{class:"header-anchor",href:"#\u5355\u9009\u6846\u6309\u94AE\u7EC4","aria-hidden":"true"},"#")],-1),B=d("p",null,[a("\u4F7F\u7528 "),d("code",null,"u-radio-group"),a(" \u5305\u88F9 "),d("code",null,"u-radio-button"),a("\uFF0C"),d("code",null,"name"),a(" \u533A\u5206\u5355\u9009\u6846\u7EC4\u5408\uFF0C"),d("code",null,"v-model:value"),a(" \u7ED1\u5B9A\u503C\u3002")],-1),q=JSON.parse('{"title":"Radio \u5355\u9009\u6846","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5","link":"#\u57FA\u672C\u7528\u6CD5","children":[]},{"level":2,"title":"\u5355\u9009\u6846\u7EC4\u5408","slug":"\u5355\u9009\u6846\u7EC4\u5408","link":"#\u5355\u9009\u6846\u7EC4\u5408","children":[]},{"level":2,"title":"\u5355\u9009\u6846\u6309\u94AE\u7EC4","slug":"\u5355\u9009\u6846\u6309\u94AE\u7EC4","link":"#\u5355\u9009\u6846\u6309\u94AE\u7EC4","children":[]}],"relativePath":"component/radio/index.md"}'),D={name:"component/radio/index.md"},z=Object.assign(D,{setup(h){return(l,i)=>{const t=r("ClientOnly");return s(),_("div",null,[N,e(t,null,{default:o(()=>[e(U)]),_:1}),J,O,e(t,null,{default:o(()=>[e(w)]),_:1}),A,B,e(t,null,{default:o(()=>[e(E)]),_:1})])}}});export{q as __pageData,z as default};
