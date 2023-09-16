<template>
  <div class="known-for__wrapper">
    <swiper
      :space-between="12"
      :scrollbar="{
        draggable: true
      }"
      :slides-per-view="6"
      :modules="modules"
    >
      <SwiperSlide v-for="(item, index) in props.items" :key="index">
        <div class="card__wrapper">
          <img src="@/assets/images/actor-cover.jpg" alt="" />
          <p>Doctor Strange</p>
        </div>
      </SwiperSlide>
    </swiper>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Scrollbar } from 'swiper/modules'
import 'swiper/scss'
import 'swiper/scss/scrollbar'

const props = defineProps(['items'])
const modules = [Scrollbar]
</script>

<style lang="scss">
@import '@/assets/scss/basic-components/KnownForSwiperScroll.scss';
</style>
