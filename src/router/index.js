import { createRouter, createWebHistory } from "vue-router";
let HomePage = () => import("../pages/HomePage.vue");
let ThreadShowPage = () => import("../pages/ThreadShowPage.vue");
let NotFoundPage = () => import("../pages/NotFoundPage.vue");
let ForumShowPage = () => import("../pages/ForumShowPage.vue");
let CategoryShowPage = () => import("../pages/CategoryShowPage.vue");
let ForumPage = () => import("../pages/CategoryShowPage.vue");
let SignUpPage = () => import("../pages/SignUpPage.vue");
let SignInPage = () => import("../pages/SignInPage.vue");
let ProfilePage = () => import("../pages/ProfilePage.vue");

// Init routes
const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/sign-up",
    component: SignUpPage,
  },
  {
    path: "/sign-in",
    component: SignInPage,
  },
  {
    name: "",
    path: "/forums",
    component: ForumPage,
  },
  {
    name: "profile",
    path: "/me",
    component: ProfilePage,
  },
  {
    name: "threadShow",
    path: "/thread/:id",
    component: ThreadShowPage,
    props: true,
  },
  {
    name: "Category",
    path: "/category/:id",
    component: CategoryShowPage,
    props: true,
  },
  {
    name: "forumShow",
    path: "/forum/:id",
    component: ForumShowPage,
    props: true,
  },
  {
    name: "notFound",
    path: "/:catchAll(.*)",
    component: NotFoundPage,
  },
];

// Create router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
