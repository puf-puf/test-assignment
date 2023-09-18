<template>
  <section>
    <div class="biography__wrapper">
      <div class="person-biography">
        <h2>{{ data[1] }}</h2>
        <h3>Biography</h3>
        <p>
          {{ data[0] }}
        </p>
      </div>
      <!-- <div>
        <h3>Known for</h3>
        <KnownForSwiperScroll :items="items" />
      </div> -->
    </div>
  </section>
</template>

<script setup>
import KnownForSwiperScroll from '@/components/basic-components/KnownForSwiperScroll.vue'

const props = defineProps(['data'])
</script>

<style lang="scss">
@import '@/assets/scss/SelectedPersonView/BiographyBlock.scss';
</style>
