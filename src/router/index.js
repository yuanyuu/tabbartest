import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/Home/Home')
const Category = () => import('../views/Category/Category')
const Profile = () => import('../views/Profile/Profile')
const Shopcart = () => import('../views/Shopcart/Shopcart')
Vue.use(VueRouter)
const routes = [
  {
    path: '',
    redirect: '/Home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/shopcart',
    component: Shopcart
  }

]
const router = new VueRouter({
  routes,
  mode: 'history'
})
export default router
