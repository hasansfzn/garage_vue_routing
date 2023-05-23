<script setup>
  import TopContainer from "@/components/Home/TopContainer.vue";
  import { useCarStore } from "@/stores/useCarStore.js";

  let cars = useCarStore();

  cars.fill();
</script>

<template>
  <div class="mt-6">
    <TopContainer />
  </div>
</template>

<style scoped></style>
