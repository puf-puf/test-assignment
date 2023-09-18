<template>
  <div class="wrapper">
    <swiper
      :space-between="16"
      :scrollbar="{
        draggable: true
      }"
      slides-per-view="4"
      :modules="modules"
    >
      <swiper-slide v-for="(item, index) in items" :key="index">
        <FilmRecommendations :data="item" />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script setup>
import FilmRecommendations from '@/components/basic-components/FilmRecommendations.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Scrollbar } from 'swiper/modules'
import 'swiper/scss'
import 'swiper/scss/scrollbar'

const props = defineProps(['items'])
const modules = [Scrollbar]
</script>

<style lang="scss">
@import '@/assets/scss/basic-components/RecommendationsCardSwiperScroll.scss';
</style>
