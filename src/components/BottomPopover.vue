<script setup>
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/vue/solid'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { useFavouritesStore } from '../store/favourites.js'

const favourites = useFavouritesStore();

function copy() {
	const favouritesAsString = Array.from(favourites.saved).join("\n");
	navigator.clipboard.writeText(favouritesAsString);
}
</script>

<template>

	<Popover v-slot="{ open }" class='fixed bottom-0 right-0 popover-width'>
		<PopoverPanel class='bg-primarylight'>
			<div class="flex flex-col">

				<button @click="copy" class='bg-primary text-white p-2'>Copy</button>

				<ul class='w-full'>
					<li v-for="favourite in favourites.saved.values()"
					class='hover:bg-primarylight p-2 m-2 text-white'>
						{{ favourite }}
						<template v-if="favourites.showFamilyName">
							{{ favourites.familyName }}
						</template>
					</li>
				</ul>

			</div>
	</PopoverPanel>

	<PopoverButton class='w-full p-2 bg-primary text-white'>
		Favourites ({{ favourites.saved.size }})
		<ChevronDownIcon v-if="open" class="inline h-8 w-8" />
		<ChevronUpIcon v-else class="inline h-8 w-8" />
	</PopoverButton>

	</Popover>

</template>

<style>

.popover-width {
	@apply w-64;
}
@media (max-width: 767px) {
	.popover-width {
		@apply w-screen;
	}
}

</style>
