import{_ as o,o as n,c,b as s,p as i,g as r}from"./index-eyP1AHJE.js";const l={mounted(){const e=this.$route.path.split("/")[1];e==="cart"?this.$refs.progessCart.classList.add("active"):e==="orderInfo"?this.$refs.progessInfo.classList.add("active"):e==="payment"?this.$refs.progessPayment.classList.add("active"):e==="orderChecked"&&this.$refs.progessOrder.classList.add("active")}},t=e=>(i("data-v-bdd68998"),e=e(),r(),e),d={class:"py-72"},a={class:"col-md-8 col-xl-6 mx-auto"},p={class:"d-flex justify-content-between w-lg-75 position-relative progess mx-auto"},_={class:"d-flex flex-column align-items-center progess-wrapper",ref:"progessCart"},f=t(()=>s("span",{class:"d-inline-block bg-white fs-md-6 progess-box rounded-circle d-flex justify-content-center align-items-center mb-8 z-2"},"1",-1)),h=t(()=>s("span",null,"購物車",-1)),g=[f,h],m={class:"d-flex flex-column align-items-center progess-wrapper",ref:"progessInfo"},u=t(()=>s("span",{class:"d-inline-block bg-white fs-md-6 progess-box rounded-circle d-flex justify-content-center align-items-center mb-8 z-2"},"2",-1)),x=t(()=>s("span",null,"填寫資料",-1)),b=[u,x],w={class:"d-flex flex-column align-items-center progess-wrapper",ref:"progessPayment"},v=t(()=>s("span",{class:"d-inline-block bg-white fs-md-6 progess-box rounded-circle d-flex justify-content-center align-items-center mb-8 z-2"},"3",-1)),y=t(()=>s("span",null,"付款確認",-1)),$=[v,y],k={class:"d-flex flex-column align-items-center progess-wrapper",ref:"progessOrder"},I=t(()=>s("span",{class:"d-inline-block bg-white fs-md-6 progess-box rounded-circle d-flex justify-content-center align-items-center mb-8 z-2"},"4",-1)),j=t(()=>s("span",null,"訂單確認",-1)),z=[I,j];function B(e,C,L,P,S,O){return n(),c("div",d,[s("div",a,[s("ol",p,[s("li",_,g,512),s("li",m,b,512),s("li",w,$,512),s("li",k,z,512)])])])}const N=o(l,[["render",B],["__scopeId","data-v-bdd68998"]]);export{N as P};
