import getCookie from "@/helper/cookie/getCookie";
import { createRouter, createWebHistory } from "vue-router";
let HomePage = () => import("../pages/HomePage.vue");
let ThreadShowPage = () => import("../pages/ThreadShowPage.vue");
let NotFoundPage = () => import("../pages/NotFoundPage.vue");
let ForumShowPage = () => import("../pages/ForumShowPage.vue");
let CategoryShowPage = () => import("../pages/CategoryShowPage.vue");
let SignUpPage = () => import("../pages/SignUpPage.vue");
let SignInPage = () => import("../pages/SignInPage.vue");
let ProfilePage = () => import("../pages/ProfilePage.vue");

// Init routes
const routes = [
  {
    path: "/",
    component: HomePage,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "SignUp",
    path: "/sign-up",
    component: SignUpPage,
  },
  {
    name: "SignIn",
    path: "/sign-in",
    component: SignInPage,
  },
  {
    name: "profile",
    path: "/me",
    component: ProfilePage,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "threadShow",
    path: "/thread/:id",
    component: ThreadShowPage,
    props: true,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "Category",
    path: "/category/:id",
    component: CategoryShowPage,
    props: true,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "forumShow",
    path: "/forum/:id",
    component: ForumShowPage,
    props: true,
    meta: {
      requiresAuth: true,
    },
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

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    let isAuth = getCookie("isLoggedIn");
    if (!isAuth) {
      next({ name: "SignIn" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
