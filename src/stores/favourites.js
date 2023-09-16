import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useFavouritesStore = defineStore('favourites', () => {
  const favourites = ref([])
  function removeFavourite(id) {
    favourites.value.filter((e) => e.id != id)
  }
  function addFavourite(id) {
    favourites.value.push(id)
  }

  return { favourites, addFavourite, removeFavourite }
})
