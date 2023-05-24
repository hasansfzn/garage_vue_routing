<script setup>
  import TopContainer from "@/components/Home/TopContainer.vue";
  import { useCarStore } from "@/stores/useCarStore.js";
  import ProductsView from "./ProductsView.vue";

  let cars = useCarStore();

  cars.fill();
</script>

<template>
  <div class="mt-6">
    <TopContainer />
    <ProductsView />
  </div>
</template>

<style scoped></style>
