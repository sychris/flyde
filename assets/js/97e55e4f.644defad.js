"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7830],{54852:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(49231);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),f=s(n),u=i,m=f["".concat(o,".").concat(u)]||f[u]||d[u]||a;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=f;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},96807:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=n(45675),i=(n(49231),n(54852));const a={id:"PartInstanceConfig",title:"Interface: PartInstanceConfig",sidebar_label:"PartInstanceConfig",sidebar_position:0,custom_edit_url:null},l=void 0,p={unversionedId:"api-reference/interfaces/PartInstanceConfig",id:"api-reference/interfaces/PartInstanceConfig",title:"Interface: PartInstanceConfig",description:"Hierarchy",source:"@site/docs/api-reference/interfaces/PartInstanceConfig.md",sourceDirName:"api-reference/interfaces",slug:"/api-reference/interfaces/PartInstanceConfig",permalink:"/docs/api-reference/interfaces/PartInstanceConfig",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"PartInstanceConfig",title:"Interface: PartInstanceConfig",sidebar_label:"PartInstanceConfig",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"OutputPin",permalink:"/docs/api-reference/interfaces/OutputPin"},next:{title:"PartStyle",permalink:"/docs/api-reference/interfaces/PartStyle"}},o={},s=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"displayName",id:"displayname",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"inputConfig",id:"inputconfig",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"style",id:"style",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"visibleInputs",id:"visibleinputs",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"visibleOutputs",id:"visibleoutputs",level:3},{value:"Defined in",id:"defined-in-4",level:4}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"PartInstanceConfig"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/RefPartInstance"},(0,i.kt)("inlineCode",{parentName:"a"},"RefPartInstance"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/InlinePartInstance"},(0,i.kt)("inlineCode",{parentName:"a"},"InlinePartInstance"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"displayname"},"displayName"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"displayName"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/FlydeHQ/flyde/blob/0975600/core/src/part/part-instance.ts#L8"},"core/src/part/part-instance.ts:8")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"inputconfig"},"inputConfig"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"inputConfig"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/modules#inputpinsconfig"},(0,i.kt)("inlineCode",{parentName:"a"},"InputPinsConfig"))),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/FlydeHQ/flyde/blob/0975600/core/src/part/part-instance.ts#L5"},"core/src/part/part-instance.ts:5")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"style"},"style"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"style"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/interfaces/PartStyle"},(0,i.kt)("inlineCode",{parentName:"a"},"PartStyle"))),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/FlydeHQ/flyde/blob/0975600/core/src/part/part-instance.ts#L9"},"core/src/part/part-instance.ts:9")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"visibleinputs"},"visibleInputs"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"visibleInputs"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/FlydeHQ/flyde/blob/0975600/core/src/part/part-instance.ts#L6"},"core/src/part/part-instance.ts:6")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"visibleoutputs"},"visibleOutputs"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"visibleOutputs"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/FlydeHQ/flyde/blob/0975600/core/src/part/part-instance.ts#L7"},"core/src/part/part-instance.ts:7")))}d.isMDXComponent=!0}}]);