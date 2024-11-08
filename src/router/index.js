import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../components/layout/MainLayout.vue'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
  {
    path: '/menu',
    component: MainLayout,
    children: [
      { path: 'home', name: 'home', component: HomeView },  // Home 페이지
      { path: 'about', name: 'about', component: AboutView },  // About 페이지
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
