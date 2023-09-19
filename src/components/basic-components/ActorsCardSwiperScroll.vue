<template>
  <div class="actor-card-swipper__wrapper">
    <swiper
      :space-between="12"
      :scrollbar="{
        draggable: true
      }"
      :slides-per-view="7"
      :modules="modules"
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

const props = defineProps(['data', 'type'])
const modules = [Scrollbar]
const route = useRoute()
console.log(props)
</script>

<style lang="scss">
@import '@/assets/scss/basic-components/ActorsCardSwiperScroll.scss';
</style>
