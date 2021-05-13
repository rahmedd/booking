<template lang="pug">
div
	DlgLogin(msg='hi')
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DlgLogin from '@/components/DlgLogin.vue'

@Component({
  components: {
	DlgLogin,
  },
})

export default class Login extends Vue {

}
</script>
