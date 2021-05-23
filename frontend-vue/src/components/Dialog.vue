<style lang="sass">
@import '../styles/vars'

.dialog-background
	width: 100%
	height: 100%
	position: fixed
	display: flex
	align-items: center
	justify-content: center
	background: rgba(5, 0, 5, 0.5)

.dialog
	// box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 7px 0px
	box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 15%), 0 0px 0 1px rgb(10 10 10 / 5%)
	border-radius: 5px
	background: white
	overflow: hidden

.dialog-content
	padding: 20px 30px

.dialog-background .header, form
	margin-bottom: 16px

.dialog-content .field > .help
	min-height: 30px

%flexbox-base
	display: flex
	align-items: center

.button-row
	@extend %flexbox-base
	justify-content: space-between

.button-row
	*:not(:last-child)
		margin-right: 10px

.button-row-left
	@extend %flexbox-base
	justify-content: flex-start

.button-row-right
	@extend %flexbox-base
	justify-content: flex-end
</style>

<template lang="pug">

</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
	components: {},
})

export default class Dialog extends Vue 
{
	@Prop({ type: Boolean, required: false, default: false }) readonly open!: boolean

	protected visible = false
	protected addMode = true

	get actionVerb(): string
	{
		return this.addMode ? "Add" : "Edit"
	}

	mounted(): void
	{
		this.visible = this.open
	}
	
	Show(show = true, addMode = true): void
	{
		this.visible = show
	}
}
</script>