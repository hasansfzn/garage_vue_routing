<script setup>
  import { useCarStore } from "@/stores/useCarStore";
  import { computed } from "vue";
  let cars = useCarStore();
  cars.fill();

  import { useRoute } from "vue-router";
  const route = useRoute();

  const car = computed(() => {
    return cars.cars.find((c) => c.id === parseInt(route.params.id));
  });
</script>

<template>
  <div
    class="container mx-auto px-4 md:px-48 md:flex flex-col md:place-content-center"
  >
    <!-- product details div  -->
    <div class="productDetail">
      <h3 class="text-green-400 font-bold text-4xl mt-8 my-4">
        {{ car.name }}
      </h3>
      <div class="my-2">
        <button
          type="button"
          class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Go Back
        </button>
      </div>
      <div class="mb-4 mt-2 flex gap-6 flex-wrap lg:flex-nowrap">
        <div class="basis-1/2 w-full">
          <img
            :src="car.img"
            :alt="car.name"
            class="w-full max-h-80 h-full border border-gray-100 shadow-md shadow-green-100"
          />
        </div>
        <div class="text-justify space-y-2 basis-1/2">
          <h2 class="text-3xl font-bold mb-4">{{ car.name }}</h2>
          <div class="text-gray-400">
            <h3 class="text-xl font-bold mb-3">
              <span>Car Body: {{ car.body }} </span>
              <span class="ms-6"> Made By: {{ car.make }}</span>
            </h3>
            <h3 class="text-xl font-bold">
              <span>Mode of {{ car.year }} </span
              ><span class="ms-6">Price $ {{ car.price }}</span>
            </h3>
            <p class="text-justify text-semibold text-lg mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              delectus adipisci iure laudantium! Voluptas unde vero ipsa?
              Architecto, voluptates. Accusantium quas obcaecati aliquid quidem,
              sunt hic esse consequuntur possimus earum minus nisi ipsa sed non
              reprehenderit ea placeat totam dicta. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Unde laboriosam et autem delectus
              placeat vero nam corporis quasi consequatur porro.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .productDetail::after {
    display: block;
    margin-top: 30px;
    content: " ";
    height: 3px;
    width: 100%;
    background: rgb(232, 90, 90);
  }
</style>
