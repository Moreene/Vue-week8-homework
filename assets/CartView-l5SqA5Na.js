import{a as I}from"./axios-G2rPRu76.js";import{_ as T,m as N,a as L,h as b,o as c,c as d,i as _,b as t,F as m,t as r,d as g,n as P,r as M,e as a,j as v,w as k,f as p,J as y,v as w,p as U,g as A}from"./index-r1H8yIGC.js";import{c as x}from"./cartStore-LMquo9uB.js";import{P as j}from"./ProgessBarComponent-bOmKu1Fc.js";import{L as B}from"./LoadingComponent-cf4BCbl2.js";import{t as u}from"./sweetalert-1w20vat0.js";const E="/Vue-week8-homework/empety-cart.png";var R={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_APIPATH:"taiwang",BASE_URL:"/Vue-week8-homework/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:D,VITE_APIPATH:q}=R,O={components:{ProgessBarComponent:j,LoadingComponent:B},data(){return{coupon:"",delivery:"自取",isLoading:!0}},computed:{...N(x,["cart"])},methods:{...L(x,["deleteItem","increaseCartNum","decreaseCartNum","getCart"]),useCoupon(){const s={code:this.coupon};I.post(`${D}/api/${q}/coupon`,{data:s}).then(()=>{u("top","success","已成功使用優惠代碼"),this.getCart(),this.coupon=""}).catch(()=>{u("top","error","優惠代碼使用失敗"),this.coupon=""})},goCheckout(){localStorage.setItem("pickUp",this.delivery),this.$router.push("/orderInfo")},copyCode(s){const n=this.$refs.code.innerText;navigator.clipboard.writeText(n).then(()=>{s.target.blur(),u("top","success","已成功複製優惠代碼")}).catch(C=>{u("top","error","複製優惠代碼失敗")})}},watch:{"cart.final_total":{handler(s){typeof s<"u"&&Math.round(s)<500&&(this.delivery="自取")},immediate:!0}},created(){setTimeout(()=>this.isLoading=!1,400)}},o=s=>(U("data-v-e33dee25"),s=s(),A(),s),F={class:"bg-wave"},H={class:"container"},J={class:"col-lg-10 mx-auto"},z={class:"mb-48"},G={key:0,class:"h5 bg-gray text-light ps-12 py-16 mb-0"},K={class:"table table-borderless mb-0"},Q=o(()=>t("thead",{class:"border-bottom border-dark text-nowrap"},[t("tr",{class:"text-center"},[t("th",{scope:"col",style:{width:"180px"}},"示意圖"),t("th",{scope:"col"},"餐點名稱"),t("th",{scope:"col"},"單價"),t("th",{scope:"col",style:{width:"250px"}},"數量"),t("th",{scope:"col",class:"d-none d-md-block"},"小計"),t("th",{scope:"col"},"刪除")])],-1)),W={class:"text-center text-nowrap"},X={scope:"row",class:"fw-normal"},Y=["src","alt"],Z={class:"text-notoSans"},$={class:"d-flex justify-content-center"},tt={class:"input-group w-75 d-flex align-items-end"},et=["onClick","disabled"],st=o(()=>t("i",{class:"bi bi-dash"},null,-1)),ot=[st],nt=["onUpdate:modelValue"],at=["onClick"],lt=o(()=>t("i",{class:"bi bi-plus"},null,-1)),ct=[lt],dt={class:"d-none d-md-table-cell"},rt={class:"text-notoSans"},it=["onClick"],pt=o(()=>t("i",{class:"bi bi-trash fs-5 link-gray"},null,-1)),ht=[pt],_t={class:"border border-dark border-top-0 bg-white p-12"},ut={class:"d-flex justify-content-between"},bt=o(()=>t("i",{class:"bi bi-arrow-right"},null,-1)),mt=o(()=>t("span",{class:"text-notoSans d-inline-block p-6 bg-danger text-white me-6"},"優惠促銷",-1)),yt={class:"text-notoSans"},ft={ref:"code"},gt={class:"row gy-48 gy-md-0 pb-72"},vt={class:"col-md-7"},kt=o(()=>t("h2",{class:"h5 bg-gray text-light ps-12 py-16 mb-0"},"取餐方式",-1)),wt={class:"border border-dark bg-white"},xt={class:"ps-12 py-16"},Ct={class:"form-check form-check-inline"},St=o(()=>t("label",{class:"form-check-label",for:"pickup"},"自取",-1)),Vt={class:"form-check form-check-inline"},It=["disabled"],Tt=o(()=>t("label",{class:"form-check-label",for:"delivery"},[a("外送 "),t("span",{class:"text-gray"},"(折扣後滿500元)")],-1)),Nt={class:"border border-dark border-top-0 bg-white"},Lt=o(()=>t("h2",{class:"h5 bg-gray text-light ps-12 py-16 mb-0"},"送貨及付款方式",-1)),Pt={class:"ps-12 py-16"},Mt={class:"mb-16"},Ut=o(()=>t("label",{for:"送貨方式",class:"form-label"},"送貨方式",-1)),At={key:0,type:"text",id:"送貨方式",class:"form-control w-75",value:"自取",disabled:""},jt={key:1,type:"text",id:"送貨方式",class:"form-control w-75",value:"泰汪小蜜蜂",disabled:""},Bt=o(()=>t("div",null,[t("label",{for:"付款方式",class:"form-label"},"付款方式"),t("input",{type:"text",id:"付款方式",class:"form-control w-75",value:"信用卡 (支援VISA、JCB、Master)",disabled:""})],-1)),Et={class:"col-md-5"},Rt={class:"h-100 border border-dark bg-white"},Dt=o(()=>t("h2",{class:"h5 bg-gray text-light ps-12 py-16 mb-0"},"訂單資訊",-1)),qt={class:"border-bottom border-dark px-12 py-16"},Ot={class:"d-flex justify-content-between"},Ft=o(()=>t("p",null,"小計：",-1)),Ht={class:"text-notoSans"},Jt=o(()=>t("div",{class:"d-flex justify-content-between"},[t("p",null,"運費："),t("p",null,[a("NT$ "),t("span",{class:"text-notoSans"},"0")])],-1)),zt=o(()=>t("p",{class:"mb-8"},"優惠代碼",-1)),Gt={class:"d-flex"},Kt=["disabled"],Qt={class:"px-12 py-24 pb-md-0"},Wt={class:"d-flex justify-content-between"},Xt=o(()=>t("p",{class:"fw-bold"},"合計：",-1)),Yt={class:"fw-bold"},Zt={class:"text-notoSans"},$t={key:0,class:"text-danger ms-4"},te={key:1,class:"pb-72 text-center"},ee=o(()=>t("h2",{class:"mb-16"},"Oops,目前購物車內沒有東西唷！",-1)),se={class:"mb-32"},oe=o(()=>t("img",{src:E,class:"empety-cart",alt:"空購物車"},null,-1));function ne(s,n,C,ae,l,i){const S=b("LoadingComponent"),V=b("ProgessBarComponent"),f=b("RouterLink");return c(),d(m,null,[_(S,{active:l.isLoading,"onUpdate:active":n[0]||(n[0]=e=>l.isLoading=e)},null,8,["active"]),t("div",F,[t("div",H,[t("div",J,[_(V),s.cart.carts&&s.cart.carts.length?(c(),d(m,{key:0},[t("div",z,[s.cart.carts?(c(),d("h2",G,"購物車 ( "+r(s.cart.carts.length)+" ) ",1)):g("",!0),t("div",{class:P(["table-responsive border border-dark",{"fixed-height":s.cart.carts&&s.cart.carts.length>3}])},[t("table",K,[Q,t("tbody",W,[(c(!0),d(m,null,M(s.cart.carts,e=>(c(),d("tr",{key:e.id,class:"align-middle border-bottom"},[t("th",X,[t("img",{src:e.product.imageUrl,alt:e.product.title,class:"food-img"},null,8,Y)]),t("td",null,r(e.product.title),1),t("td",null,[a("NT$ "),t("span",Z,r(e.product.price),1)]),t("td",null,[t("div",$,[t("div",tt,[t("button",{class:"btn btn-secondary text-light d-flex justify-content-center align-items-center d-none d-md-block",type:"button",onClick:h=>s.decreaseCartNum(e),disabled:e.qty===1},ot,8,et),p(t("input",{type:"text",class:"form-control text-center p-0 py-md-6 px-md-12",min:"1","onUpdate:modelValue":h=>e.qty=h,readonly:""},null,8,nt),[[w,e.qty,void 0,{number:!0}]]),t("button",{class:"btn btn-secondary text-light d-flex justify-content-center align-items-center d-none d-md-block",type:"button",onClick:h=>s.increaseCartNum(e)},ct,8,at)])])]),t("td",dt,[a("NT$ "),t("span",rt,r(e.qty*e.product.price),1)]),t("td",null,[t("a",{href:"#",onClick:k(h=>s.deleteItem(e),["prevent"])},ht,8,it)])]))),128))])])],2),t("div",_t,[t("p",ut,[a("更多精彩優惠等著您使用！ "),_(f,{to:"/products",class:"link-gold"},{default:v(()=>[a("繼續購物 "),bt]),_:1})]),mt,t("span",yt,[a("輸入「 "),t("span",ft,"tai6666",512),a(" 」優惠代碼再享 85 折 ﹙"),t("a",{href:"#",class:"link-danger",onClick:n[1]||(n[1]=k(e=>i.copyCode(e),["prevent"]))},"點我複製"),a("﹚")])])]),t("div",gt,[t("div",vt,[kt,t("div",wt,[t("div",xt,[t("div",Ct,[Math.round(s.cart.final_total)<500?p((c(),d("input",{key:0,class:"form-check-input border-gray",type:"radio",name:"取餐方式",id:"pickup",value:"自取","onUpdate:modelValue":n[2]||(n[2]=e=>l.delivery=e),checked:""},null,512)),[[y,l.delivery]]):p((c(),d("input",{key:1,class:"form-check-input border-gray",type:"radio",name:"取餐方式",id:"pickup",value:"自取","onUpdate:modelValue":n[3]||(n[3]=e=>l.delivery=e)},null,512)),[[y,l.delivery]]),St]),t("div",Vt,[p(t("input",{class:"form-check-input border-gray",type:"radio",name:"取餐方式",id:"delivery",value:"外送","onUpdate:modelValue":n[4]||(n[4]=e=>l.delivery=e),disabled:Math.round(s.cart.final_total)<500},null,8,It),[[y,l.delivery]]),Tt])])]),t("div",Nt,[Lt,t("div",Pt,[t("div",Mt,[Ut,l.delivery==="自取"||Math.round(s.cart.final_total)<500?(c(),d("input",At)):(c(),d("input",jt))]),Bt])])]),t("div",Et,[t("div",Rt,[Dt,t("div",qt,[t("div",Ot,[Ft,t("p",null,[a("NT$ "),t("span",Ht,r(s.cart.total),1)])]),Jt,zt,t("div",Gt,[p(t("input",{type:"text",class:"form-control w-50 border-gray","onUpdate:modelValue":n[5]||(n[5]=e=>l.coupon=e)},null,512),[[w,l.coupon]]),t("button",{class:"btn btn-secondary text-light ms-8",type:"button",disabled:l.coupon==="",onClick:n[6]||(n[6]=(...e)=>i.useCoupon&&i.useCoupon(...e))},"套用",8,Kt)])]),t("div",Qt,[t("div",Wt,[Xt,t("p",Yt,[a("NT$ "),t("span",Zt,r(Math.round(s.cart.final_total)),1),s.cart.final_total!==s.cart.total?(c(),d("span",$t,"(已使用優惠)")):g("",!0)])]),t("button",{type:"button",class:"btn btn-primary text-white w-100",onClick:n[7]||(n[7]=(...e)=>i.goCheckout&&i.goCheckout(...e))},"下一步")])])])])],64)):(c(),d("div",te,[ee,t("h2",se,[a("快去"),_(f,{to:"/products",class:"link-secondary border-bottom border-secondary"},{default:v(()=>[a("選購 ")]),_:1}),a(" 想吃餐點吧")]),oe]))])])])],64)}const he=T(O,[["render",ne],["__scopeId","data-v-e33dee25"]]);export{he as default};
