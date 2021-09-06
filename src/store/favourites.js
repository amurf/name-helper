import { defineStore } from 'pinia'

export const useFavouritesStore = defineStore('favourites', {
	state: () => ({
		saved: new Set(),
		familyName: undefined,
		showFamilyName: false,
	}),
	getters: {},
	actions: {
		setFamilyName(name) {
			this.familyName = name;
		},
		addOrRemove(item) {
			if (this.saved.has(item)) {
				this.saved.delete(item);
			} else {
				this.saved.add(item);
			}
		},

		reset() {
			this.saved          = new Set();
			this.familyName     = undefined;
			this.showFamilyName = false;
		},
	},
})
