import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import ThreadShowPage from "./components/ThreadShowPage.vue";
import NotFound from "./components/NotFound.vue";

// Init routes
const routes = [
  {
    name: "",
    path: "/",
    component: HomePage
  },
  {
    name: "threadShow",
    path: "/thread/:id",
    component: ThreadShowPage,
    props: true
  },
  {
    name: "notFound",
    path: "/:catchAll(.*)",
    component: NotFound
  }
];

// Create router
const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;
