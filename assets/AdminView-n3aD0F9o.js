import{_ as f,R as v,h as u,o as m,c as g,b as t,i,j as l,y as k,d as y,F as w,e as r}from"./index-YTSL6Rgu.js";import{a as c}from"./axios-G2rPRu76.js";import{s as p,S as x}from"./sweetalert-tDfAiNOE.js";var B={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_APIPATH:"taiwang",BASE_URL:"/Vue-week8-homework/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:h}=B,C={components:{RouterLink:v},data(){return{isShow:!1}},methods:{checkLogin(){const e=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/,"$1");e&&(c.defaults.headers.common.Authorization=e,c.post(`${h}/api/user/check`,{api_token:e}).then(()=>{this.isShow=!0}).catch(()=>{p("error","您沒有權限進入!"),this.$router.push("/adminLogin")}))},hideNavbar(){const e=this.$refs.collapse;e!=null&&e.classList.contains("show")&&e.classList.remove("show")},logout(){const e=x.mixin({customClass:{confirmButton:"btn btn-primary text-light",cancelButton:"btn btn-outline-danger me-16"},buttonsStyling:!1});e.fire({title:"即將登出後台!",icon:"warning",showCancelButton:!0,cancelButtonText:"不要登出",confirmButtonText:"是，我要登出",reverseButtons:!0}).then(o=>{o.isConfirmed&&(e.fire({title:"即將登出!",icon:"success",timer:2e3}),setTimeout(()=>{c.post(`${h}/logout`).then(()=>{document.cookie="myToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC;",this.$router.push("/adminLogin")}).catch(d=>{p("error",d.response.data.message)})},500))})}},mounted(){this.checkLogin()}},T={class:"navbar navbar-expand-md bg-dark py-16 fixed-top","data-bs-theme":"dark"},S={class:"container"},V=t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon"})],-1),L={class:"navbar-nav me-auto mb-0"},R={class:"nav-item"},A=t("i",{class:"bi bi-box-arrow-in-left"},null,-1),E={class:"nav-item"},N=t("i",{class:"bi bi-clipboard"},null,-1),I={class:"nav-item"},P=t("i",{class:"bi bi-box-seam"},null,-1),$={class:"nav-item"},D=t("i",{class:"bi bi-copy"},null,-1);function F(e,o,d,O,b,s){const a=u("RouterLink"),_=u("RouterView");return m(),g(w,null,[t("nav",T,[t("div",S,[V,t("button",{type:"button",class:"btn btn-outline-light fs-6 d-md-none",onClick:o[0]||(o[0]=(...n)=>s.logout&&s.logout(...n))},"登出"),t("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent",ref:"collapse",onClick:o[1]||(o[1]=(...n)=>s.hideNavbar&&s.hideNavbar(...n))},[t("ul",L,[t("li",R,[i(a,{to:"/",class:"nav-link py-16 py-md-0 ps-0 fs-6"},{default:l(()=>[A,r(" 回到前台 ")]),_:1})]),t("li",E,[i(a,{to:"/admin/products",class:"nav-link py-16 py-md-0 fs-6"},{default:l(()=>[N,r(" 餐點列表 ")]),_:1})]),t("li",I,[i(a,{to:"/admin/orders",class:"nav-link py-16 py-md-0 fs-6"},{default:l(()=>[P,r(" 訂單列表 ")]),_:1})]),t("li",$,[i(a,{to:"/admin/coupon",class:"nav-link py-16 py-md-0 fs-6"},{default:l(()=>[D,r(" 優惠列表 ")]),_:1})])])],512),t("button",{type:"button",class:"btn btn-outline-light fs-6 d-none d-md-block",onClick:o[2]||(o[2]=(...n)=>s.logout&&s.logout(...n))},"登出")])]),b.isShow?(m(),k(_,{key:0})):y("",!0)],64)}const H=f(C,[["render",F]]);export{H as default};
