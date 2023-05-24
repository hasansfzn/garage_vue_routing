<script setup>
  import { useCarStore } from "@/stores/useCarStore";
  import Product from "./Product.vue";
  let cars = useCarStore();
</script>

<template>
  <div class="grid grid-cols-4 gap-3">
    <Product
      class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      v-for="car in cars?.cars"
      :key="car.id"
      :car="car"
    />
  </div>
</template>

<style scoped></style>
