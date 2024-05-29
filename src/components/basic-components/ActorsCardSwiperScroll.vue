<template>
  <div class="actor-card-swipper__wrapper">
    <swiper
      :space-between="12"
      :scrollbar="{
        draggable: true
      }"
      :modules="modules"
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
    >
      <SwiperSlide v-for="(person, index) in data" :key="index">
        <MovieActorCard v-if="type == 'movie'" :actorData="person" />
        <SerieActorCard v-if="type == 'tv'" :actorData="person" />
      </SwiperSlide>
      <SwiperSlide>
        <div class="view-more">
          <router-link :to="`/movie/${route.params.id}/cast`">View more →</router-link>
        </div>
      </SwiperSlide>
    </swiper>
  </div>
</template>
<script setup>
import MovieActorCard from '@/components/basic-components/MovieActorCard.vue'
import SerieActorCard from '@/components/basic-components/SerieActorCard.vue'

import { useRoute } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Scrollbar } from 'swiper/modules'
import 'swiper/scss'
import 'swiper/scss/scrollbar'

defineProps(['data', 'type', 'slide_quantity'])
const modules = [Scrollbar]
const route = useRoute()
</script>

<style lang="scss">
@import '@/assets/scss/basic-components/ActorsCardSwiperScroll.scss';
</style>
