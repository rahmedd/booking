<style lang="sass">
.dialog-background
	width: 100%
	height: 100%
	position: fixed
	background-color: white
	box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 7px 0px
	border-radius: 6px
	padding: 20px 30px
	
.header
	margin-bottom: 10px

.dialog-content
	margin-bottom: 30px

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

	get actionVerb()
	{
		return this.addMode ? "Add" : "Edit"
	}

	mounted()
	{
		this.visible = this.open
	}
	
	Show(show = true, addMode = true)
	{
		this.visible = show
	}
}
</script>