<template>
  <section>
    <h2>Current Season</h2>
    <div class="season-wrapper">
      <img src="@/assets/images/season-cover.jpg" alt="" />
      <div class="season-info">
        <div class="season-heading">
          <h2>Season <span>3</span></h2>
          <div class="season-data">
            <div class="rating">
              <iconStar fill="white" />
              <span>6.0</span>
            </div>
            <span>•</span>
            <p>2023</p>
            <span>•</span>
            <span>8</span>
            <p>Episodes</p>
          </div>
        </div>
        <div class="season-text">
          <p>
            Destiny brought them together. Dangerous forces are trying to tear them apart. Geralt
            and Yennefer fight to keep Ciri safe as war brews on the Continent.
          </p>
        </div>
        <div class="season-data">
          <iconCalendar fill="white" width="30" height="30" />
          <p class="last-serie">The Cost of Chaos</p>
          <p class="date">(<span>3</span>x<span>8</span>, <span>July 27, 2023</span>)</p>
          <p class="final">Season Finale</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import iconStar from '@/components/icons/iconStar.vue'
import iconCalendar from '@/components/icons/iconCalendar.vue'
</script>

<style lang="scss">
@import '@/assets/scss/SelectedSerieView/CurrentSeasonBlock.scss';
</style>
