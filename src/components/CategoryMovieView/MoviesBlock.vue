<template>
  <section>
    <div class="movies-block">
      <div class="movies__wrapper">
        <LittleFilmCard v-for="(item, index) in items" :key="index" class="movie-card" />
      </div>
      <PagePagination :pagesLength="pages" :routeLink="`/movies/`" />
    </div>
  </section>
</template>

<script setup>
import LittleFilmCard from '../basic-components/LittleFilmCard.vue'
import PagePagination from '../basic-components/PagePagination.vue'

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
const pages = 100
</script>

<style lang="scss">
@import '@/assets/scss/CategoryMovieView/MoviesBlock.scss';
</style>
