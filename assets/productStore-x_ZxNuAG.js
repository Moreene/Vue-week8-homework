import{l as a,I as i}from"./index-eyP1AHJE.js";import{a as s}from"./axios-G2rPRu76.js";var c={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_APIPATH:"taiwang",BASE_URL:"/Vue-week8-homework/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:r,VITE_APIPATH:e}=c,l=a("productStore",{state:()=>({products:[],productDetail:{},sellProducts:[],isLoading:!1}),actions:{async getProducts(){try{this.isLoading=!0;const t=await s.get(`${r}/api/${e}/products/all`);this.products=t.data.products,this.sellProducts=this.products.filter(o=>o.hot)}catch{console.log(err)}finally{this.isLoading=!1}},async getProduct(t){try{this.isLoading=!0,i.push(`/products/${t}`);const o=await s.get(`${r}/api/${e}/product/${t}`);this.productDetail=o.data.product}catch{console.log(err)}finally{this.isLoading=!1}}}});export{l as p};
