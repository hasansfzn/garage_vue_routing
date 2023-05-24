<script setup>
  import { useRouter } from "vue-router";
  const router = useRouter();
  defineProps({
    car: Object,
  });
</script>

<template>
  <div>
    <div>
      <img
        class="rounded-t-lg"
        :src="car.img"
        alt=""
      />
    </div>
    <div class="p-5">
      <div>
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ car.name }}
        </h5>
      </div>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {{ car.body }}
      </p>
      <button
        @click="router.push(`/product-${car.id}`)"
        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Read more
        <svg
          aria-hidden="true"
          class="w-4 h-4 ml-2 -mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped></style>
