<script setup>
import { useFavouritesStore } from '../store/favourites.js'
import { HeartIcon } from '@heroicons/vue/outline'

const favourites = useFavouritesStore();
const props = defineProps({
  names: Array
})

</script>

<template>
  <ul class='w-full p-2'>
    <li v-for="name in names" class='flex bg-bglight p-3 my-2 items-center'>

      <button @click="favourites.addOrRemove(name)" aria-labelledby="favourite-label">
        <span id="favourite-label" hidden>Add {{ name }} to favourites</span>
        <HeartIcon class='text-secondary mx-3 h-8 w-8'
                   :class="{ 'fill-current' : favourites.saved.has(name) }" />
      </button>

      {{ name }} <template v-if="favourites.showFamilyName">{{ favourites.familyName }}</template>
    </li>
  </ul>
</template>

<style scoped>
</style>
