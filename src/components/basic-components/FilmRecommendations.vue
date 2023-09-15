<template>
  <div class="film-recommendations__wrapper">
    <div class="film-slide">
      <div class="film-image" @mouseover="show(true)" @mouseleave="show(false)">
        <img src="@/assets/images/recommendation-film-cover.jpg" alt="" />
        <p :class="{ show: isDateShown }">07/04/2023</p>
      </div>
      <div class="info">
        <h3>Ciao</h3>
        <p>60%</p>
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
</script>

<style lang="scss">
@import '@/assets/scss/basic-components/FilmRecommendations.scss';
</style>
