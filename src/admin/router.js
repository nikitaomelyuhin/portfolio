import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import header from "./components/header";
import about from "./pages/about";
import login from "./pages/login";
import works from "./pages/works";
import reviews from "./pages/reviews";


const routes = [
  {
    path: "/",
    components: {
      default: about,
      header: header
    }
  },
  {
    path: "/login",
    component: login,
  },
  {
    path: "/works",
    component: works,
  },
  {
    path: "/reviews",
    component: reviews,
  },
];

export default new VueRouter({ routes });
