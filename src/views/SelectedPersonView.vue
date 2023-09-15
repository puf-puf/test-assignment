<template>
  <main>
    <div class="person-wrapper">
      <InfoBlock />
      <div>
        <BiographyBlock />
      </div>
    </div>
  </main>
</template>

<script setup>
import BiographyBlock from '../components/SelectedPersonView/BiographyBlock.vue'
import InfoBlock from '../components/SelectedPersonView/InfoBlock.vue'
</script>

<style lang="scss">
@import '@/assets/scss/views/SelectedPersonView.scss';
</style>
