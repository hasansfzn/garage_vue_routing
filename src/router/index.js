import AboutView from "@/views/AboutView.vue";
import HomeView from "@/views/HomeView.vue";
import ProductsView from "@/views/ProductsView.vue";
import NotFound from "@/views/NotFound.vue";
import ProductDetails from "@/views/ProductDetails.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/products",
      name: "products",
      component: ProductsView,
    },
    {
      path: "/product-:id-:name",
      name: "Product",
      component: ProductDetails,
    },
    {
      path: "/product-:id(.*)",
      name: "Product",
      component: ProductsView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

export default router;
