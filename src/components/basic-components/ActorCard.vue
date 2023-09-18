<template>
  <div class="actor-card__wrapper">
    <img :src="`https://image.tmdb.org/t/p/w300/${person.profile_path}`" alt="" />

    <router-link :to="`/person/${person.id}`">
      <div class="actor-card__text">
        <h2>{{ person.name }}</h2>
        <div class="actor-films">
          <p>
            <span v-for="(film, index) in person.known_for" :key="index">
              {{ film.original_title }}
            </span>
          </p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script setup>
const props = defineProps(['person'])
</script>

<style lang="scss">
@import '@/assets/scss/basic-components/ActorCard.scss';
</style>
