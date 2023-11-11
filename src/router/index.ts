import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import { loadingStore } from '@/stores/loading';
import { headerStore } from '@/stores/header';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/LoginPage.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/products',
    name: 'Our Foods',
    component: () => import('../views/ProductsPage.vue'),
  },
  {
    path: '/loading',
    name: 'Loading',
    component: () => import('@/components/loading/Loading.vue')
  },
  {
    path: '/order-summary',
    name: 'Order Summary',
    component: () => import('../views/OrderSummaryPage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  console.log('Before route loaded')
  const loading = loadingStore();
  
  loading.setLoading(true);
  
  setTimeout(() => {
    loading.setLoading(false);
  }, 200)

  const header = headerStore();

  if(to.path == '/login') {
    header.setHeader(false)
  }
  next()
})

// router.beforeResolve(() => {
//   console.log('After route loaded, before navigation')
//   const loading = loadingStore();
//   setTimeout(() => {
//     loading.setLoading(false);
//   }, 200)
// })

router.afterEach((to, from) => {
  console.log('After navigation')
  const loading = loadingStore();
  
  loading.setLoading(true);
  
  setTimeout(() => {
    loading.setLoading(false);
  }, 200)

  const header = headerStore();
  if(to.path !== '/login') {
    header.setHeader(true)
  }
})
export default router
