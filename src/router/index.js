import {createRouter,createWebHistory} from 'vue-router'
const home = ()=> import('../views/home/Home.vue')
const cart = ()=> import('../views/cart/Cart.vue')
const  me= ()=> import('../views/me/Me.vue')
const order = ()=> import('../views/order/Order.vue')
const store = ()=> import('../views/store/Store.vue')
const routes= [
    {
        path:'/',
        redirect:'home'
    },
    {

        path:'/home',
        name:'home',
        component:home,
        meta:{names:'home'}
    },
    {

        path:'/cart',
        name:'cart',
        component:cart,
        meta:{names:'cart'}
    },
    {
        path:'/me',
        name:'me',
        component:me,
        meta:{names:'me'}
    },
    {

        path:'/order',
        name:'order',
        component:order,
        meta:{names:'order'}
    },
    {
        path:'/store',
        name:'store',
        component:store,
    }
]
const router = createRouter({
    history :createWebHistory(),
    routes
})
export default router