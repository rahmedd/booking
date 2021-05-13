<style lang="sass" scoped>
.dialog
	width: 400px
	background-color: aliceblue

</style>

<template lang="pug">
div.dialog
	h1 Login
	section
		b-field(label='Name')
			b-input(v-model='name')
		b-field(label='Email' type='is-danger' message='This email is invalid')
			b-input(type='email' value='john@' maxlength='30')
		b-field(label='Username' type='is-success' message='This username is available')
			b-input(value='johnsilver' maxlength='30')
		b-field(label='Password')
			b-input(type='password' value='iwantmytreasure' password-reveal='')
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})

export default class DlgLogin extends Vue
{
	name = 'raed'
}
</script>