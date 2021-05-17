<style lang="sass" scoped>
.dialog
	width: 400px
</style>

<template lang="pug">
.dialog-background
	.dialog
		.header
			span.title Login
		.dialog-content
			validation-observer(v-slot="{login}")
				form(@submit.prevent="handleSubmit(login)")
					validation-provider(rules='required',  mode="eager", name='Email', v-slot='{ errors, valid }')
						b-field(label='Email', :type="{ 'is-danger': errors[0], 'is-success': valid }", :message='errors')
							b-input(v-model='email' ref='email' name='email')

					validation-provider(rules='required',  mode="eager", vid='password', name='Password', v-slot='{ errors, valid }')
						b-field(label='Password', :type="{ 'is-danger': errors[0], 'is-success': valid }", :message='errors')
							b-input(type='password' v-model='password' name='password')
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
	email = ''
	password = ''
	problem = ''
	
	protected async login(): Promise<void>
	{
		console.log('logged in1')
	}
}
</script>