import { createWebHistory , createRouter } from 'vue-router'

import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import ArkPullsCalculator from '@/views/ArkPullsCalculator.vue'

const routes = [
  { path: '/', name: "Home", component: Home },
  { path: '/about', name: "About", component: About },
  { path: '/apc', name: "Arknights Pulls Calculator", component: ArkPullsCalculator },
]

const router = createRouter({
  history: createWebHistory (),
  routes,
})

export default router;