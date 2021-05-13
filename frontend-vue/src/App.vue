<template>
	<div id="app">
		<!-- <div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link>
		</div> -->
		<router-view/>
	</div>
</template>

<script lang="ts">
	import { Vue, Component } from 'vue-property-decorator';
	import { ValidationProvider, ValidationObserver } from 'vee-validate';
	import { extend, localize } from 'vee-validate';
	import { alpha_dash, confirmed, email, integer, length, max, max_value, min_value, required, excluded } from 'vee-validate/dist/rules';

	localize({
	en: {
		messages: {
			required: 'this field is required',
			min: 'Min {length} characters',
			max: (_, { length }) => `Max length ${length} characters`,
			min_value: (_, { min }) => `Min value is ${min}`,
			max_value: (_, { max }) => `Max value is ${max}`,
			alpha_dash: 'Only alphabets, numbers, dash and underscore allowed',
			excluded: 'Invalid selection'
		}
	}
	});

	// No message specified.
	extend('alpha_dash', alpha_dash)
	extend('email', email)
	extend('integer', {...integer, message: "Must be whole number"})
	extend('length', length)
	extend('max', max)
	extend('max_value', max_value)
	extend('min_value', min_value)
	extend("confirmed", {
		...confirmed,
		message: "Passwords don't match"
	})
	// Override the default message.
	extend('required', {
		...required,
		message: 'This field is required'
	})
	extend('excluded', excluded)

	Vue.component('ValidationProvider', ValidationProvider);
	Vue.component('ValidationObserver', ValidationObserver);


	@Component({
		components: {},
		props: {},
	})
	export default class MainApp extends Vue 
	{

	}
	

</script>

<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";


// #nav {
// 	padding: 30px;

// 	a {
// 		font-weight: bold;
// 		color: #2c3e50;

// 		&.router-link-exact-active {
// 			color: #42b983;
// 		}
// 	}
// }

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
