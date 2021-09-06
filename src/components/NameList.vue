<script setup>
import { useFavouritesStore } from '../store/favourites.js'
import { HeartIcon } from '@heroicons/vue/outline'

const favourites = useFavouritesStore();
const props = defineProps({
  names: Array
})

</script>

<template>
  <ul class='my-5'>
    <li v-for="name in names" class='flex items-center my-1'>

      <button @click="favourites.addOrRemove(name)" aria-labelledby="favourite-label">
        <span id="favourite-label" hidden>Add {{ name }} to favourites</span>
        <HeartIcon class='mx-2 h-5 w-5'
                   :class="{ 'fill-current' : favourites.saved.has(name) }" />
      </button>

      {{ name }} <template v-if="favourites.showFamilyName">{{ favourites.familyName }}</template>
    </li>
  </ul>
</template>

<style scoped>

.popover-item {
  @apply hover:bg-blue-200 p-2;
}
</style>
