import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import About from "../views/About.vue";
import SingUp from "../views/SingUp.vue";
import ForgotPassword from "../views/ForgotPassword";

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
  },
  {
    path: "/SingUp",
    name: "SingUp",
    component: SingUp,
  },
  {
    path: "/ForgotPassword",
    name: "ForgotPassword",
    component: ForgotPassword,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
