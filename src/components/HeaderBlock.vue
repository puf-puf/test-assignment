<template>
  <header>
    <div class="nav-wrapper">
      <div class="nav-side-left">
        <img src="../assets/images/logo.svg" alt="" />
        <nav>
          <ul>
            <DropDown title="Movies" :items="[`Popular`, `Now Playing`, `Upcoming`, `Top Rated`]" />
            <DropDown title="TV Shows" :items="[`Popular`, `Airing Today`, `On TV`, `Top Rated`]" />
            <DropDown title="People" :items="[`Popular People`]" />
            <DropDown title="More" :items="[`Discussions`, `Leaderboard`, `Support`, `API`]" />
          </ul>
        </nav>
      </div>
      <div class="nav-side-right">
        <iconPlus />
        <!-- <img :src="iconPlus" alt="" /> -->
        <button>EN</button>
        <ul>
          <li>Login</li>
          <li>Join TMDB</li>
        </ul>
        <iconSearch />
      </div>
      <!-- <div class="test" @mouseover="showPop(true)" @mouseleave="showPop(false)">
          <h2>Movies</h2>
          <div v-if="showPopup">
            <RouterLink to="/movie">Popular</RouterLink>
            <RouterLink to="/movie/now-playing">Now Playing</RouterLink>
            <RouterLink to="/movie/now-playing">Upcoming</RouterLink>
            <RouterLink to="/movie/now-playing">Top Rated</RouterLink>
          </div>
        </div> -->
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
import iconPlus from '../components/icons/iconPlus.vue'
import iconSearch from '../components/icons/iconSearch.vue'
import DropDown from './basic-components/DropDown.vue'

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
