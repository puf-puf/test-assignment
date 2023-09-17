<template>
  <div class="actor-card__wrapper">
    <img src="@/assets/images/actor-card-cover.jpg" alt="" />
    <div class="actor-card__text">
      <h2>Jennifer Connely</h2>
      <div class="actor-films">
        <p>
          <span v-for="(film, index) in films" :key="index">{{ film }},</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const films = ['A Beautiful Mind', 'Requiem for I don`t know']
</script>

<style lang="scss">
@import '@/assets/scss/basic-components/ActorCard.scss';
</style>
