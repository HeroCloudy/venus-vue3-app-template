import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDemoStore = defineStore(
  'demoStore',
  () => {
    const counter = ref<number>(0)

    const increment = () => {
      counter.value++
    }

    return {
      counter,
      increment,
    }
  },
  {
    persist: true,
  },
)
