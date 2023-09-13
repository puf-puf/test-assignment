<template>
  <div>
    <div class="film-card__wrapper">
      <img src="@/assets/images/film-cover.jpg" alt="" />
      <div class="film-circle">
        <PercentageCircle
          style="z-index: 2"
          percentage="29"
          circleWidth="50"
          radius="15"
          backgroundColor="#000"
        />
      </div>
    </div>
    <div class="film-card__text">
      <h2>Barbie</h2>
      <p>Jul 19, 2023</p>
    </div>
  </div>
</template>

<script setup>
import PercentageCircle from '../basic-components/PercentageCircle.vue'
</script>

<style lang="scss">
@import '@/assets/scss/basic-components/LittleFilmCard.scss';
</style>
