import { ref} from 'vue'
import { defineStore } from 'pinia'

export const useWindowStore = defineStore('window', () => {
  const windowWidth = ref(window.innerWidth)

  function changeWindowWidth(value) {
    windowWidth.value = value.target.outerWidth
  }

  return { changeWindowWidth, windowWidth }
})
