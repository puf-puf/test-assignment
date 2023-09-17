import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'

export const useFavouritesStore = defineStore('favourites', () => {
  const favourites = ref([])

  const moviesInLocalStorage = localStorage.getItem("movies")

  if (moviesInLocalStorage) {
    favourites.value = JSON.parse(moviesInLocalStorage)._value
  }
  function clearFavourites() {
    favourites.value = []
  }
  function removeFavourite(id) {
    favourites.value.filter((e) => e.id != id)
  }
  function addFavourite(id) {
    console.log(this.favourites)
    favourites.value.push(id)
  }

  watch(() => favourites, (state) => {
    localStorage.setItem('movies', JSON.stringify(state))
  }, {deep: true})

  return { favourites, addFavourite, removeFavourite, clearFavourites }
})
