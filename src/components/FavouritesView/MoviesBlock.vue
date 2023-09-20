<template>
  <section>
    <div class="favourites__wrapper">
      <FavouritesFilmCard v-for="film in store.favourites" :key="film.id" :data="film" />
    </div>
  </section>
</template>

<script setup>
import { useFavouritesStore } from '@/stores/favourites.js'
import FavouritesFilmCard from '@/components/basic-components/FavouritesFilmCard.vue'

const store = useFavouritesStore()
</script>

<style lang="scss">
@import '@/assets/scss/FavouritesView/MoviesBlock.scss';
</style>
