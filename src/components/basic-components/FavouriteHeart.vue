<template>
  <div class="film-favourite">
    <iconHeart
      v-if="store.isInFavourites(movie.id)"
      @click="store.removeFavourite(movie.id)"
      width="40"
      height="40"
      fill="red"
    />
    <iconHeart
      v-else
      @click="
        store.addFavourite({
          id: movie.id,
          name: `${movie.original_title ? movie.original_title : movie.name}`,
          type,
          photo: movie.poster_path
        })
      "
      width="40"
      height="40"
      fill="white"
    />
  </div>
</template>

<script setup>
import iconHeart from '@/components/icons/iconHeart.vue'

import { useFavouritesStore } from '@/stores/favourites.js'

const props = defineProps(['movie', 'type'])
const store = useFavouritesStore()
</script>
