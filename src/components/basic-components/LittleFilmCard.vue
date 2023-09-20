<template>
  <div>
    <div class="film-card__wrapper">
      <img :src="`https://image.tmdb.org/t/p/w300/${movie.poster_path}`" alt="" />
      <div class="film-circle">
        <PercentageCircle
          style="z-index: 2"
          :percentage="parseVoteAverage(movie.vote_average)"
          circleWidth="50"
          radius="15"
          backgroundColor="#000"
        />
      </div>
      <div class="film-favourite">
        <FavouriteHeart :movie="movie" type="movie" />
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
import { parseVoteAverage } from '@/helpers/parseVoteAverage'
import FavouriteHeart from '@/components/basic-components/FavouriteHeart.vue'

import { useFavouritesStore } from '@/stores/favourites.js'

const store = useFavouritesStore()

const props = defineProps(['movie'])
</script>

<style lang="scss">
@import '@/assets/scss/basic-components/LittleFilmCard.scss';
</style>
