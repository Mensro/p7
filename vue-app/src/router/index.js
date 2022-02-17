import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import About from "../views/About.vue";
import SingUp from "../views/SingUp.vue";
import UserSetting from "../views/UserSetting";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
  },

  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/SingUp",
    name: "SingUp",
    component: SingUp,
  },
  {
    path: "/UserSetting",
    name: "UserSetting",
    component: UserSetting,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
/* ==> */
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAut)) {
    if (this.$store.getters.isLoggedIn) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

export default router;
