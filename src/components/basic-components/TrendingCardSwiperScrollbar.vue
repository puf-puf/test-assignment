<template>
  <div class="trending-swiper__wrapper">
    <swiper
      :space-between="12"
      :scrollbar="{
        draggable: true
      }"
      :slides-per-view="7"
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
