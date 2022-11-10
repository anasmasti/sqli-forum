import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import ThreadShowPage from "./components/ThreadShowPage.vue";
import NotFound from "./components/NotFound.vue";
import ForumShowPage from "./components/ForumShowPage.vue";
import ForumPage from "./pages/ForumPage.vue";
import CategoryShow from "./components/CategoryShow.vue";

// Init routes
const routes = [
  {
    path: "/",
    component: HomePage
  },
  {
    name: "",
    path: "/forums",
    component: ForumPage
  },
  {
    name: "threadShow",
    path: "/thread/:id",
    component: ThreadShowPage,
    props: true
  },
  {
    name: "Category",
    path: "/category/:id",
    component: CategoryShow,
    props: true
  },
  {
    name: "forumShow",
    path: "/forum/:id",
    component: ForumShowPage,
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
