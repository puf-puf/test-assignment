<template>
  <div>
    <div class="film-card__wrapper">
      <img :src="`https://image.tmdb.org/t/p/w300/${movie.poster_path}`" alt="" />
      <div class="film-circle">
        <PercentageCircle
          style="z-index: 2"
          :percentage="movie.vote_average.toString().replace('.', '')"
          circleWidth="50"
          radius="15"
          backgroundColor="#000"
        />
      </div>
    </div>
    <div class="film-card__text">
      <router-link :to="`/movie/${movie.id}`"
        ><h2>{{ movie.original_title }}</h2></router-link
      >
      <p>{{ movie.release_date }}</p>
    </div>
  </div>
</template>

<script setup>
import PercentageCircle from '../basic-components/PercentageCircle.vue'

const props = defineProps(['movie'])
</script>

<style lang="scss">
@import '@/assets/scss/basic-components/LittleFilmCard.scss';
</style>
