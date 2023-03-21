import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../components/Home.vue"),
      name: "home",
    },
    {
      path: "/:channel",
      component: () => import("../page/Channel.vue"),
      props: true,
    },
  ],
});
