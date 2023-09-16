<template>
  <main>
    <div class="person-wrapper">
      <InfoBlock />
      <div class="person-history__wrapper">
        <BiographyBlock />
        <ActingBlock />
      </div>
    </div>
  </main>
</template>

<script setup>
import BiographyBlock from '../components/SelectedPersonView/BiographyBlock.vue'
import InfoBlock from '../components/SelectedPersonView/InfoBlock.vue'
import ActingBlock from '../components/SelectedPersonView/ActingBlock.vue'
</script>

<style lang="scss">
@import '@/assets/scss/views/SelectedPersonView.scss';
</style>
