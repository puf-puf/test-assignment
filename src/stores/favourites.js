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
    favourites.value = favourites.value.filter((e) => e.id != id)
  }
  function addFavourite(movie) {
    console.log(favourites.value)
    if(!favourites.value.find((e) => e.id == movie.id)) favourites.value.push(movie)
  }

  function isInFavourites(id) {
    return favourites.value.find((e) => e.id == id)
  }

  watch(() => favourites, (state) => {
    localStorage.setItem('movies', JSON.stringify(state))
  }, {deep: true})

  return { favourites, isInFavourites, addFavourite, removeFavourite, clearFavourites }
})
