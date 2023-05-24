<script setup>
  // import { useCarStore } from "@/stores/useCarStore";
  import Product from "./Product.vue";
  // let cars = useCarStore();

  const props = defineProps({
    cars: Array,
  });
</script>

<template>
  <div
    class="grid gap-3"
    :class="[cars.length <= 6 ? 'grid-cols-3' : 'grid-cols-4']"
  >
    <Product
      class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      v-for="car in props?.cars"
      :key="car.id"
      :car="car"
    />
  </div>
</template>

<style scoped></style>
