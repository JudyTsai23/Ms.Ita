import Vue from "vue";
import VueRouter from "vue-router";

// Container
const Container = () => import("@/components/containers/Container.vue");
// Home
const Home = () => import("@/views/Home/Home.vue");
const About = () => import("@/views/About/About.vue");
const NewsList = () => import("@/views/News/NewsList.vue");
const NewsDetail = () => import("@/views/News/NewsDetail.vue");

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
        {
          path: "about",
          name: "About",
          component: About,
        },
        {
          path: "news",
          component: () => import("@/views/News/News.vue"),
          children: [
            // NewsList will be rendered inside News's <router-view>
            // when /news is matched
            { path: "", component: () => import("@/views/News/NewsList.vue") },

            // NewsDetail will be rendered inside News's <router-view>
            // when /news/:id is matched
            { path: ":id(\\d+)", component: () => import("@/views/News/NewsDetail.vue") },
          ],
        },
      ],
    },
  ];
}
