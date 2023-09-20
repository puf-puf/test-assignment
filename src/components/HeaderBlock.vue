<template>
  <header>
    <div class="nav-wrapper">
      <div class="nav-side-left">
        <router-link to="/"><img src="../assets/images/logo.svg" alt="" /></router-link>
        <nav v-if="screenWidth >= 900">
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
            <DropDown title="More" :items="[{ title: `Favourites`, link: '/favourites' }]" />
          </ul>
        </nav>
        <button v-else @click="toggleBurgerMenu">☰</button>
        <nav v-if="isBurgerShown">123</nav>
      </div>
      <div class="nav-side-right">
        <iconPlus />
        <!-- <img :src="iconPlus" alt="" /> -->
        <button>EN</button>
        <ul>
          <li>Login</li>
          <li>Join TMDB</li>
        </ul>
        <div class="nav-search__wrapper">
          <iconClose v-if="store.isSearchShowed == true" @click="store.changeShowedStatus(false)" />
          <iconSearch v-else @click="store.changeShowedStatus(true)" />
        </div>
      </div>
      <DropDownSearch v-if="store.isSearchShowed" />
    </div>
  </header>
</template>

<script setup>
import iconPlus from '@/components/icons/iconPlus.vue'
import iconClose from '@/components/icons/iconClose.vue'
import iconSearch from '@/components/icons/iconSearch.vue'
import DropDown from './basic-components/DropDown.vue'
import DropDownSearch from './basic-components/DropDownSearch.vue'

import { useNavbarStore } from '@/stores/navbar.js'

import { onMounted, onUnmounted, ref } from 'vue'

const screenWidth = ref(window.innerWidth)
const isBurgerShown = ref(false)

function toggleBurgerMenu() {
  isBurgerShown.value = !isBurgerShown.value
}

function handleResize() {
  screenWidth.value = window.innerWidth
  if (screenWidth.value >= 900) {
    isBurgerShown.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

const store = useNavbarStore()
</script>

<style lang="scss">
@import '@/assets/scss/HeaderBlock.scss';
</style>
