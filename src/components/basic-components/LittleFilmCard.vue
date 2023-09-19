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
        <iconHeart
          v-if="store.isInFavourites(movie.id)"
          @click="store.removeFavourite(movie.id)"
          width="40"
          height="40"
          fill="red"
        />
        <iconHeart
          v-else
          @click="store.addFavourite({ id: movie.id, name: movie.original_title, type: 'movie' })"
          width="40"
          height="40"
          fill="white"
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
import { parseVoteAverage } from '@/helpers/parseVoteAverage'
import iconHeart from '../icons/iconHeart.vue'

import { useFavouritesStore } from '@/stores/favourites.js'

const store = useFavouritesStore()

const props = defineProps(['movie'])
</script>

<style lang="scss">
@import '@/assets/scss/basic-components/LittleFilmCard.scss';
</style>
