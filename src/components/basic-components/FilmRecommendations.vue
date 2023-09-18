<template>
  <div class="film-recommendations__wrapper">
    <div class="film-slide">
      <div class="film-image" @mouseover="show(true)" @mouseleave="show(false)">
        <img :src="`https://image.tmdb.org/t/p/w300/${data.poster_path}`" alt="" />
        <p :class="{ show: isDateShown }">07/04/2023</p>
      </div>
      <div class="info">
        <router-link :to="`/movie/${data.id}`">
          <h3>{{ data.title }}</h3>
        </router-link>
        <p>{{ data.vote_count }}%</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isDateShown = ref(false)
function show(value) {
  isDateShown.value = value
}

const props = defineProps(['data'])
</script>

<style lang="scss">
@import '@/assets/scss/basic-components/FilmRecommendations.scss';
</style>
