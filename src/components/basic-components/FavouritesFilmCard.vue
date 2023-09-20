<template>
  <div class="favourite-film-card__wrapper">
    <img :src="`https://image.tmdb.org/t/p/w185/${data.photo}`" alt="Film Picture" />
    <iconHeart
      v-if="store.isInFavourites(data.id)"
      @click="store.removeFavourite(data.id)"
      width="40"
      height="40"
      fill="red"
      class="favourite-heart"
    />
    <router-link :to="`${data.type == 'tv' ? '/tv/' : '/movie/'}${data.id}`"
      ><h2>{{ data.name }}</h2></router-link
    >
  </div>
</template>

<script setup>
import iconHeart from '@/components/icons/iconHeart.vue'
import { useFavouritesStore } from '@/stores/favourites.js'
const store = useFavouritesStore()
const props = defineProps(['data'])
console.log(props.data)
</script>

<style lang="scss">
@import '@/assets/scss/basic-components/FavouritesFilmCard.scss';
</style>
