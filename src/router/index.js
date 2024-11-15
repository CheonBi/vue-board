import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "../components/layout/MainLayout.vue";
import AttractionView from "@/views/AttractionView.vue";
import PlannerView from "@/views/PlannerView.vue";
import TourView from "@/views/TourView.vue";
import HomeView from "@/views/HomeView.vue";

const routes = [
  {
    path: "/",
    component: MainLayout, // 메인 페이지
    children: [
      {
        path: "",
        name: "home",
        component: HomeView,
      },
    ],
  },
  {
    path: "/menu",
    component: MainLayout,
    children: [
      { path: "attraction", name: "attraction", component: AttractionView },
      { path: "planner", name: "planner", component: PlannerView },
      { path: "tour", name: "tour", component: TourView },
    ],
  },
  {
    path: "/user",
    name: "user",
    component : MainLayout,
    children : [
      {path : "login", name : "login", component: () => import("@/components/users/UserLoginVue.vue")},
      {path : "forgetPass", name : "forgetPass", component: () => import("@/components/users/FindPassVue.vue")},
      {path : "join", name : "join", component: () => import("@/components/users/JoinUserVue.vue")},
      {path : "profile", name : "profile", component: () => import("@/components/users/ProfileVue.vue")}
    ],
  },
  {

    path: "/notice",
    name: "notice",
    component : MainLayout,
    children : [
      {path : "list", name: "list", component: () => import("@/components/notice/NoticeList.vue")},
      {path : "regist", name: "regist", component: () => import("@/components/notice/RegistNotice.vue")},
      {path : "detail/:noticeid", name: "detail", component: () => import("@/components/notice/NoticeDetail.vue")}
    ]
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
