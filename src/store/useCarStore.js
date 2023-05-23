import { defineStore } from "pinia";

export const useCarStore = defineStore("cars", {
  state: () => ({
    carCount: 0,
    cars: [],
  }),
});
