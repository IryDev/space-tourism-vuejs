import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import Destination from "./components/Destination.vue";
import Crew from "./components/Crew.vue";
import Tech from "./components/Tech.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/destination",
      component: Destination,
    },
    {
      path: "/crew",
      component: Crew,
    },
    {
      path: "/technology",
      component: Tech,
    },
  ],
});

export default router;
