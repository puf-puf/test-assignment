<template>
  <section>
    <h3>Acting</h3>
    <div class="acting__wrapper">
      <div class="year__wrapper" v-for="(films, years, index) in data[0]" :key="index">
        <div class="single-item__wrapper" v-for="(film, index) in films" :key="index">
          <p class="year">{{ years }}</p>
          <div class="dot" @mouseover="isDotSelected(true)" @mouseleave="isDotSelected(false)">
            <iconDotSelected v-if="dotStatus" />
            <iconDotEmpty v-else />
          </div>
          <div class="film">
            <router-link v-if="film.media_type == 'movie'" :to="`/movie/${film.id}`"
              ><h2>{{ film.original_title }}</h2>
            </router-link>
            <router-link v-if="film.media_type == 'tv'" :to="`/tv/${film.id}`">
              <h2>{{ film.original_title }}</h2>
            </router-link>
            <p>
              as <span>{{ film.character }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

import iconDotEmpty from '../icons/iconDotEmpty.vue'
import iconDotSelected from '../icons/iconDotSelected.vue'
const dotStatus = ref(false)
const isDotSelected = (value) => {
  dotStatus.value = value
}

const props = defineProps(['data'])
</script>

<style lang="scss">
@import '@/assets/scss/SelectedPersonView/ActingBlock.scss';
</style>
