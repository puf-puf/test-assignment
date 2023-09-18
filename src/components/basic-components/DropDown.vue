<template>
  <div class="drop-down">
    <div @mouseover="showPopup(true)" @mouseleave="showPopup(false)">
      <p>{{ title }}</p>
      <ul class="drop-down__item-wrapper" v-if="popupIsShown">
        <li class="drop-down__item" v-for="(item, index) in items" :key="index">
          <router-link :to="item.link">{{ item.title }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps(['title', 'items'])
const popupIsShown = ref(false)
function showPopup(status) {
  popupIsShown.value = status
}
</script>

<style lang="scss">
@import '@/assets/scss/basic-components/DropDown.scss';
</style>
