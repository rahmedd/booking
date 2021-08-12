import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Store } from './store'
import Buefy from 'buefy'

Vue.use(Buefy)

Vue.config.productionTip = false

Vue.mixin({
	methods: 
	{
		$handleError: async function (ex, msg = 'Error', type = 'is-danger')
		{
			console.error(ex)
			if (ex.response?.data?.statusCode == 401)
				// Store.Logout(true)
				console.log('Store logout')
			else 
			{
				this.$buefy.toast.open({
					message: msg,
					type: type,
				})
			}
		},
	}
})


new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
