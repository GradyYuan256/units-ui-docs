import{e as x,f as v,r as k,o as _,c as m,a as c,w as s,b as a,u as l,i as p,d as h,g as f}from"./app.cb1cbdda.js";const g={__name:"formal-code",setup(b){const e=r=>{console.log("change",r)};let o=x(!0),d=x(!1),t=x(!0);return v(()=>o.value,(r,n)=>{console.log("watch",r,n)}),(r,n)=>{const u=k("u-checkbox");return _(),m("div",null,[c(u,{checked:l(o),"onUpdate:checked":[n[0]||(n[0]=i=>p(o)?o.value=i:o=i),e],label:"US"},{default:s(()=>[a("US")]),_:1},8,["checked"]),c(u,{checked:l(d),"onUpdate:checked":[n[1]||(n[1]=i=>p(d)?d.value=i:d=i),e],label:"ES"},{default:s(()=>[a("ES")]),_:1},8,["checked"]),c(u,{checked:l(t),"onUpdate:checked":n[2]||(n[2]=i=>p(t)?t.value=i:t=i),label:"RS"},{default:s(()=>[a("RS")]),_:1},8,["checked"]),c(u,{checked:l(t),"onUpdate:checked":n[3]||(n[3]=i=>p(t)?t.value=i:t=i),label:"RS",disabled:""},{default:s(()=>[a("RS")]),_:1},8,["checked"])])}}},S=`<script setup>
import { ref, watch } from "vue";
const handleChange = (value) => {
  console.log("change", value);
};
let checkedV1 = ref(true);
let checkedV2 = ref(false);
let checkedV3 = ref(true);
watch(() => checkedV1.value, (newV, oldV) => {
  console.log('watch', newV, oldV);
});
<\/script>
<template>
  <div>
    <u-checkbox v-model:checked="checkedV1" label="US" @update:checked="handleChange">US</u-checkbox>
    <u-checkbox v-model:checked="checkedV2" label="ES" @update:checked="handleChange">ES</u-checkbox>
    <u-checkbox v-model:checked="checkedV3" label="RS">RS</u-checkbox>
    <u-checkbox v-model:checked="checkedV3" label="RS" disabled>RS</u-checkbox>
  </div>
</template>
`,V=`<script setup>
import { ref, watch } from "vue";
const updateValue = (e) => {
  console.log("checkbox \u7EC4 change \u4E8B\u4EF6\uFF1A", e);
};

const updateChecked = (e) => {
  console.log("checkbox \u7EC4 checked \u4E8B\u4EF6\uFF1A", e);
};

const checkboxGroupValue = ref(['US', 'ES'])
watch(() => checkboxGroupValue.value, (newV, oldV) => {
  console.log('checkbox \u7EC4 watch \u4E8B\u4EF6\uFF1A', newV, oldV);
})
<\/script>
<template>
  <div>
    <u-checkbox-group v-model:value="checkboxGroupValue" name="country" @update:value="updateValue">
      <u-checkbox value="US" label="US" @update:checked="updateChecked"></u-checkbox>
      <u-checkbox value="ES" >ES</u-checkbox>
      <u-checkbox value="RS" disabled>ES</u-checkbox>
      <u-checkbox value="KS">KS</u-checkbox>
      <u-checkbox label="Null" @update:checked="updateChecked"></u-checkbox>
    </u-checkbox-group>
  </div>
</template>
`,C=`<script setup>
import { ref, watch } from "vue";
let partChecked = ref(false)
let indeterminate = ref(true)
<\/script>
<template>
  <div>
    <u-checkbox v-model:checked="partChecked" 
                :indeterminate="!partChecked && indeterminate" 
                name="part"
    >US</u-checkbox>
    <u-checkbox v-model:checked="partChecked" 
                :indeterminate="indeterminate" 
                name="part"
    >ES</u-checkbox>
    <u-checkbox v-model:checked="partChecked" 
                :indeterminate="!partChecked && indeterminate" 
                name="part"
                disabled 
    >RS</u-checkbox>
    <p></p>
    <span>\u64CD\u4F5C\uFF1A</span>
    <u-button :type="partChecked ? 'primary' : ''" 
              @click="partChecked = !partChecked"
    >ALL</u-button>
    <u-button :type="indeterminate ? 'primary' : ''" 
              @click="indeterminate = !indeterminate"
    >PART</u-button>
  </div>
</template>
`,U={class:"demo-section"},w={class:"demo-block"},E={__name:"formal-checkbox",setup(b){return(e,o)=>{const d=k("highlightjs");return _(),m("div",U,[h("div",w,[c(g)]),c(d,{class:"code-block",language:"javascript xml",code:l(S)},null,8,["code"])])}}},R={__name:"group-code",setup(b){const e=t=>{console.log("checkbox \u7EC4 change \u4E8B\u4EF6\uFF1A",t)},o=t=>{console.log("checkbox \u7EC4 checked \u4E8B\u4EF6\uFF1A",t)},d=x(["US","ES"]);return v(()=>d.value,(t,r)=>{console.log("checkbox \u7EC4 watch \u4E8B\u4EF6\uFF1A",t,r)}),(t,r)=>{const n=k("u-checkbox"),u=k("u-checkbox-group");return _(),m("div",null,[c(u,{value:d.value,"onUpdate:value":[r[0]||(r[0]=i=>d.value=i),e],name:"country"},{default:s(()=>[c(n,{value:"US",label:"US","onUpdate:checked":o}),c(n,{value:"ES"},{default:s(()=>[a("ES")]),_:1}),c(n,{value:"RS",disabled:""},{default:s(()=>[a("ES")]),_:1}),c(n,{value:"KS"},{default:s(()=>[a("KS")]),_:1}),c(n,{label:"Null","onUpdate:checked":o})]),_:1},8,["value"])])}}},y={class:"demo-section"},j={class:"demo-block"},T={__name:"group-checkbox",setup(b){return(e,o)=>{const d=k("highlightjs");return _(),m("div",y,[h("div",j,[c(R)]),c(d,{class:"code-block",language:"javascript xml",code:l(V)},null,8,["code"])])}}},N=h("p",null,null,-1),$=h("span",null,"\u64CD\u4F5C\uFF1A",-1),A={__name:"part-code",setup(b){let e=x(!1),o=x(!0);return(d,t)=>{const r=k("u-checkbox"),n=k("u-button");return _(),m("div",null,[c(r,{checked:l(e),"onUpdate:checked":t[0]||(t[0]=u=>p(e)?e.value=u:e=u),indeterminate:!l(e)&&l(o),name:"part"},{default:s(()=>[a("US")]),_:1},8,["checked","indeterminate"]),c(r,{checked:l(e),"onUpdate:checked":t[1]||(t[1]=u=>p(e)?e.value=u:e=u),indeterminate:l(o),name:"part"},{default:s(()=>[a("ES")]),_:1},8,["checked","indeterminate"]),c(r,{checked:l(e),"onUpdate:checked":t[2]||(t[2]=u=>p(e)?e.value=u:e=u),indeterminate:!l(e)&&l(o),name:"part",disabled:""},{default:s(()=>[a("RS")]),_:1},8,["checked","indeterminate"]),N,$,c(n,{type:l(e)?"primary":"",onClick:t[3]||(t[3]=u=>p(e)?e.value=!l(e):e=!l(e))},{default:s(()=>[a("ALL")]),_:1},8,["type"]),c(n,{type:l(o)?"primary":"",onClick:t[4]||(t[4]=u=>p(o)?o.value=!l(o):o=!l(o))},{default:s(()=>[a("PART")]),_:1},8,["type"])])}}},P={class:"demo-section"},G={class:"demo-block"},K={__name:"part-checkbox",setup(b){return(e,o)=>{const d=k("highlightjs");return _(),m("div",P,[h("div",G,[c(A)]),c(d,{class:"code-block",language:"javascript xml",code:l(C)},null,8,["code"])])}}},L=f("",3),O=h("h2",{id:"\u591A\u9009\u6846\u7EC4",tabindex:"-1"},[a("\u591A\u9009\u6846\u7EC4 "),h("a",{class:"header-anchor",href:"#\u591A\u9009\u6846\u7EC4","aria-hidden":"true"},"#")],-1),B=h("p",null,[a("\u4F7F\u7528 "),h("code",null,"u-checkbox-group"),a(" \u5305\u88F9 "),h("code",null,"u-checkbox"),a("\uFF0C"),h("code",null,"name"),a(" \u533A\u5206\u591A\u9009\u6846\u7EC4\u5408\uFF0C"),h("code",null,"v-model:value"),a(" \u7ED1\u5B9A\u503C\u3002")],-1),D=h("h2",{id:"\u534A\u9009\u72B6\u6001",tabindex:"-1"},[a("\u534A\u9009\u72B6\u6001 "),h("a",{class:"header-anchor",href:"#\u534A\u9009\u72B6\u6001","aria-hidden":"true"},"#")],-1),I=h("p",null,[a("\u9002\u7528\u4E8E "),h("code",null,"tree"),a(" \u7EC4\u4EF6\uFF0C\u4F7F\u7528 "),h("code",null,"indeterminate"),a(" \u5B57\u6BB5\u63A7\u5236\u72B6\u6001\u3002")],-1),z=JSON.parse('{"title":"Checkbox \u591A\u9009\u6846","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5","link":"#\u57FA\u672C\u7528\u6CD5","children":[]},{"level":2,"title":"\u591A\u9009\u6846\u7EC4","slug":"\u591A\u9009\u6846\u7EC4","link":"#\u591A\u9009\u6846\u7EC4","children":[]},{"level":2,"title":"\u534A\u9009\u72B6\u6001","slug":"\u534A\u9009\u72B6\u6001","link":"#\u534A\u9009\u72B6\u6001","children":[]}],"relativePath":"component/checkbox/index.md"}'),J={name:"component/checkbox/index.md"},F=Object.assign(J,{setup(b){return(e,o)=>{const d=k("ClientOnly");return _(),m("div",null,[L,c(d,null,{default:s(()=>[c(E)]),_:1}),O,B,c(d,null,{default:s(()=>[c(T)]),_:1}),D,I,c(d,null,{default:s(()=>[c(K)]),_:1})])}}});export{z as __pageData,F as default};
