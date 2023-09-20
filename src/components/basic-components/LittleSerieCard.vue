<template>
  <div>
    <div class="film-card__wrapper">
      <img :src="`https://image.tmdb.org/t/p/w300/${serie.poster_path}`" alt="" />
      <div class="film-circle">
        <PercentageCircle
          style="z-index: 2"
          :percentage="serie.vote_average.toString().replace('.', '')"
          circleWidth="50"
          radius="15"
          backgroundColor="#000"
        />
      </div>
      <div class="film-favourite">
        <FavouriteHeart :movie="serie" type="tv" />
      </div>
    </div>
    <div class="film-card__text">
      <router-link :to="`/tv/${serie.id}`"
        ><h2>{{ serie.original_name }}</h2></router-link
      >
      <p>{{ serie.first_air_date }}</p>
    </div>
  </div>
</template>

<script setup>
import FavouriteHeart from '@/components/basic-components/FavouriteHeart.vue'
import PercentageCircle from '@/components/basic-components/PercentageCircle.vue'

const props = defineProps(['serie'])
</script>

<style lang="scss">
@import '@/assets/scss/basic-components/LittleFilmCard.scss';
</style>
