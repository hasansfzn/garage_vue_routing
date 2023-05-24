<script setup>
  import { computed } from "vue";
  import { RouterLink, RouterView } from "vue-router";
  import { useRoute } from "vue-router";

  const route = useRoute();

  let pathMatch = computed(() => {
    return route.path.startsWith("/product");
  });
</script>

<template>
  <div class="mx-3">
    <nav class="flex p-4">
      <RouterLink
        to="/"
        class="mb-2 font-bold text-xl"
        >Car Garage BD</RouterLink
      >
      <div class="ml-auto mr-0 flex">
        <RouterLink
          to="/"
          active-class="active"
          class="router_nav mb-2"
          >Home</RouterLink
        >
        <RouterLink
          to="/about"
          active-class="active"
          class="router_nav mb-2"
          >About</RouterLink
        >
        <RouterLink
          to="/products"
          active-class="active"
          class="router_nav mb-2"
          :class="{ active: pathMatch }"
          >Products</RouterLink
        >
      </div>
    </nav>
    <div class="px-4">
      <RouterView v-slot="{ Component }">
        <Transition
          name="fade"
          mode="out-in"
        >
          <component
            :is="Component"
            :key="route.path"
          />
        </Transition>
      </RouterView>
    </div>
  </div>
</template>

<style scoped>
  .router_nav {
    padding: 1px;
    text-decoration: none;
    font-weight: 500;
    margin-right: 10px;
  }

  .router_nav::after {
    content: "";
    display: block;
    background: green;
    height: 2px;
    width: 0;
    transition: width 0.3s;
  }

  .active::after,
  .router_nav:hover::after {
    width: 100%;
  }

  /* .fade-enter-from {
    transition: translate(0, 100%);
    opacity: 0;
  } */

  .fade-enter-from {
    opacity: 0;
    /* transform: translate(100%, 0); */
  }
  .fade-leave-to {
    opacity: 0;
    transform: translate(-100%, 0);
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease-out;
    transition: 0.5s;
  }
</style>
