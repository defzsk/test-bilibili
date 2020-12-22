import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/register.vue'
import Login from '../views/Login.vue'
import Userinfo from '../views/userinfo.vue'
import Edit from '../views/Edit.vue'
import Article from '../views/Article.vue'


Vue.use(VueRouter)

const routes = [
  {// home页设为根目录
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      keepalive: true
    }

  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/userinfo',
    name: 'Userinfo',
    component: Userinfo,
    meta: {
      istoken: true
    }

  },
  {
    path: '/edit',
    name: 'Edit',
    component: Edit,
    meta: {
      istoken: true
    },

  },
  {
    path: '/article/:id',
    name: 'Article',
    component: Article,
  }



]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes

})
router.beforeEach((to, from, next) => {
  if (!localStorage.getItem('token') && !localStorage.getItem('id') && to.meta.istoken == true) {
    router.push('/login')
    Vue.prototype.$msg.fail('请重新登录')
    return
  }
  next()
})
export default router
