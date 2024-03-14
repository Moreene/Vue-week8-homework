import{_ as y,R as w,m as b,h as n,o as d,c as i,i as a,b as e,j as l,F as h,r as S,k as m,e as _,t as k,p as L,g as C}from"./index-eyP1AHJE.js";import{p as M}from"./productStore-x_ZxNuAG.js";import{c as $}from"./categoryStore-uJWRcAiu.js";import{S as V}from"./SwiperComponent-CjEriCS8.js";import{L as j}from"./LoadingComponent-MnieMaxC.js";import"./axios-G2rPRu76.js";import"./cartStore-8LtKtzX3.js";import"./sweetalert-_e2krCOk.js";const I={components:{RouterLink:w,SwiperComponent:V,LoadingComponent:j},methods:{handleMouseOver(t){this.$refs.tastyLinks.forEach((v,p)=>{p!==t&&v.$el.classList.add("hovered")})},handleMouseOut(){this.$refs.tastyLinks.forEach(o=>{o.$el.classList.remove("hovered")})}},computed:{...b(M,["sellProducts","isLoading"]),...b($,["categories"])}},r=t=>(L("data-v-164bcefe"),t=t(),C(),t),N={class:"banner bg-repeat-no bg-size-cover d-flex justify-content-center align-items-center"},O={class:"banner-box rounded-4 d-flex justify-content-center align-items-center"},R={class:"text-center"},B=m('<h2 class="fw-bold" data-v-164bcefe>泰式美味線上點</h2><h2 class="fw-bold mb-24" data-v-164bcefe>選擇泰汪，越吃越旺！</h2><h3 class="text-notoSans text-danger fs-5 mb-32" data-v-164bcefe><i class="bi bi-balloon fs-5 text-danger" data-v-164bcefe></i> 線上訂餐，再享85折優惠 <i class="bi bi-balloon fs-5 text-danger" data-v-164bcefe></i></h3>',3),E={class:"container"},z={class:"py-72"},F=r(()=>e("h3",{class:"text-center fw-bold mb-16"},"暢銷餐點",-1)),P={class:"text-center"},U=m('<div class="bg-wave py-72" data-v-164bcefe><div class="container" data-v-164bcefe><h3 class="text-center fw-bold mb-32" data-v-164bcefe>訂購需知</h3><div class="row gy-48 gy-lg-0" data-v-164bcefe><div class="col-md-6 col-lg-3" data-v-164bcefe><div class="card h-100 rounded-1 border-gray p-20" data-v-164bcefe><h4 class="fs-6 fw-bold" data-v-164bcefe>慶祝開幕，全館免運費</h4><p class="text-notoSans" data-v-164bcefe>截至2024/12/31止，全館免運費，限制距離在15km以內才提供外送服務。</p><p class="text-notoSans" data-v-164bcefe>※ 外送路況多變，抵達時間可能會提前或延後15~20分鐘，還請體諒外送人員辛勞，謝謝您！</p></div></div><div class="col-md-6 col-lg-3" data-v-164bcefe><div class="card h-100 rounded-1 border-gray p-20" data-v-164bcefe><h4 class="fs-6 fw-bold" data-v-164bcefe>最低消費說明</h4><p class="text-notoSans" data-v-164bcefe>外送服務最低消費 500 元，才享有外送服務，請特別留意！</p><p class="text-notoSans" data-v-164bcefe>※ 以優惠折扣後金額計算</p></div></div><div class="col-md-6 col-lg-3" data-v-164bcefe><div class="card h-100 rounded-1 border-gray p-20" data-v-164bcefe><h4 class="fs-6 fw-bold" data-v-164bcefe>下單注意事項</h4><p class="text-notoSans" data-v-164bcefe>線上下單僅接收信用卡付款，無取貨付款的選項。</p><p class="text-notoSans" data-v-164bcefe>訂單送出後，恕無法取消或修改，下單前請務必確認餐點內容、自取或是外送服務。</p></div></div><div class="col-md-6 col-lg-3" data-v-164bcefe><div class="card h-100 rounded-1 border-gray p-20" data-v-164bcefe><h4 class="fs-6 fw-bold" data-v-164bcefe>其他說明</h4><p class="text-notoSans" data-v-164bcefe>總金額 2500 元 (含) 以上之大型訂單，請至少提前兩天直接來電訂購唷。</p></div></div></div></div></div>',1),D={class:"container"},H={class:"py-72"},T=r(()=>e("h3",{class:"text-center fw-bold mb-32"},"美味分類",-1)),q={class:"row gy-48"},A={class:"d-flex flex-column align-items-center"},G={class:"position-relative tasty-wrapper"},J=r(()=>e("div",{class:"tasty-overlay position-absolute w-100 h-100 top-0 start-0 z-1"},null,-1)),K={class:"position-absolute w-100 top-50 translate-middle-y"},Q={class:"d-flex justify-content-end"},W={class:"tasty-text bg-danger fs-5 fs-lg-4 fw-bold text-light text-notoSans text-align-start py-12 ps-8"},X=["src","alt"];function Y(t,o,v,p,Z,f){const u=n("LoadingComponent"),c=n("RouterLink"),g=n("SwiperComponent");return d(),i(h,null,[a(u,{active:t.isLoading,"onUpdate:active":o[0]||(o[0]=s=>t.isLoading=s)},null,8,["active"]),e("div",N,[e("div",O,[e("div",R,[B,a(c,{to:"/products",type:"button",class:"btn btn-secondary link-light text-notoSans w-50 py-8"},{default:l(()=>[_("點我訂餐 ")]),_:1})])])]),e("div",E,[e("div",z,[F,a(g,{products:t.sellProducts,class:"mb-48"},null,8,["products"]),e("div",P,[a(c,{to:"/categories/recommendation",class:"btn btn-secondary link-light text-notoSans px-52 py-8"},{default:l(()=>[_(" 查看更多")]),_:1})])])]),U,e("div",D,[e("div",H,[T,e("div",q,[(d(!0),i(h,null,S(t.categories,(s,x)=>(d(),i("div",{key:s.name,class:"col-6 col-md-3"},[e("div",A,[a(c,{to:`/categories/${s.path}`,ref_for:!0,ref:"tastyLinks",onMouseover:ee=>f.handleMouseOver(x),onMouseout:f.handleMouseOut},{default:l(()=>[e("div",G,[J,e("div",K,[e("div",Q,[e("div",W,k(s.name),1)])]),e("img",{src:s.imageUrl,alt:s.name,class:"w-100 h-100"},null,8,X)])]),_:2},1032,["to","onMouseover","onMouseout"])])]))),128))])])])],64)}const le=y(I,[["render",Y],["__scopeId","data-v-164bcefe"]]);export{le as default};
