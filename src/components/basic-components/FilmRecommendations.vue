<template>
  <div class="film-recommendations__wrapper">
    <div class="film-slide">
      <div class="film-image" @mouseover="show(true)" @mouseleave="show(false)">
        <img :src="`https://image.tmdb.org/t/p/w300/${data.poster_path}`" alt="" />
        <p :class="{ show: isDateShown }">07/04/2023</p>
      </div>
      <div class="info">
        <router-link v-if="data.media_type == 'movie'" :to="`/movie/${data.id}`">
          <h3 v-if="data.title">{{ data.title }}</h3>
        </router-link>
        <router-link v-if="data.media_type == 'tv'" :to="`/tv/${data.id}`">
          <h3 v-if="data.name">{{ data.name }}</h3>
        </router-link>
        <p v-if="data.vote_average">{{ parseVoteAverage(data.vote_average) }}%</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { parseVoteAverage } from '@/helpers/parseVoteAverage'

const isDateShown = ref(false)
function show(value) {
  isDateShown.value = value
}
const props = defineProps(['data'])
</script>

<style lang="scss">
@import '@/assets/scss/basic-components/FilmRecommendations.scss';
</style>
