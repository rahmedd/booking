<style lang="sass" scoped>
@import '../styles/vars'

.problem
	text-align: center
	// border-radius: $globalRadius
	// border-top-right-radius: 0
	// border-top-left-radius: 0
	color: white
	background: $danger

.problem > div
	padding: 8px

</style>

<template lang="pug">
.problem(v-if='problem')
	template( v-if="Array.isArray(problem)" )
		div(v-for="p in problem") {{p}}
	div( v-else ) {{ problem }}
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
	components: {}
})

export default class ProblemMessage extends Vue
{
	@Prop({ required: true }) readonly problem!: string[] | string

}

</script>