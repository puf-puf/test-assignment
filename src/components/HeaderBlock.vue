<template>
  <header>
    <div class="nav-wrapper">
      <img src="../assets/images/logo.svg" alt="" />
      <nav>
        <ul>
          <li>Movies</li>
          <li>TV Shows</li>
          <li>People</li>
          <li>More</li>
        </ul>
        <!-- <div class="test" @mouseover="showPop(true)" @mouseleave="showPop(false)">
          <h2>Movies</h2>
          <div v-if="showPopup">
            <RouterLink to="/movie">Popular</RouterLink>
            <RouterLink to="/movie/now-playing">Now Playing</RouterLink>
            <RouterLink to="/movie/now-playing">Upcoming</RouterLink>
            <RouterLink to="/movie/now-playing">Top Rated</RouterLink>
          </div>
        </div> -->
      </nav>
    </div>
    <!-- <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->
  </header>
</template>

<script setup>
// import { ref } from 'vue'
// const showPopup = ref(false)
// function showPop(value) {
//   showPopup.value = value
//   console.log(showPopup.value)
// }
</script>

<style lang="scss">
@import '../assets/scss/HeaderBlock.scss';
</style>
