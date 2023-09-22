<template>
  <div class="trending-swiper__wrapper">
    <swiper
      :space-between="12"
      :scrollbar="{
        draggable: true
      }"
      slides-per-view="auto"
      :breakpoints="{
        1500: { slidesPerView: 6 },
        1200: { slidesPerView: 5 },
        900: { slidesPerView: 4 },
        700: { slidesPerView: 3, spaceBetween: 8 },
        500: { slidesPerView: 4 },
        400: { slidesPerView: 3 },
        300: { slidesPerView: 2 }
      }"
      :modules="modules"
    >
      <SwiperSlide v-for="(item, index) in props.items" :key="index">
        <LittleFilmCard :movie="item" />
      </SwiperSlide>
    </swiper>
  </div>
</template>
<script setup>
import LittleFilmCard from './LittleFilmCard.vue'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Scrollbar } from 'swiper/modules'
import 'swiper/scss'
import 'swiper/scss/scrollbar'

const props = defineProps(['items'])
const modules = [Scrollbar]
</script>

<style lang="scss">
@import '@/assets/scss/basic-components/TrendingCardSwiperScrollbar.scss';
</style>
