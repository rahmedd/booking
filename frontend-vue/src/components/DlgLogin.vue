<style lang="sass" scoped>
.dialog
	width: 400px
</style>

<template lang="pug">
.dialog-background
	.dialog
		.dialog-content
			.header
				span.title Login
			validation-observer(v-slot="{ handleSubmit }")
				form(@submit.prevent="handleSubmit(login)")
					validation-provider(rules='required',  mode="eager", name='Email', v-slot='{ errors, valid }')
						b-field(label='Email', :type="{ 'is-danger': errors[0], 'is-success': valid }", :message='errors')
							b-input(v-model='email' ref='email' name='email')

					validation-provider(rules='required',  mode="eager", vid='password', name='Password', v-slot='{ errors, valid }')
						b-field(label='Password', :type="{ 'is-danger': errors[0], 'is-success': valid }", :message='errors')
							b-input(type='password' v-model='password' name='password')
					.button-row
						.button-row-left
							a Sign up
						.button-row-right
							b-button Cancel
							b-button(type='is-primary' @click="handleSubmit(login)") Login
		ProblemMessage(:problem='problem')
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import axios from 'axios'
import { Store } from '@/store'
import Dialog from '@/components/Dialog.vue'
import ProblemMessage from '@/components/ProblemMessage.vue'

@Component({
	components: { ProblemMessage },
})

export default class DlgLogin extends Dialog
{
	email = ''
	password = ''
	problem = ''
	
	protected async login(): Promise<void>
	{
		console.log('logging in...')
		const url = `/user/login`
		try
		{
			const response = await axios.post(url, {
				username: this.email.trim(),
				password: this.password
			}, {withCredentials : true} )

			this.$buefy.toast.open({
				message: 'Logged in successfully!',
				type: 'is-success',
			})

			this.password = ''

			// role based router push
			Store.SetLogin(true)
			this.$router.push({ name: 'Dashboard' })
		}
		catch(ex)
		{
			if(ex.response.status == 401)
			{				
				this.problem = ex.response?.data?.message
				return
			}
			
			// this.$handleError(ex, "Login failed")
			console.log('login failed')
		}
	}
}
</script>