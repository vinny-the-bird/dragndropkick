import { createWebHistory, createRouter } from "vue-router";

import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import ArkPullsCalculator from "@/views/ArkPullsCalculator.vue";
import FDnFD from "@/views/FDnFD.vue";
import TheLongestDay from "@/views/TheLongestDay.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  {
    path: "/apc",
    name: "Arknights Pulls Calculator",
    component: ArkPullsCalculator,
  },
  {
    path: "/fast-dungeon-and-furious-dragon",
    name: "Fast Dungeon & Furious Dragon",
    component: FDnFD,
  },
  {
    path: "/the-longest-day",
    name: "The Longest Day",
    component: TheLongestDay,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
