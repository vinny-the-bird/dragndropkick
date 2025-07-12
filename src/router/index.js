import { createMemoryHistory, createRouter } from 'vue-router'

import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import ArkPullsCalculator from '@/views/ArkPullsCalculator.vue'

const routes = [
  { path: '/', name: "Home", component: Home },
  { path: '/about', name: "About", component: About },
  { path: '/apc', name: "Arknights Pulls Calculator", component: ArkPullsCalculator },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;