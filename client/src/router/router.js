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
        path: "/face1",
        component: () => import("../page/Face1.vue"),
        name: "face1",
      },
      {
        path: "/face2",
        component: () => import("../page/Face2.vue"),
        name: "face2",
      },
      {
        path: "/face3",
        component: () => import("../page/Face3.vue"),
        name: "face3",
      },
    //   {
    //     path: "/:notFound(.*)",
    //     component: () => import("../page/PageNotFound/NotFoundPage.vue"),
    //     name: "NotFound",
    //   },
    ],
  });
  // router.beforeEach((to, from, next) => {
  //   const token = getJwtToken();
  //   if (!token && to.path !== '/login') {
  //     next({ path: '/login' });
  //   }
  //   if (token && to.path === '/login') {
  //     next(from.path);
  //   } else {
  //     next();
  //   }
  // });
  