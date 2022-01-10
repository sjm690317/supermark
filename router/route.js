import {createRouter, createWebHistory} from 'vue-router'
const Home = () => import('../views/home/Home.vue');
const Cart = () => import('../views/cart/Cart.vue');
const Category = () => import('../views/category/Category.vue');
const Profile = () => import('../views/profile/Profile.vue');
// 2. 定义一些路由// 每个路由都需要映射到一个组件。
const routes = [
	{ path: '/', redirect: '/home'},
	{ path: '/home', component: Home },
	{ path: '/cart', component: Cart },
	{ path: '/category', component: Category },
	{ path: '/profile', component: Profile }
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router