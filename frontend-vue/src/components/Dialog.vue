<style lang="scss" scoped>


</style>

<template lang="pug">
.dialog-background
	.dialog
		.header
			block header
		block dialogBody
		.footer
			block footer
	.problem
		block problem
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  components: {},
})

export default class Dialog extends Vue 
{
	@Prop({ type: Boolean, required: false, default: false }) readonly open!: boolean

	name = 'raed'
	visible = false

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