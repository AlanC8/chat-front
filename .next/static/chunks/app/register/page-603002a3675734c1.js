(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[11],{9608:function(e,t,r){Promise.resolve().then(r.bind(r,3813))},3813:function(e,t,r){"use strict";r.r(t);var a=r(7437),s=r(7138),n=r(2265),l=r(5428),o=r(6463);t.default=()=>{let e=(0,o.useRouter)(),[t,r]=(0,n.useState)({username:"",password:"",email:""}),u=async()=>{let r=await l.e.register(t.username,t.password,t.email);if(r&&201===r.status){let r=await l.e.login(t.username,t.password,t.email);localStorage.setItem("access",r.data.accessToken),e.push("/chat")}};return(0,a.jsx)("div",{children:(0,a.jsx)("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:(0,a.jsxs)("form",{onClick:e=>e.preventDefault(),className:"w-full max-w-md bg-white p-8 shadow-md rounded-md",children:[(0,a.jsx)("h2",{className:"text-2xl font-bold mb-4 text-center",children:"Sign up to Open Chat"}),(0,a.jsx)("label",{htmlFor:"username",className:"block text-lg mb-2",children:"Username"}),(0,a.jsx)("input",{type:"text",minLength:6,value:t.username,onChange:e=>r({...t,username:e.target.value}),name:"username",id:"username",className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"}),(0,a.jsx)("label",{htmlFor:"email",className:"block text-lg mb-2",children:"Password"}),(0,a.jsx)("input",{type:"password",value:t.password,onChange:e=>r({...t,password:e.target.value}),minLength:6,name:"password",id:"password",className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"}),(0,a.jsx)("label",{htmlFor:"email",className:"block text-lg mb-2",children:"Email"}),(0,a.jsx)("input",{type:"text",minLength:6,value:t.email,onChange:e=>r({...t,email:e.target.value}),name:"email",id:"email",className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4"}),(0,a.jsx)("button",{onClick:u,className:"w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600",children:"Sign in"}),(0,a.jsx)("p",{className:"text-center mt-4 font-sm",children:(0,a.jsx)(s.default,{href:"/",children:"Есть уже аккаунт? Пройди авторизацию"})})]})})})}},5428:function(e,t,r){"use strict";r.d(t,{e:function(){return s}});var a=r(8472);class s{static async login(e,t,r){try{return await a.Z.post("http://localhost:3000/api/v1/login",{username:e,password:t,email:r})}catch(e){console.error("Error during login request:",e)}}static async getUser(){return await a.Z.get("http://localhost:3000/user",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("access"))}})}static async register(e,t,r){try{return await a.Z.post("http://localhost:3000/api/v1/register",{username:e,password:t,email:r})}catch(e){console.error("Error during register request:",e)}}}}},function(e){e.O(0,[236,138,971,23,744],function(){return e(e.s=9608)}),_N_E=e.O()}]);