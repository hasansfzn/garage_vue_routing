<script setup>
  import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav>
    <RouterLink
      to="/"
      active-class="active"
      class="router_nav ml-4 text-xl"
      >Home</RouterLink
    >
    <RouterLink
      to="/about"
      active-class="active"
      class="router_nav"
      >About</RouterLink
    >
  </nav>
  <div>
    <RouterView />
  </div>
</template>

<style scoped>
  .router_nav {
    padding: 1px;
    text-decoration: none;
  }
  .active,
  .router_nav:hover {
    border-bottom: 1px solid green;
  }
</style>
