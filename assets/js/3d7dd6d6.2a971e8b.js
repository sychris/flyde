"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4281],{54852:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(49231);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=i,m=u["".concat(o,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(m,p(p({ref:t},s),{},{components:n})):r.createElement(m,p({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,p=new Array(a);p[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,p[1]=l;for(var c=2;c<a;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},95695:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(45675),i=(n(49231),n(54852));const a={id:"InputPin",title:"Interface: InputPin",sidebar_label:"InputPin",sidebar_position:0,custom_edit_url:null},p=void 0,l={unversionedId:"api-reference/interfaces/InputPin",id:"api-reference/interfaces/InputPin",title:"Interface: InputPin",description:"Hierarchy",source:"@site/docs/api-reference/interfaces/InputPin.md",sourceDirName:"api-reference/interfaces",slug:"/api-reference/interfaces/InputPin",permalink:"/docs/api-reference/interfaces/InputPin",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"InputPin",title:"Interface: InputPin",sidebar_label:"InputPin",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"InlineValuePart",permalink:"/docs/api-reference/interfaces/InlineValuePart"},next:{title:"InstanceViewData",permalink:"/docs/api-reference/interfaces/InstanceViewData"}},o={},c=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"defaultValue",id:"defaultvalue",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"description",id:"description",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"mode",id:"mode",level:3},{value:"Defined in",id:"defined-in-2",level:4}],s={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BasePinData"},(0,i.kt)("inlineCode",{parentName:"a"},"BasePinData"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"InputPin"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"defaultvalue"},"defaultValue"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"defaultValue"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/FlydeHQ/flyde/blob/0975600/core/src/part/part-pins.ts#L23"},"core/src/part/part-pins.ts:23")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"description"},"description"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"description"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BasePinData"},"BasePinData"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/BasePinData#description"},"description")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/FlydeHQ/flyde/blob/0975600/core/src/part/part-pins.ts#L18"},"core/src/part/part-pins.ts:18")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"mode"},"mode"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"mode"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/modules#inputmode"},(0,i.kt)("inlineCode",{parentName:"a"},"InputMode"))),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/FlydeHQ/flyde/blob/0975600/core/src/part/part-pins.ts#L22"},"core/src/part/part-pins.ts:22")))}d.isMDXComponent=!0}}]);