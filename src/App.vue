<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderBlock from './components/HeaderBlock.vue'

import { useWindowStore } from '@/stores/window.js'

import { onMounted, onUnmounted, ref } from 'vue'

const store = useWindowStore()

onMounted(() => {
  window.addEventListener('resize', store.changeWindowWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', store.changeWindowWidth)
})
</script>

<template>
  <HeaderBlock />

  <RouterView />
</template>
