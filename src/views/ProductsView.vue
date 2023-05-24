<script setup>
  import ProductList from "@/components/Products/ProductList.vue";
  import { useCarStore } from "@/stores/useCarStore";
  let cars = useCarStore();
  cars.fill();
</script>

<template>
  <div class="my-6">
    <h2 class="text-3xl font-semibold text-green-400 pb-8">
      We have currently
      <span class="font-bold text-4xl text-green-500 spanShadow"
        >{{ cars.carCount }}
      </span>
      cars in our Collection.
    </h2>

    <div>
      <ProductList :cars="cars.cars" />
    </div>
  </div>
</template>

<style scoped>
  .spanShadow {
    color: rgb(34 197 94);

    text-shadow: 2px 7px 5px rgba(74, 222, 128, 0.3),
      0px -4px 10px rgba(220, 252, 231, 0.3);
  }
</style>
