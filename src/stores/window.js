import { ref} from 'vue'
import { defineStore } from 'pinia'

export const useWindowStore = defineStore('window', () => {
  const windowWidth = ref(0)

  function changeWindowWidth(value) {
    console.log(value)
    // windowWidth.value = value
  }

  return { changeWindowWidth, windowWidth }
})
