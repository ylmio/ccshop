import Vue from "vue"
import Router from "vue-router"

//引入一级路由
import DashBoard from "./../views/dashboard/DashBoard"
//路由懒加载
const Cart = ()=>import("./../views/cart/Cart.vue");
const Category = ()=>import("./../views/category/Category.vue");
const Home = ()=>import("./../views/home/Home.vue");
const Mine = ()=>import("./../views/mine/Mine.vue");

//引入组件相关
const Order = ()=>import("./../views/order/Order.vue");
const MyAddress = ()=>import("./../views/order/children/MyAddress.vue");

Vue.use(Router);

export default new Router({
    routes:[
        { path:"/",redirect:"/dashboard"},
        {
            path:"/dashboard",
            name:"dashboard",
            component:DashBoard,
            children:[
                {path:"/dashboard",redirect:"/dashboard/home"},
                {path:"home",name:"home",component:Home,meta: { keepAlive: true }},
                {path:"cart",name:"cart",component:Cart},
                {path:"category",name:"category",component:Category,meta: { keepAlive: true }},
                {path:"mine",name:"mine",component:Mine},
            ]
        },
        {
            path:"/confirmOrder",
            name:"order",
            component:Order,
            children: [
                {path:"myAddress",name:"myAddress",component:MyAddress}
            ]
        },
    ]
});
