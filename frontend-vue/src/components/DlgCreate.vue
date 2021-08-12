<style lang="sass" scoped>
.dialog
	width: 400px
</style>

<template lang="pug">
.dialog-background
	.dialog
		.dialog-content
			.header
				span.title Create

		ProblemMessage(:problem='problem')
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import axios from 'axios'
import Dialog from '@/components/Dialog.vue'
import ProblemMessage from '@/components/ProblemMessage.vue'

@Component({
	components: { ProblemMessage }
})

export default class DlgCreate extends Dialog
{
	@Prop({ type: String, required: false, default: false }) readonly creationType!: string
}
</script>