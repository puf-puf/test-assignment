<template>
  <div class="actor-card__wrapper">
    <swiper
      :space-between="12"
      :scrollbar="{
        draggable: true
      }"
      :slides-per-view="7"
      :modules="modules"
    >
      <SwiperSlide v-for="(item, index) in props.items" :key="index">
        <div class="card__wrapper">
          <img src="@/assets/images/actor-cover.jpg" alt="" />
          <div>
            <h2>Tyrese Gibson</h2>
            <p>Jonas Taylor</p>
          </div>
        </div>
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
import { useRoute } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Scrollbar } from 'swiper/modules'
import 'swiper/scss'
import 'swiper/scss/scrollbar'

const props = defineProps(['items'])
const modules = [Scrollbar]
const route = useRoute()
</script>

<style lang="scss">
@import '@/assets/scss/basic-components/ActorsCardSwiperScroll.scss';
</style>
