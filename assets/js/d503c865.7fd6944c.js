"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6252],{54852:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(49231);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=p(n),m=l,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:l,i[1]=r;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},20872:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>p});var o=n(45675),l=(n(49231),n(54852));const a={sidebar_position:1},i="Hello World with Flyde",r={unversionedId:"Tutorials/hello-world-with-flyde/index",id:"Tutorials/hello-world-with-flyde/index",title:"Hello World with Flyde",description:'This tutorial will guide you step-by-step into creating an "Hello world" program using Flyde. For simplicity, we will use vanilla JS. For TS support check any of the official examples.',source:"@site/docs/Tutorials/hello-world-with-flyde/index.md",sourceDirName:"Tutorials/hello-world-with-flyde",slug:"/Tutorials/hello-world-with-flyde/",permalink:"/docs/Tutorials/hello-world-with-flyde/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Tutorials/hello-world-with-flyde/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Terminology Reference",permalink:"/docs/terminology"},next:{title:"[ WIP ] Creating Custom Code Parts with Flyde",permalink:"/docs/Tutorials/code-parts/"}},s={},p=[{value:"What you&#39;ll need",id:"what-youll-need",level:2},{value:"Step 1: Create a new project",id:"step-1-create-a-new-project",level:2},{value:"Step 2: Code-based sanity checkpoint",id:"step-2-code-based-sanity-checkpoint",level:2},{value:"Step 3: Creating a visual Flyde flow",id:"step-3-creating-a-visual-flyde-flow",level:3},{value:"Quick intro the the visual flow, and terminology",id:"quick-intro-the-the-visual-flow-and-terminology",level:3},{value:"Step 4: Working with the flow editor",id:"step-4-working-with-the-flow-editor",level:2},{value:"Step 5: Running your flow from the code",id:"step-5-running-your-flow-from-the-code",level:3},{value:"Step 6: Passing arguments from code to the flow",id:"step-6-passing-arguments-from-code-to-the-flow",level:3}],u={toc:p};function d(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"hello-world-with-flyde"},"Hello World with Flyde"),(0,l.kt)("p",null,'This tutorial will guide you step-by-step into creating an "Hello world" program using Flyde. For simplicity, we will use vanilla JS. For TS support check any of the official examples.'),(0,l.kt)("p",null,"This is how the end result should look like:\n",(0,l.kt)("img",{alt:"./hello-world-result.gif",src:n(6639).Z,width:"1816",height:"1520"}),"\nResulting code can be in the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/FlydeHQ/flyde/tree/main/examples/hello-flyde"},"examples folder"),"."),(0,l.kt)("h2",{id:"what-youll-need"},"What you'll need"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js")," (LTS version recommended)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"VS Code")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=flyde.flyde-vscode"},"Flyde for VSCode"))),(0,l.kt)("h2",{id:"step-1-create-a-new-project"},"Step 1: Create a new project"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Navigate to projects favorite folder"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"mkdir hello-flyde && cd hello-flyde")," - create a new folder to host our future project"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"npm init --yes")," - initializes an empty npm project"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"npm install @flyde/runtime")," - install the runtime package that is responsible for loading and running Flyde flows"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"code .")," to open the project's folder using VSCode. If it's not working, check out ",(0,l.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/docs/editor/command-line#_code-is-not-recognized-as-an-internal-or-external-command"},"this article")," or just open the folder you've created using VSCode")),(0,l.kt)("h2",{id:"step-2-code-based-sanity-checkpoint"},"Step 2: Code-based sanity checkpoint"),(0,l.kt)("p",null,"To ensure everything is installed properly, paste the following into a new file named ",(0,l.kt)("inlineCode",{parentName:"p"},"index.js"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"const {loadFlow} = require('@flyde/runtime');\n\nconsole.log('Hello, world!');\n")),(0,l.kt)("p",null,"Then run ",(0,l.kt)("inlineCode",{parentName:"p"},"node index.js"),' in the terminal and make sure you\'re seeing the "Hello, world!" message.'),(0,l.kt)("h3",{id:"step-3-creating-a-visual-flyde-flow"},"Step 3: Creating a visual Flyde flow"),(0,l.kt)("p",null,"Now we're getting to the real deal, creating a visual flow! We're going to create a new visual flow that will be saved into a ",(0,l.kt)("inlineCode",{parentName:"p"},".flyde")," file in your working folder."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},'Right click on the VSCode\'s sidebar -> "Flyde: New Visual Flow"'),(0,l.kt)("li",{parentName:"ol"},'Name your flow "HelloFlyde" -> accept the file name "HelloFlyde.flyde'),(0,l.kt)("li",{parentName:"ol"},"You should now see a Flyde flow editor tab inside your IDE!")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:n(64817).Z,width:"2260",height:"1520"})),(0,l.kt)("h3",{id:"quick-intro-the-the-visual-flow-and-terminology"},"Quick intro the the visual flow, and terminology"),(0,l.kt)("p",null,"Before moving on, here's a quick intro to Flyde's terminology:",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"The flow board")," - it's the canvas where visual flows are edited. Components can be added to the board and connected among themselves or to the flow's main input or output pins",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"A component"),' - they are the equivalent of "functions" or even data in Flyde',(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Input pin"),' - Each component can have 0 or more custom input pins, and will always have the built in "Trigger" pin. Input pins are like arguments to functions. By default, whenever all arguments are satisfied, the part is triggered. To have more control on when it should trigger, the Trigger input pin can be used as a way to manually invoke the component',(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Output pin"),' - Each component can have 0 or more custom output pins, and will always have the built in "Error" pin (needs to be explicitly shown via right-clicking a component). Output pins are like return values of functions, but unlike regular functions, a component may have multiple output pins, and each one may trigger more than once',(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"A connection")," - a connection connects a component's output pin to another's input pin, creating our control flow and logic",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Main flow input/output pin")," - just like each component has it's inputs and outputs, so does the flow itself. Actually, a flow is just like any another component! Main inputs and outputs are the flow's API to the external world, while the components inside are it's implementation detail"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"board overview",src:n(29386).Z,width:"1132",height:"956"})),(0,l.kt)("h2",{id:"step-4-working-with-the-flow-editor"},"Step 4: Working with the flow editor"),(0,l.kt)("p",null,"Now it's time to do some changes! We're gonna remove the default placeholder content and replace it with an component that emits a string."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},'click on the "Your logic here!" part and press delete to remove it from the board'),(0,l.kt)("li",{parentName:"ol"},'right click the board and select "New value"'),(0,l.kt)("li",{parentName:"ol"},"Type in ",(0,l.kt)("inlineCode",{parentName:"li"},'"Hello, Flyde!"')," (make sure it's surrounded by quotes so it's a valid string) and click the \"save\" button"),(0,l.kt)("li",{parentName:"ol"},'Now connect the "r" output pin to the "result" flow\'s output pin by first clicking on the "r" pin and then on the result (or vice-versa)'),(0,l.kt)("li",{parentName:"ol"},"Don't forget to save (using regular VSCode controls)")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:n(78584).Z,width:"1934",height:"1264"})),(0,l.kt)("h3",{id:"step-5-running-your-flow-from-the-code"},"Step 5: Running your flow from the code"),(0,l.kt)("p",null,"Now we're going to connect the Flyde flow you just built to the JS code in ",(0,l.kt)("inlineCode",{parentName:"p"},"index.js"),". Using the ",(0,l.kt)("inlineCode",{parentName:"p"},"loadFlow")," function from ",(0,l.kt)("inlineCode",{parentName:"p"},"@flyde/runtime"),", we'll transform our visual flow into a regular function that will trigger it and log the result back to the console."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Open ",(0,l.kt)("inlineCode",{parentName:"li"},"index.js")),(0,l.kt)("li",{parentName:"ol"},"Paste the following code:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'const { loadFlow } = require("@flyde/runtime");\nconst executeFlow = loadFlow("HelloFlyde.flyde");\n\nconst { result } = executeFlow(); // executeFlow can also receive inputs, and other advanced configuration, more on that in the next steps\nresult.then(({ message }) => console.log(message));\n')),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"using your terminal (VSCode's embedded one works perfect for this case) run ",(0,l.kt)("inlineCode",{parentName:"li"},"node index.js")),(0,l.kt)("li",{parentName:"ol"},'You should see "Hello, Flyde!" in your console!')),(0,l.kt)("p",null,"Did you notice the visual feedback when it ran? Flyde's runtime connects to a socket-based debugger in the IDE to allow new ways of debugging and troubleshooting programs! You can also inspect the inputs and outputs to learn about the data that passed through them."),(0,l.kt)("h3",{id:"step-6-passing-arguments-from-code-to-the-flow"},"Step 6: Passing arguments from code to the flow"),(0,l.kt)("p",null,"Now we're gonna tweak our example to receive input from the JS code, as an example of how flows can not only integrate to the output but also the input.\nAlso, you'll see how \"inline value\" components can expose arguments that will turn into visual inputs."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},'Double click the "Hello, Flyde!" component to open up the inline value editor'),(0,l.kt)("li",{parentName:"ol"},"Type in ",(0,l.kt)("inlineCode",{parentName:"li"},"`Hello, ${inputs.name}!`"),". Node we're using the backtick to allow for ",(0,l.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals"},"JS template literals"),"."),(0,l.kt)("li",{parentName:"ol"},'You should now see a new input pin exposed, named "name". Any usage of the special ',(0,l.kt)("inlineCode",{parentName:"li"},"inputs")," object will expose new input pins that serve as arguments to our component. Cool, right?"),(0,l.kt)("li",{parentName:"ol"},'Now right click the board and click on "New input", call it name. This creates a new input for the flow we\'re editing'),(0,l.kt)("li",{parentName:"ol"},'connect the new input created to the "name" input of the our inline value component'),(0,l.kt)("li",{parentName:"ol"},"In ",(0,l.kt)("inlineCode",{parentName:"li"},"index.js"),", Add your name to the ",(0,l.kt)("inlineCode",{parentName:"li"},"executeFlow")," function as following:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"executeFlow({name: 'Your awesome name here'})\n    .result.then(({message}) => console.log(message))\n")),(0,l.kt)("ol",{start:7},(0,l.kt)("li",{parentName:"ol"},"In your terminal, run ",(0,l.kt)("inlineCode",{parentName:"li"},"node index.js")," to see the changes live!")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:n(71307).Z,width:"713",height:"502"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Congratulations! You've just finished the first Flyde tutorial \u2728")),(0,l.kt)("p",null,"Before moving on to the next tutorial, I highly recommend you to try tinkering with this example:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add another input to your message"),(0,l.kt)("li",{parentName:"ul"},'rename the "message" main output pin to say "greeting"'),(0,l.kt)("li",{parentName:"ul"},"add another output and the same value to it"),(0,l.kt)("li",{parentName:"ul"},"Mega bonus points: create a second flow and use it in your first one \ud83e\udd2f adding new parts is possible by double clicking the board and searching for a flow")),(0,l.kt)("hr",null),(0,l.kt)("p",null,"If you have any feedback or issue please open a ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/FlydeHQ/flyde/issues/new"},"Github issue")," or ping us on Discord."))}d.isMDXComponent=!0},6639:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/hello-world-final-result-e85a36b7c5314775465fbf724063b1ca.gif"},78584:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/hello-world-modification-56e250514895ab0bc18aaca3384f7e13.gif"},64817:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/hello-world-new-flow-350baf55d80d6be917641668168221d2.gif"},71307:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/hello-world-new-input-b7f4ca6f44ba869f5201e5665f831260.gif"},29386:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/hello-world-overview-67b2cba78276c116334f7c1b441c8463.png"}}]);