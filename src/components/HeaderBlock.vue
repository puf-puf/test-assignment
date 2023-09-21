<template>
  <header>
    <div class="nav-wrapper">
      <div class="nav-side-left">
        <router-link to="/"><img src="../assets/images/logo.svg" alt="" /></router-link>
        <nav v-if="storeWindow.windowWidth >= 900">
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
      </div>
      <div class="nav-burger">
        <button v-if="storeWindow.windowWidth < 900" @click="toggleBurgerMenu()">☰</button>
        <nav v-if="isBurgerShown && storeWindow.windowWidth < 900" class="burger-menu">
          <ul>
            <li><router-link to="/movies">Movies</router-link></li>
            <li><router-link to="/tvs">TV Shows</router-link></li>
            <li><router-link to="/persons">Persons</router-link></li>
            <li><router-link to="/favourites">Favourites</router-link></li>
          </ul>
        </nav>
      </div>
      <div class="nav-side-right" v-if="storeWindow.windowWidth >= 900">
        <iconPlus />
        <!-- <img :src="iconPlus" alt="" /> -->
        <button>EN</button>
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

import { ref } from 'vue'

import { useWindowStore } from '@/stores/window.js'
const storeWindow = useWindowStore()

const isBurgerShown = ref(false)

function toggleBurgerMenu() {
  isBurgerShown.value = !isBurgerShown.value
}

const store = useNavbarStore()
</script>

<style lang="scss">
@import '@/assets/scss/HeaderBlock.scss';
</style>
