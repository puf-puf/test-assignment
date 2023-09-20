import { ref} from 'vue'
import { defineStore } from 'pinia'

export const useNavbarStore = defineStore('navbar', () => {
  const isSearchShowed = ref(false)

  function changeShowedStatus(value) {
    if(typeof value !== 'boolean') {
        console.error(`Not Boolean`) 
        return
    }
    isSearchShowed.value = value
  }

  return { changeShowedStatus, isSearchShowed }
})
