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
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
