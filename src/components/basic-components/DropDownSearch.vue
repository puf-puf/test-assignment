<template>
  <div class="drop-down-search__wrapper" @click="store.changeShowedStatus(false)">
    <div class="drop-down-search" @click="(e) => e.stopPropagation()">
      <form @submit="performSearch">
        <input
          v-model="inputValue"
          @change="(e) => (inputValue = e.target.value)"
          type="text"
          placeholder="Search for a movie, tv show, person......"
        />
        <iconClose v-if="inputValue" @click="clearInputValue()" />
      </form>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import iconClose from '@/components/icons/iconClose.vue'
import { ref } from 'vue'
import { useNavbarStore } from '../../stores/navbar'
const router = useRouter()
const store = useNavbarStore()
const inputValue = ref('')

function clearInputValue() {
  inputValue.value = ''
}

function performSearch(event) {
  event.preventDefault()
  if (!event.target[0].value) return
  router.push(`/search/${event.target[0].value}/1`)
  store.changeShowedStatus(false)
}
</script>

<style lang="scss">
@import '@/assets/scss/basic-components/DropDownSearch.scss';
</style>
