import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

import Index from "../pages/index.vue";
import Uid from "../pages/notes/uid.vue";
import NotFound from "../components/404.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Index,
    name: "index",
  },
  {
    path: "/notes/:uid",
    component: Uid,
    name: "notes.uid",
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
