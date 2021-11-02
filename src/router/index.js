import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/problem",
    name: "Problem",
    component: () => import("../components/Problem.vue")
  },
  {
    path: "/workWithUs",
    name: "WorkWithUs",
    component: () => import("../components/WorkWithUs.vue")
  },
  {
    path: "/preference",
    name: "Preference",
    component: () => import("../components/Preference.vue")
  },
  {
    path: "/command",
    name: "Command",
    component: () => import("../components/Command.vue")
  }
];

const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior: function(to) {
    if (to.hash) {
      return { selector: to.hash, behavior: "smooth" };
    } else {
      return { x: 0, y: 0 };
    }
  }
});

export default router;
