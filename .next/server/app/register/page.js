(()=>{var e={};e.id=11,e.ids=[11],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},613:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>d,pages:()=>u,routeModule:()=>m,tree:()=>c}),r(9775),r(8295),r(5866);var s=r(3191),a=r(8716),i=r(7922),n=r.n(i),o=r(5231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let c=["",{children:["register",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,9775)),"C:\\Users\\akaza\\OneDrive\\Рабочий стол\\nfactorial\\lectures\\socket\\client\\src\\app\\register\\page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,8295)),"C:\\Users\\akaza\\OneDrive\\Рабочий стол\\nfactorial\\lectures\\socket\\client\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["C:\\Users\\akaza\\OneDrive\\Рабочий стол\\nfactorial\\lectures\\socket\\client\\src\\app\\register\\page.js"],d="/register/page",p={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/register/page",pathname:"/register",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},1078:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},4613:()=>{},4647:(e,t,r)=>{Promise.resolve().then(r.bind(r,6477))},6477:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var s=r(326),a=r(434),i=r(7577),n=r(5872),o=r(5047);let l=()=>{let e=(0,o.useRouter)(),[t,r]=(0,i.useState)({username:"",password:"",email:""}),l=async()=>{let r=await n.e.register(t.username,t.password,t.email);if(r&&201===r.status){let r=await n.e.login(t.username,t.password,t.email);localStorage.setItem("access",r.data.accessToken),e.push("/chat")}};return s.jsx("div",{children:s.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:(0,s.jsxs)("form",{onClick:e=>e.preventDefault(),className:"w-full max-w-md bg-white p-8 shadow-md rounded-md",children:[s.jsx("h2",{className:"text-2xl font-bold mb-4 text-center",children:"Sign up to Open Chat"}),s.jsx("label",{htmlFor:"username",className:"block text-lg mb-2",children:"Username"}),s.jsx("input",{type:"text",minLength:6,value:t.username,onChange:e=>r({...t,username:e.target.value}),name:"username",id:"username",className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"}),s.jsx("label",{htmlFor:"email",className:"block text-lg mb-2",children:"Password"}),s.jsx("input",{type:"password",value:t.password,onChange:e=>r({...t,password:e.target.value}),minLength:6,name:"password",id:"password",className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"}),s.jsx("label",{htmlFor:"email",className:"block text-lg mb-2",children:"Email"}),s.jsx("input",{type:"text",minLength:6,value:t.email,onChange:e=>r({...t,email:e.target.value}),name:"email",id:"email",className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"}),s.jsx("button",{onClick:l,className:"w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600",children:"Sign in"}),s.jsx("p",{className:"text-center mt-4 font-sm",children:s.jsx(a.default,{href:"/",children:"Есть уже аккаунт? Пройди авторизацию"})})]})})})}},5872:(e,t,r)=>{"use strict";r.d(t,{e:()=>a});var s=r(4099);class a{static async login(e,t,r){try{return await s.Z.post("http://localhost:3000/api/v1/login",{username:e,password:t,email:r})}catch(e){console.error("Error during login request:",e)}}static async getUser(){return await s.Z.get("http://localhost:3000/user",{headers:{Authorization:`Bearer ${localStorage.getItem("access")}`}})}static async register(e,t,r){try{return await s.Z.post("http://localhost:3000/api/v1/register",{username:e,password:t,email:r})}catch(e){console.error("Error during register request:",e)}}}},8295:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o,metadata:()=>n});var s=r(9510),a=r(1723),i=r.n(a);r(5023);let n={title:"Create Next App",description:"Generated by create next app"};function o({children:e}){return s.jsx("html",{lang:"en",children:s.jsx("body",{className:i().className,children:e})})}},9775:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>n,__esModule:()=>i,default:()=>o});var s=r(8570);let a=(0,s.createProxy)(String.raw`C:\Users\akaza\OneDrive\Рабочий стол\nfactorial\lectures\socket\client\src\app\register\page.js`),{__esModule:i,$$typeof:n}=a;a.default;let o=(0,s.createProxy)(String.raw`C:\Users\akaza\OneDrive\Рабочий стол\nfactorial\lectures\socket\client\src\app\register\page.js#default`)},3881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(6621);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[948,462,971,434],()=>r(613));module.exports=s})();