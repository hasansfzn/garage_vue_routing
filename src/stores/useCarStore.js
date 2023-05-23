import { defineStore } from "pinia";

export let useCarStore = defineStore("cars", {
  state: () => ({
    carCount: 0,
    cars: [],
  }),
  actions: {
    async fill() {
      let r = await import("../cars.json");
      this.$state = r.default;
    },
  },
});
