<template>
  <section>
    <div>
      <p v-for="(movie, index) in store.favourites" :key="index">{{ movie }}</p>
    </div>
    <button @click="store.clearFavourites()">Clear Favourites</button>
  </section>
</template>

<script setup>
import { useFavouritesStore } from '@/stores/favourites.js'

const store = useFavouritesStore()
console.log(store.favourites)
</script>

<style lang="scss">
@import '@/assets/scss/FavouritesView/MoviesBlock.scss';
</style>
