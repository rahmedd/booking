import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';

import { extractVuexModule, createProxy } from 'vuex-class-component'
import { MainStore } from './MainStore'

Vue.use(Vuex)

const vuexLocalStorage = new VuexPersist({
	key: 'localVuex', // The key to store the state on in the storage provider.
	storage: window.localStorage, // or window.sessionStorage or localForage
	// Function that passes the state and returns the state with only the objects you want to store.
	// reducer: (state: any) => ({
	// 	LoggedInUser: state.LoggedInUser
	// }),
	// Function that passes a mutation and lets you decide if it should update the state in localStorage.
	// filter: mutation => (true)
})



const store = new Vuex.Store({
	modules: {
		...extractVuexModule(MainStore),
		//ClassStore
	},
	plugins: [vuexLocalStorage.plugin]
});

//export default store
const Store = createProxy(store, MainStore)


// Creating proxies.
// export const vxm = {
// 	User,
// }

export {
	Store
}