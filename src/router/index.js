import { createWebHistory, createRouter } from "vue-router";

import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import ArkPullsCalculator from "@/views/ArkPullsCalculator.vue";
import FDnFD from "@/views/FDnFD.vue";
import TheLongestDay from "@/views/TheLongestDay.vue";
import Testlab from "@/views/Testlab.vue";
import JetPemRadio from "@/views/JetPemRadio.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  {
    path: "/arknights-pulls-calculator",
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
  {
    path: "/jet-pem-radio",
    name: "Jet Pem Radio",
    component: JetPemRadio,
  },
  {
    path: "/testlab",
    name: "Testlab",
    component: Testlab,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
