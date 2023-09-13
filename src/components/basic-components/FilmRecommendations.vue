<template>
  <div class="film-slide">
    <div :ref="index" class="film-image" @mouseover="show(true)" @mouseleave="show(false)">
      <img src="@/assets/images/recommendation-film-cover.jpg" alt="" />
      <p :class="{ show: isDateShown }">07/04/2023</p>
    </div>
    <div></div>
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
