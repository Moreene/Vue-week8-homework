import{a as g}from"./axios-G2rPRu76.js";import{P as E}from"./ProgessBarComponent-SK2oIrAK.js";import{L as I}from"./LoadingComponent-MnieMaxC.js";import{t as P}from"./sweetalert-_e2krCOk.js";import{_ as T,h as i,o as u,c as m,i as r,b as e,F as b,r as B,e as _,t as p,d as v,j as C,n as c}from"./index-eyP1AHJE.js";var D={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_APIPATH:"taiwang",BASE_URL:"/Vue-week8-homework/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:f,VITE_APIPATH:x}=D,L={components:{ProgessBarComponent:E,LoadingComponent:I},data(){return{order:{},isLoading:!0}},methods:{setBlur(s){const t=parseInt(s.target.getAttribute("maxlength"));s.target.value.length===t&&s.target.nextElementSibling.nextElementSibling.focus()},sharedError(s){return s||"請輸入完整卡號"},validDate(s){return s?!0:"請選擇有效年/月"},securityNum(s){return/\d{3}/.test(s)?!0:"請輸入卡片背面末3碼數字"},submitOrder(){g.post(`${f}/api/${x}/pay/${this.$route.params.id}`).then(s=>{P("top","success","已成功付款"),setTimeout(()=>{this.$router.push("/orderChecked")},1500)}).catch(s=>{console.log(s)})}},computed:{originTotal(){if(this.order&&this.order.products)return Object.values(this.order.products).reduce((s,t)=>s+t.total,0)}},created(){localStorage.setItem("orderNum",this.$route.params.id),g.get(`${f}/api/${x}/order/${this.$route.params.id}`).then(s=>{this.order=s.data.order,this.isLoading=!1}).catch(s=>{console.log(s)})}},S={class:"bg-wave"},V={class:"container"},A={class:"col-lg-10 mx-auto pb-72"},q={class:"row gy-48 gy-lg-0"},O={key:0,class:"col-lg-7"},K=e("h2",{class:"h5 bg-gray text-light ps-12 py-16 mb-0"},"訂購資訊",-1),R={class:"border border-dark bg-white"},j={class:"ps-12 py-16"},F={class:"row"},H=e("label",{for:"name",class:"col-3 col-lg-2 col-form-label"},"姓名：",-1),M={class:"col-9 col-lg-10"},U=["value"],z={class:"row"},G=e("label",{for:"tel",class:"col-3 col-lg-2 col-form-label"},"手機：",-1),J={class:"col-9 col-lg-10"},Q=["value"],W={class:"row"},X=e("label",{for:"email",class:"col-3 col-lg-2 col-form-label"},"Email：",-1),Y={class:"col-9 col-lg-10"},Z=["value"],$={class:"row"},ee=e("label",{for:"address",class:"col-3 col-lg-2 col-form-label"},"地址：",-1),se={class:"col-9 col-lg-10"},te=["value"],oe={class:"row"},le=e("label",{for:"message",class:"col-3 col-lg-2 col-form-label"},"備註：",-1),re={class:"col-9 col-lg-10"},ae=["value"],ne=e("h2",{class:"h5 bg-gray text-light ps-12 py-16 mb-0"},"訂購品項",-1),ce={class:"border border-dark bg-white"},de={class:"px-12 py-16"},ie={class:"table-responsive"},ue={class:"table table-borderless mb-0"},me=e("thead",{class:"border-bottom border-dark border-top-0 border-start-0 border-end-0 text-nowrap"},[e("tr",null,[e("th",{scope:"col"},"餐點名稱"),e("th",{scope:"col"},"數量"),e("th",{scope:"col"},"單價")])],-1),_e={class:"text-nowrap border-bottom border-dark"},pe={class:"text-notoSans"},he={class:"ps-12 mt-24 fs-6 fw-bold mb-4"},ge={class:"text-notoSans"},be={key:0,class:"text-danger fs-7"},ve={class:"col-lg-5"},fe=e("h2",{class:"h5 bg-gray text-light ps-12 py-16 mb-0"},"信用卡資訊",-1),xe={class:"border border-dark bg-white"},ye=e("label",{for:"cardNum1",class:"form-label"},[_("信用卡卡號 "),e("span",{class:"text-danger"},"*")],-1),Ne={class:"d-flex align-items-center mb-20"},we=e("span",{class:"px-6"},"-",-1),ke=e("span",{class:"px-6"},"-",-1),Ee=e("span",{class:"px-6"},"-",-1),Ie=e("label",{for:"validDate",class:"form-label"},[_("有效年月 "),e("span",{class:"text-danger"},"*")],-1),Pe=e("label",{for:"securityNum",class:"form-label mt-20"},[_("安全碼 "),e("span",{class:"text-danger"},"*")],-1),Te=e("div",{class:"text-end mt-24"},[e("button",{type:"submit",class:"btn btn-primary text-white"},"確認付款")],-1);function Be(s,t,y,Ce,o,a){const N=i("LoadingComponent"),w=i("ProgessBarComponent"),n=i("v-field"),h=i("error-message"),k=i("v-form");return u(),m(b,null,[r(N,{active:o.isLoading,"onUpdate:active":t[0]||(t[0]=l=>o.isLoading=l)},null,8,["active"]),e("div",S,[e("div",V,[e("div",A,[r(w),e("div",q,[o.order&&o.order.user?(u(),m("div",O,[K,e("div",R,[e("div",j,[e("div",F,[H,e("div",M,[e("input",{type:"text",class:"form-control-plaintext",id:"name",value:o.order.user.name,readonly:""},null,8,U)])]),e("div",z,[G,e("div",J,[e("input",{type:"tel",class:"form-control-plaintext",id:"tel",value:o.order.user.tel,readonly:""},null,8,Q)])]),e("div",W,[X,e("div",Y,[e("input",{type:"email",class:"form-control-plaintext",id:"email",value:o.order.user.email,readonly:""},null,8,Z)])]),e("div",$,[ee,e("div",se,[e("input",{type:"text",class:"form-control-plaintext",id:"address",value:o.order.user.address,readonly:""},null,8,te)])]),e("div",oe,[le,e("div",re,[e("input",{type:"text",class:"form-control-plaintext",id:"message",value:o.order.user.message?o.order.user.message:"無",readonly:""},null,8,ae)])])])]),ne,e("div",ce,[e("div",de,[e("div",ie,[e("table",ue,[me,e("tbody",_e,[(u(!0),m(b,null,B(o.order.products,l=>(u(),m("tr",{key:l.id,class:"align-middle"},[e("td",null,p(l.product.title),1),e("td",null,p(l.qty),1),e("td",null,[_("NT$ "),e("span",pe,p(l.product.price),1)])]))),128))])])]),e("p",he,[_("總金額：NT$ "),e("span",ge,p(Math.round(o.order.total)),1),o.order.total!==a.originTotal?(u(),m("span",be,"﹙已使用優惠折扣﹚")):v("",!0)])])])])):v("",!0),e("div",ve,[fe,e("div",xe,[r(k,{ref:"form",class:"px-12 py-16",onSubmit:a.submitOrder},{default:C(({errors:l})=>[ye,e("div",Ne,[r(n,{id:"cardNum1",name:"cardNum1",type:"text",class:c(["form-control border-gray w-20",{"is-invalid":l.cardNum1}]),onKeyup:t[1]||(t[1]=d=>a.setBlur(d)),rules:{required:!0,regex:/\d{4}/},maxlength:"4"},null,8,["class"]),we,r(n,{name:"cardNum2",type:"text",class:c(["form-control border-gray w-20",{"is-invalid":l.cardNum2}]),onKeyup:t[2]||(t[2]=d=>a.setBlur(d)),rules:{required:!0,regex:/\d{4}/},maxlength:"4"},null,8,["class"]),ke,r(n,{name:"cardNum3",type:"text",class:c(["form-control border-gray w-20",{"is-invalid":l.cardNum3}]),onKeyup:t[3]||(t[3]=d=>a.setBlur(d)),rules:{required:!0,regex:/\d{4}/},maxlength:"4"},null,8,["class"]),Ee,r(n,{name:"cardNum4",type:"text",class:c(["form-control border-gray w-20",{"is-invalid":l.cardNum4}]),rules:{required:!0,regex:/\d/},maxlength:"4"},null,8,["class"])]),Ie,r(n,{id:"validDate",name:"validDate",type:"month",class:c(["form-control border-gray",{"is-invalid":l.validDate}]),rules:a.validDate},null,8,["class","rules"]),r(h,{name:"validDate",class:"invalid-feedback"}),Pe,r(n,{id:"securityNum",name:"securityNum",type:"text",class:c(["form-control border-gray",{"is-invalid":l.securityNum}]),placeholder:"請輸入卡片背面末3碼",rules:a.securityNum,maxlength:"3"},null,8,["class","rules"]),r(h,{name:"securityNum",class:"invalid-feedback"}),Te]),_:1},8,["onSubmit"])])])])])])])],64)}const qe=T(L,[["render",Be]]);export{qe as default};
