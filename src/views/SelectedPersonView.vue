<template>
  <main>
    <div class="person-wrapper">
      <InfoBlock
        :data="[
          infoData.known_for_department,
          infoData.gender,
          infoData.birthday,
          infoData.also_known_as,
          infoData.place_of_birth,
          infoData.profile_path
        ]"
        :socialData="[socialData.facebook_id, socialData.instagram_id, socialData.twitter_id]"
      />
      <div class="person-history__wrapper">
        <BiographyBlock :data="[infoData.biography, infoData.name]" />
        <ActingBlock :data="[actingData]" />
      </div>
    </div>
  </main>
</template>

<script setup>
import BiographyBlock from '@/components/SelectedPersonView/BiographyBlock.vue'
import InfoBlock from '@/components/SelectedPersonView/InfoBlock.vue'
import ActingBlock from '@/components/SelectedPersonView/ActingBlock.vue'

import { parseActionData } from '@/helpers/parseActionData'

import { getSpecifiedPerson, getPersonsCombinedCredits, getPersonsSocial } from '@/services/persons'
import { useRoute } from 'vue-router'
import { ref } from 'vue'

const route = useRoute()
const infoData = ref([])
const actingData = ref([])
const socialData = ref([])

getSpecifiedPerson(route.params.id).then((response) => {
  infoData.value = response
})
getPersonsCombinedCredits(route.params.id).then((response) => {
  actingData.value = parseActionData(response.cast)
})
getPersonsSocial(route.params.id).then((response) => {
  socialData.value = response
})
</script>

<style lang="scss">
@import '@/assets/scss/views/SelectedPersonView.scss';
</style>
