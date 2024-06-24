import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '@/components/HomeComponent.vue'
import LoginComponent from '@/components/Auth/LoginComponent.vue'
import RegisterComponent from '@/components/User/RegisterComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeComponent
    },
    {
      path: '/login',
      name: 'login',
      component: LoginComponent
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterComponent
    }
  ]
})

router.beforeEach(async (to, from) => {
  if ((localStorage.token == undefined || localStorage.token == '') && to.name !== 'login' && to.name !== 'register') {
      return { name: 'login' }
  }

  if ((localStorage.token != undefined && localStorage.token != '') && to.name === 'login') {
      console.log(from)
      return { name: 'home' }
  }
})

export default router
