<template>
  <section>
    <h3>Acting</h3>
    <div class="acting__wrapper">
      <div class="year__wrapper">
        <div class="single-item__wrapper">
          <p class="year">2023</p>
          <div class="dot" @mouseover="isDotSelected(true)" @mouseleave="isDotSelected(false)">
            <iconDotSelected v-if="dotStatus" />
            <iconDotEmpty v-else />
          </div>
          <div class="film">
            <h2>The promised Land</h2>
            <p>as <span>Ludvig Kahlen</span></p>
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
</script>

<style lang="scss">
@import '@/assets/scss/SelectedPersonView/ActingBlock.scss';
</style>
