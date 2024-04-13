import{a as k}from"./axios-G2rPRu76.js";import{S as L,t as p}from"./sweetalert-tDfAiNOE.js";import{_ as P,m as M,a as U,h as b,o as c,c as i,i as _,b as t,F as m,t as d,d as w,r as A,e as l,j as x,w as C,f as h,L as f,v as S,p as j,g as E}from"./index-YTSL6Rgu.js";import{c as B}from"./cartStore-QujK9ZR-.js";import{P as R}from"./ProgessBarComponent-yQ1iKmDq.js";import{L as D}from"./LoadingComponent-2tpz7yoz.js";const q="/Vue-week8-homework/empety-cart.png";var O={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_APIPATH:"taiwang",BASE_URL:"/Vue-week8-homework/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:T,VITE_APIPATH:V}=O,$={components:{ProgessBarComponent:R,LoadingComponent:D},data(){return{coupon:"",delivery:"自取",isLoading:!0}},computed:{...M(B,["cart"])},methods:{...U(B,["increaseCartNum","decreaseCartNum","getCart"]),deleteItem(o){const s=o.product.title;L.mixin({customClass:{confirmButton:"btn btn-secondary text-light",cancelButton:"btn btn-outline-secondary me-16"},buttonsStyling:!1}).fire({title:`是否要刪除 ${s} ？`,icon:"warning",showCancelButton:!0,confirmButtonText:"是, 我要刪除",cancelButtonText:"我再想想",reverseButtons:!0}).then(g=>{g.isConfirmed&&k.delete(`${T}/api/${V}/cart/${o.id}`).then(()=>{p("top","warning",`已刪除 "${s}"`),this.getCart()}).catch(a=>{console.log(a)})})},useCoupon(){const o={code:this.coupon};k.post(`${T}/api/${V}/coupon`,{data:o}).then(()=>{p("top","success","已成功使用優惠代碼"),this.getCart(),this.coupon=""}).catch(()=>{p("top","error","優惠代碼使用失敗"),this.coupon=""})},goCheckout(){localStorage.setItem("pickUp",this.delivery),this.$router.push("/orderInfo")},copyCode(o){const s=this.$refs.code.innerText;navigator.clipboard.writeText(s).then(()=>{o.target.blur(),p("top","success","已成功複製優惠代碼")}).catch(y=>{p("top","error","複製優惠代碼失敗")})}},watch:{"cart.final_total":{handler(o){typeof o<"u"&&Math.round(o)<500&&(this.delivery="自取")},immediate:!0}},created(){setTimeout(()=>this.isLoading=!1,400)}},n=o=>(j("data-v-60fb3e2b"),o=o(),E(),o),F={class:"bg-wave"},H={class:"container"},W={class:"col-lg-10 mx-auto"},J={class:"mb-48"},z={key:0,class:"h5 bg-gray text-light ps-12 py-16 mb-0"},G={class:"table-responsive border border-dark"},K={class:"table table-borderless mb-0"},Q=n(()=>t("thead",{class:"border-bottom border-dark text-nowrap"},[t("tr",{class:"text-center"},[t("th",{scope:"col",style:{width:"180px"}},"示意圖"),t("th",{scope:"col"},"餐點名稱"),t("th",{scope:"col"},"單價"),t("th",{scope:"col",style:{width:"250px"}},"數量"),t("th",{scope:"col",class:"d-none d-md-block"},"小計"),t("th",{scope:"col"},"刪除")])],-1)),X={class:"text-center text-nowrap"},Y={scope:"row",class:"fw-normal"},Z=["src","alt"],tt={class:"text-notoSans"},et={class:"d-flex justify-content-center"},ot={class:"input-group w-75 d-flex align-items-end"},st=["onClick","disabled"],nt=n(()=>t("i",{class:"bi bi-dash"},null,-1)),at=[nt],lt=["onUpdate:modelValue"],ct=["onClick"],it=n(()=>t("i",{class:"bi bi-plus"},null,-1)),rt=[it],dt={class:"d-none d-md-table-cell"},pt={class:"text-notoSans"},ht=["onClick"],ut=n(()=>t("i",{class:"bi bi-trash fs-5 link-gray"},null,-1)),_t=[ut],bt={class:"border border-dark border-top-0 bg-white p-12"},mt={class:"d-flex justify-content-between"},ft=n(()=>t("i",{class:"bi bi-arrow-right"},null,-1)),yt=n(()=>t("span",{class:"text-notoSans d-inline-block p-6 bg-danger text-white me-6"},"優惠促銷",-1)),gt={class:"text-notoSans"},vt={ref:"code"},kt={class:"row gy-48 gy-md-0 pb-72"},wt={class:"col-md-7"},xt=n(()=>t("h2",{class:"h5 bg-gray text-light ps-12 py-16 mb-0"},"取餐方式",-1)),Ct={class:"border border-dark bg-white"},St={class:"ps-12 py-16"},Bt={class:"form-check form-check-inline"},Tt=n(()=>t("label",{class:"form-check-label",for:"pickup"},"自取",-1)),Vt={class:"form-check form-check-inline"},It=["disabled"],Nt=n(()=>t("label",{class:"form-check-label",for:"delivery"},[l("外送 "),t("span",{class:"text-gray"},"(折扣後滿500元)")],-1)),Lt={class:"border border-dark border-top-0 bg-white"},Pt=n(()=>t("h2",{class:"h5 bg-gray text-light ps-12 py-16 mb-0"},"送貨及付款方式",-1)),Mt={class:"ps-12 py-16"},Ut={class:"mb-16"},At=n(()=>t("label",{for:"送貨方式",class:"form-label"},"送貨方式",-1)),jt={key:0,type:"text",id:"送貨方式",class:"form-control w-75",value:"自取",disabled:""},Et={key:1,type:"text",id:"送貨方式",class:"form-control w-75",value:"泰汪小蜜蜂",disabled:""},Rt=n(()=>t("div",null,[t("label",{for:"付款方式",class:"form-label"},"付款方式"),t("input",{type:"text",id:"付款方式",class:"form-control w-75",value:"信用卡 (支援VISA、JCB、Master)",disabled:""})],-1)),Dt={class:"col-md-5"},qt={class:"h-100 border border-dark bg-white"},Ot=n(()=>t("h2",{class:"h5 bg-gray text-light ps-12 py-16 mb-0"},"訂單資訊",-1)),$t={class:"border-bottom border-dark px-12 py-16"},Ft={class:"d-flex justify-content-between"},Ht=n(()=>t("p",null,"小計：",-1)),Wt={class:"text-notoSans"},Jt=n(()=>t("div",{class:"d-flex justify-content-between"},[t("p",null,"運費："),t("p",null,[l("NT$ "),t("span",{class:"text-notoSans"},"0")])],-1)),zt=n(()=>t("p",{class:"mb-8"},"優惠代碼",-1)),Gt={class:"d-flex"},Kt=["disabled"],Qt={class:"px-12 py-24 pb-md-0"},Xt={class:"d-flex justify-content-between"},Yt=n(()=>t("p",{class:"fw-bold"},"合計：",-1)),Zt={class:"fw-bold"},te={class:"text-notoSans"},ee={key:0,class:"text-danger ms-4"},oe={key:1,class:"pb-72 text-center"},se=n(()=>t("h2",{class:"mb-16"},"Oops,目前購物車內沒有東西唷！",-1)),ne={class:"mb-32"},ae=n(()=>t("img",{src:q,class:"empety-cart",alt:"空購物車"},null,-1));function le(o,s,y,g,a,r){const I=b("LoadingComponent"),N=b("ProgessBarComponent"),v=b("RouterLink");return c(),i(m,null,[_(I,{active:a.isLoading,"onUpdate:active":s[0]||(s[0]=e=>a.isLoading=e)},null,8,["active"]),t("div",F,[t("div",H,[t("div",W,[_(N),o.cart.carts&&o.cart.carts.length?(c(),i(m,{key:0},[t("div",J,[o.cart.carts?(c(),i("h2",z,"購物車 ( "+d(o.cart.carts.length)+" ) ",1)):w("",!0),t("div",G,[t("table",K,[Q,t("tbody",X,[(c(!0),i(m,null,A(o.cart.carts,e=>(c(),i("tr",{key:e.id,class:"align-middle border-bottom"},[t("th",Y,[t("img",{src:e.product.imageUrl,alt:e.product.title,class:"food-img"},null,8,Z)]),t("td",null,d(e.product.title),1),t("td",null,[l("NT$ "),t("span",tt,d(e.product.price),1)]),t("td",null,[t("div",et,[t("div",ot,[t("button",{class:"btn btn-primary text-light d-flex justify-content-center align-items-center d-none d-md-block",type:"button",onClick:u=>o.decreaseCartNum(e),disabled:e.qty===1},at,8,st),h(t("input",{type:"text",class:"form-control text-center p-0 py-md-6 px-md-12",min:"1","onUpdate:modelValue":u=>e.qty=u,readonly:""},null,8,lt),[[S,e.qty,void 0,{number:!0}]]),t("button",{class:"btn btn-primary text-light d-flex justify-content-center align-items-center d-none d-md-block",type:"button",onClick:u=>o.increaseCartNum(e)},rt,8,ct)])])]),t("td",dt,[l("NT$ "),t("span",pt,d(e.qty*e.product.price),1)]),t("td",null,[t("a",{href:"#",onClick:C(u=>r.deleteItem(e),["prevent"])},_t,8,ht)])]))),128))])])]),t("div",bt,[t("p",mt,[l("更多精彩優惠等著您使用！ "),_(v,{to:"/products",class:"link-gold"},{default:x(()=>[l("繼續購物 "),ft]),_:1})]),yt,t("span",gt,[l("輸入「 "),t("span",vt,"tai6666",512),l(" 」優惠代碼再享 85 折 ﹙"),t("a",{href:"#",class:"link-danger",onClick:s[1]||(s[1]=C(e=>r.copyCode(e),["prevent"]))},"點我複製"),l("﹚")])])]),t("div",kt,[t("div",wt,[xt,t("div",Ct,[t("div",St,[t("div",Bt,[Math.round(o.cart.final_total)<500?h((c(),i("input",{key:0,class:"form-check-input border-gray",type:"radio",name:"取餐方式",id:"pickup",value:"自取","onUpdate:modelValue":s[2]||(s[2]=e=>a.delivery=e),checked:""},null,512)),[[f,a.delivery]]):h((c(),i("input",{key:1,class:"form-check-input border-gray",type:"radio",name:"取餐方式",id:"pickup",value:"自取","onUpdate:modelValue":s[3]||(s[3]=e=>a.delivery=e)},null,512)),[[f,a.delivery]]),Tt]),t("div",Vt,[h(t("input",{class:"form-check-input border-gray",type:"radio",name:"取餐方式",id:"delivery",value:"外送","onUpdate:modelValue":s[4]||(s[4]=e=>a.delivery=e),disabled:Math.round(o.cart.final_total)<500},null,8,It),[[f,a.delivery]]),Nt])])]),t("div",Lt,[Pt,t("div",Mt,[t("div",Ut,[At,a.delivery==="自取"||Math.round(o.cart.final_total)<500?(c(),i("input",jt)):(c(),i("input",Et))]),Rt])])]),t("div",Dt,[t("div",qt,[Ot,t("div",$t,[t("div",Ft,[Ht,t("p",null,[l("NT$ "),t("span",Wt,d(o.cart.total),1)])]),Jt,zt,t("div",Gt,[h(t("input",{type:"text",class:"form-control w-50 border-gray","onUpdate:modelValue":s[5]||(s[5]=e=>a.coupon=e)},null,512),[[S,a.coupon]]),t("button",{class:"btn btn-outline-dark ms-8",type:"button",disabled:a.coupon==="",onClick:s[6]||(s[6]=(...e)=>r.useCoupon&&r.useCoupon(...e))},"套用",8,Kt)])]),t("div",Qt,[t("div",Xt,[Yt,t("p",Zt,[l("NT$ "),t("span",te,d(Math.round(o.cart.final_total)),1),o.cart.final_total!==o.cart.total?(c(),i("span",ee,"(已使用優惠)")):w("",!0)])]),t("button",{type:"button",class:"btn btn-primary text-white w-100",onClick:s[7]||(s[7]=(...e)=>r.goCheckout&&r.goCheckout(...e))},"下一步")])])])])],64)):(c(),i("div",oe,[se,t("h2",ne,[l("快去"),_(v,{to:"/products",class:"link-secondary border-bottom border-secondary"},{default:x(()=>[l("選購 ")]),_:1}),l(" 想吃餐點吧")]),ae]))])])])],64)}const ue=P($,[["render",le],["__scopeId","data-v-60fb3e2b"]]);export{ue as default};