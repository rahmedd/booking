<style lang="sass" scoped>
.dlgLogin
	width: 400px
	height: auto
	top: 24vh
	left: 50%
	transform: translate(-50%)
</style>

<template lang="pug">
.dialog-background.dlgLogin
	.header
		span.title Login
	.dialog-content
		b-field(label='Email' type='is-danger' message='This email is invalid')
			b-input(type='email' value='john@' maxlength='30')

		b-field(label='Password')
			b-input(type='password' value='iwantmytreasure' password-reveal='')
	.footer2
		.button-row
			.button-row-left
				a Sign up
			.button-row-right
				b-button Cancel
				b-button(type='is-primary') Login
		.problem(v-if="problem") {{problem}}
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import Dialog from '@/components/Dialog.vue'


@Component({
	components: {},
})

export default class DlgLogin extends Dialog
{
	name = 'raed'
	problem = ''
}
</script>