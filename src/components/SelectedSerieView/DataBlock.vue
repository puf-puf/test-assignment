<template>
  <section>
    <div class="links">
      <iconFacebook class="rounded" width="30" height="30" />
      <iconTwitter class="rounded" width="30" height="30" />
      <iconInstagram class="rounded" width="30" height="30" />
      <iconChain class="rounded" width="30" height="30" />
    </div>
    <div class="film-data">
      <div class="data-item">
        <h3>Status</h3>
        <p>Released</p>
      </div>
      <div class="data-item">
        <h3>Network</h3>
        <img class="network-logo" src="@/assets/images/icon-netflix.png" alt="" />
      </div>
      <div class="data-item">
        <h3>Type</h3>
        <p>Scripted</p>
      </div>
      <div class="data-item">
        <h3>Original Language</h3>
        <p>English</p>
      </div>
      <div class="keywords">
        <h3>Keywords</h3>
        <div class="keywords-elements">
          <p>based on novel or book</p>
          <p>sequel</p>
          <p>kaiju</p>
          <p>based on novel or book</p>
          <p>sequel</p>
          <p>kaiju</p>
          <p>based on novel or book</p>
          <p>sequel</p>
          <p>kaiju</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import iconTwitter from '@/components/icons/iconTwitter.vue'
import iconInstagram from '@/components/icons/iconInstagram.vue'
import iconFacebook from '@/components/icons/iconFacebook.vue'
import iconChain from '@/components/icons/iconChain.vue'
</script>

<style lang="scss">
@import '@/assets/scss/SelectedSerieView/DataBlock.scss';
</style>
