<template>
  <section>
    <div v-if="props.data" class="movies-block">
      <div class="movies__wrapper">
        <LittleFilmCard
          v-for="movie in props.data.results"
          :key="movie.id"
          :movie="movie"
          class="movie-card"
        />
      </div>
      <PagePagination :pagesLength="100" :routeLink="`/movies/`" />
    </div>
    <p v-else>loading...</p>
  </section>
</template>

<script setup>
import LittleFilmCard from '../basic-components/LittleFilmCard.vue'
import PagePagination from '../basic-components/PagePagination.vue'

const props = defineProps(['data'])
</script>

<style lang="scss">
@import '@/assets/scss/CategoryMovieView/MoviesBlock.scss';
</style>
