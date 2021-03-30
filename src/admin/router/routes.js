export default [
  {
    path: "/",
    component: () => import("../pages/about/about.vue"),
    meta: {
      title: "Блок «Обо мне»"
    }
  },
  {
    path: "/works",
    component: () => import("../pages/works/works.vue"),
    meta: {
      title: "Блок «Работы»"
    }
  },
  {
    path: "/reviews",
    component: () => import("../pages/reviews/reviews.vue"),
    meta: {
      title: "Блок «Отзывы»"
    }
  },
  {
    path: "/login",
    component: () => import("../pages/login/login.vue"),
    meta: {
      public: true
    }
  }
];