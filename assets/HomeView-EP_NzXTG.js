import{_ as y,R as w,m as h,h as d,o as c,c as i,i as e,b as a,j as l,F as _,r as S,k as u,e as m,t as k,p as L,g as C}from"./index-r1H8yIGC.js";import{p as M}from"./productStore-Er53w1HA.js";import{c as $}from"./categoryStore-2a4muAgu.js";import{S as V}from"./SwiperComponent-20uDouWZ.js";import{L as j}from"./LoadingComponent-cf4BCbl2.js";import"./axios-G2rPRu76.js";import"./cartStore-LMquo9uB.js";import"./sweetalert-1w20vat0.js";const I={components:{RouterLink:w,SwiperComponent:V,LoadingComponent:j},methods:{handleMouseOver(t){this.$refs.tastyLinks.forEach((v,p)=>{p!==t&&v.$el.classList.add("hovered")})},handleMouseOut(){this.$refs.tastyLinks.forEach(o=>{o.$el.classList.remove("hovered")})}},computed:{...h(M,["sellProducts","isLoading"]),...h($,["categories"])}},r=t=>(L("data-v-a1257f7a"),t=t(),C(),t),N={class:"banner bg-repeat-no bg-size-cover d-flex justify-content-center align-items-center"},O={class:"banner-box rounded-4 d-flex justify-content-center align-items-center"},R={class:"text-center"},B=u('<h2 class="fw-bold" data-v-a1257f7a>泰式美味線上點</h2><h2 class="fw-bold mb-24" data-v-a1257f7a>選擇泰汪，越吃越旺！</h2><h3 class="text-notoSans text-danger fs-5 mb-32" data-v-a1257f7a><i class="bi bi-balloon fs-5 text-danger" data-v-a1257f7a></i> 線上訂餐，再享85折優惠 <i class="bi bi-balloon fs-5 text-danger" data-v-a1257f7a></i></h3>',3),E={class:"container"},z={class:"py-72"},F=r(()=>a("h3",{class:"text-center fw-bold mb-16"},"暢銷餐點",-1)),P={class:"text-center"},U=u('<div class="bg-wave py-72" data-v-a1257f7a><div class="container" data-v-a1257f7a><h3 class="text-center fw-bold mb-32" data-v-a1257f7a>訂購需知</h3><div class="row gy-48 gy-lg-0" data-v-a1257f7a><div class="col-md-6 col-lg-3" data-v-a1257f7a><div class="card h-100 rounded-1 border-gray p-20" data-v-a1257f7a><h4 class="fs-6 fw-bold" data-v-a1257f7a>慶祝開幕，全館免運費</h4><p class="text-notoSans" data-v-a1257f7a>截至2024/12/31止，全館免運費，限制距離在15km以內才提供外送服務。</p><p class="text-notoSans" data-v-a1257f7a>※ 外送路況多變，抵達時間可能會提前或延後15~20分鐘，還請體諒外送人員辛勞，謝謝您！</p></div></div><div class="col-md-6 col-lg-3" data-v-a1257f7a><div class="card h-100 rounded-1 border-gray p-20" data-v-a1257f7a><h4 class="fs-6 fw-bold" data-v-a1257f7a>最低消費說明</h4><p class="text-notoSans" data-v-a1257f7a>外送服務最低消費 500 元，才享有外送服務，請特別留意！</p><p class="text-notoSans" data-v-a1257f7a>※ 以優惠折扣後金額計算</p></div></div><div class="col-md-6 col-lg-3" data-v-a1257f7a><div class="card h-100 rounded-1 border-gray p-20" data-v-a1257f7a><h4 class="fs-6 fw-bold" data-v-a1257f7a>下單注意事項</h4><p class="text-notoSans" data-v-a1257f7a>線上下單僅接收信用卡付款，無取貨付款的選項。</p><p class="text-notoSans" data-v-a1257f7a>訂單送出後，恕無法取消或修改，下單前請務必確認餐點內容、自取或是外送服務。</p></div></div><div class="col-md-6 col-lg-3" data-v-a1257f7a><div class="card h-100 rounded-1 border-gray p-20" data-v-a1257f7a><h4 class="fs-6 fw-bold" data-v-a1257f7a>其他說明</h4><p class="text-notoSans" data-v-a1257f7a>總金額 2500 元 (含) 以上之大型訂單，請至少提前兩天直接來電訂購唷。</p></div></div></div></div></div>',1),D={class:"container"},H={class:"py-72"},T=r(()=>a("h3",{class:"text-center fw-bold mb-32"},"美味分類",-1)),q={class:"row gy-48"},A={class:"d-flex flex-column align-items-center"},G={class:"position-relative tasty-wrapper"},J=r(()=>a("div",{class:"tasty-overlay position-absolute w-100 h-100 top-0 start-0 z-1"},null,-1)),K={class:"position-absolute w-100 top-50 translate-middle-y"},Q={class:"d-flex justify-content-end"},W={class:"tasty-text bg-danger fs-5 fs-lg-4 fw-bold text-light text-notoSans text-align-start py-12 ps-8"},X=["src","alt"];function Y(t,o,v,p,Z,f){const g=d("LoadingComponent"),n=d("RouterLink"),b=d("SwiperComponent");return c(),i(_,null,[e(g,{active:t.isLoading,"onUpdate:active":o[0]||(o[0]=s=>t.isLoading=s)},null,8,["active"]),a("div",N,[a("div",O,[a("div",R,[B,e(n,{to:"/products",type:"button",class:"btn btn-secondary link-light text-notoSans w-50 py-8"},{default:l(()=>[m("點我訂餐 ")]),_:1})])])]),a("div",E,[a("div",z,[F,e(b,{products:t.sellProducts,class:"mb-48"},null,8,["products"]),a("div",P,[e(n,{to:"/categories/recommendation",class:"btn btn-secondary link-light text-notoSans px-52 py-8"},{default:l(()=>[m(" 查看更多")]),_:1})])])]),U,a("div",D,[a("div",H,[T,a("div",q,[(c(!0),i(_,null,S(t.categories,(s,x)=>(c(),i("div",{key:s.name,class:"col-6 col-md-3"},[a("div",A,[e(n,{to:`/categories/${s.path}`,ref_for:!0,ref:"tastyLinks",onMouseover:aa=>f.handleMouseOver(x),onMouseout:f.handleMouseOut},{default:l(()=>[a("div",G,[J,a("div",K,[a("div",Q,[a("div",W,k(s.name),1)])]),a("img",{src:s.imageUrl,alt:s.name,class:"w-100 h-100"},null,8,X)])]),_:2},1032,["to","onMouseover","onMouseout"])])]))),128))])])])],64)}const la=y(I,[["render",Y],["__scopeId","data-v-a1257f7a"]]);export{la as default};
