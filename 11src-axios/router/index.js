// //该文件专门用于创建整个应用的路由器
// import VueRouter from 'vue-router'
// //引入组件
// import About from "@/components/About";
// import Home from "@/components/Home";
//
// // //创建一个路由器
// // export default new VueRouter({
// //     routes:[
// //         {
// //             path:'/',
// //             component:Home
// //         },
// //         {
// //             path:'/about',
// //             component:About
// //         }
// //     ]
// // })
//
//
// // 2. 定义一些路由
// // 每个路由都需要映射到一个组件。
// // 我们后面再讨论嵌套路由。
// const routes = [
//     { path: '/', component: Home },
//     { path: '/about', component: About },
// ]
//
//
//
// // 3. 创建路由实例并传递 `routes` 配置
// // 你可以在这里输入更多的配置，但我们在这里
// // 暂时保持简单
// const router = VueRouter.createRouter({
//     // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
//     history: VueRouter.createWebHashHistory(),
//     routes, // `routes: routes` 的缩写
// })
//
// export default router




import {createRouter, createWebHashHistory, createWebHistory} from "vue-router"
// import VueRouter from 'vue-router'
// 1. 定义路由组件
import Home from "@/components/Home";
import About from "@/components/About";

// 2. 定义路由配置
const routes = [
    {
        path: "/",
        redirect: '/Home'
    },
    { path: "/Home", component: Home },
    { path: "/About", component: About },

];

// 3. 创建路由实例
const router = createRouter({
    // 4. 采用hash 模式
    history: createWebHashHistory(),
    // 采用 history 模式
    // history: createWebHistory(),
    routes, //使用上方定义的路由配置
});

export default router

