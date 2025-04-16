import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

import Index from "../pages/index.vue";
import Uid from "../pages/notes/uid.vue";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
