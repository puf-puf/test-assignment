<template>
  <main>
    <PersonsBlock :data="data" />
  </main>
</template>

<script setup>
import PersonsBlock from '../components/CategoryPersonView/PersonsBlock.vue'
import { getPersons } from '@/services/persons'
import { watch, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const data = ref([])

getPersons(route.params.page).then((response) => {
  data.value = response
})

watch(
  () => route.params.page,
  () => {
    getPersons(route.params.page).then((response) => {
      data.value = response
    })
  }
)
</script>

<style lang="scss"></style>
