<script setup>
  import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="mx-3">
    <nav class="flex p-4">
      <RouterLink
        to="/"
        class="mb-2 p-1 font-bold text-xl"
        >Car Garage BD</RouterLink
      >
      <div class="ml-auto mr-0 flex">
        <RouterLink
          to="/"
          active-class="active"
          class="router_nav mr-4 mb-2"
          >Home</RouterLink
        >
        <RouterLink
          to="/about"
          active-class="active"
          class="router_nav mb-2"
          >About</RouterLink
        >
      </div>
    </nav>
    <div>
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
  .router_nav {
    padding: 1px;
    text-decoration: none;
    font-weight: 500;
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
</style>
