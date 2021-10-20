import Vue from "vue";
import VueRouter from "vue-router";

// Container
const Container = () => import("@/components/containers/Container.vue");
// Home
const Home = () => import("@/views/Home/Home.vue");

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "hash",
  linkActiveClass: "active",
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes(),
});

export default router;

function configRoutes() {
  return [
    {
      // 測試
      path: "*",
      redirect: "/",
    },
    {
      path: "/",
      redirect: "/home",
      component: Container,
      children: [
        {
          path: "home",
          name: "Home",
          component: Home,
        },
      ],
    },
  ];
}
