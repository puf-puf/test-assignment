<template>
  <section class="trending-block">
    <div class="heading">
      <h2>Trending</h2>
      <div class="selector">
        <h3>Today</h3>
        <h3>This Week</h3>
      </div>
    </div>
    <div class="film-cards">
      <div class="film-card__wrapper">
        <img src="@/assets/images/film-cover.jpg" alt="" />
        <div class="film-circle">
          <PercentageCircle class="film-circle" percentage="20" circleWidth="50" radius="15" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import PercentageCircle from '../basic-components/PercentageCircle.vue'
</script>

<style lang="scss">
@import '@/assets/scss/MainView/TrendingBlock.scss';
</style>
