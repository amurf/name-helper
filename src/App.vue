<script setup>

// This is a mess right now. But as it's WIP and I just want to deploy
// it, leaving refactor for afterwards!

import BottomPopover from './components/BottomPopover.vue'
import NameList from './components/NameList.vue'
import names from './data/names.json'

import { HeartIcon } from '@heroicons/vue/outline'
import { ref } from 'vue'

const lastName      = ref('');
const skipped       = ref(false);
const shuffledNames = ref(generateNewNames());

function generateNewNames(limit = 25) {
  return names.map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .splice(0, limit)
}

function skipHandler(event) {
  const codesToHandle = { 83: 'S', 115: 's' };
  const keycode       = event.which;

  if (codesToHandle[keycode] && event.target.nodeName != 'INPUT') {
    skipped.value = true;
    window.removeEventListener('keypress', skipHandler);
  }
}

window.addEventListener("keypress", skipHandler);

import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'
const showLastName = ref(false)

import { useFavouritesStore } from './store/favourites.js'
const favourites = useFavouritesStore();

</script>

<template>

  <SwitchGroup v-if="favourites.familyName">
  <div class="flex items-center">
    <SwitchLabel class='mx-2'>Show family name</SwitchLabel>
    <Switch
      v-model="favourites.showFamilyName"
      class="relative inline-flex items-center h-6 rounded-full w-11 bg-indigo-400"

      >
      <span
        :class="favourites.showFamilyName ? 'translate-x-6' : 'translate-x-1'"
        class="inline-block w-4 h-4 transform bg-white rounded-full transition duration-200 ease-in-out transform"
        />
    </Switch>
  </div>
  </SwitchGroup>


  <div v-if="!skipped && !favourites.familyName"
       class="flex items-center justify-center h-screen">
    <div class="bg-indigo-800 font-bold rounded-lg border shadow-lg p-10 flex items-center justify-center flex-col">
      <label for="familyname" class='text-white'>Enter your family name</label>
      <input type="text" id="familyname" class='p-2' v-model.lazy.trim="favourites.familyName" />
      <p class='text-sm flex justify-center p-2 text-white'>Press <span class='mx-2 px-1 border'>ENTER</span>to begin or <button @click="skipped = true" class='mx-2 px-1 border'>S</button> to skip</p>
    </div>
  </div>

  <div v-else class='flex flex-col items-center'>

    <div class="flex items-center justify-center bg-indigo-800 text-white w-screen p-2">
      <button @click="shuffledNames = generateNewNames()">More names</button>
    </div>
    <NameList :names="shuffledNames" />
    <BottomPopover />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 20px;
}
</style>
