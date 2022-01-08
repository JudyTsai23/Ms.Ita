import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
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
      component: () => import("@/components/containers/Container.vue"),
      children: [
        {
          path: "home",
          name: "Home",
          component: () => import("@/views/Home/Home.vue"),
        },
        {
          path: "about",
          name: "About",
          component: () => import("@/views/About/About.vue"),
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
