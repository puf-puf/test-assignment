<template>
  <section>
    <div class="top-contributors">
      <h3>Top Contributors</h3>
      <div class="contributors">
        <div v-for="(item, index) in items" :key="index" class="contributor">
          <img src="@/assets/images/contributor-avatar.png" alt="" />
          <div class="contributor-info">
            <h3>172</h3>
            <p>Tyler</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const items = [1, 2, 3, 4]
</script>

<style lang="scss">
@import '@/assets/scss/SelectedMovieView/TopContributorsBlock.scss';
</style>
