<template>
  <header>
    <div class="nav-wrapper">
      <div class="nav-side-left">
        <router-link to="/"><img src="../assets/images/logo.svg" alt="" /></router-link>
        <nav>
          <ul>
            <DropDown
              title="Movies"
              :items="[
                { title: `Popular`, link: '/movies' },
                { title: `Now Playing`, link: '/movies' },
                { title: `Upcoming`, link: '/movies' },
                { title: `Top Rated`, link: '/movies' }
              ]"
            />
            <DropDown
              title="TV Shows"
              :items="[
                { title: `Popular`, link: '/tvs' },
                { title: `Airing Today`, link: '/tvs' },
                { title: `On TV`, link: '/tvs' },
                { title: `Top Rated`, link: '/tvs' }
              ]"
            />
            <DropDown title="People" :items="[{ title: `Popular People`, link: '/persons' }]" />
            <DropDown
              title="More"
              :items="[
                { title: `Discussions`, link: '/' },
                { title: `Leaderboard`, link: '/' },
                { title: `Support`, link: '/' },
                { title: `API`, link: '/' }
              ]"
            />
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
