import { createModule, mutation, action } from "vuex-class-component"

const VuexModule = createModule({
	namespaced: "main",
	strict: process.env.NODE_ENV !== 'production'
})

export class MainStore extends VuexModule
{
	private isLoggedIn = false


	get IsLoggedIn()
	{
		return this.isLoggedIn
	}

	@mutation SetLogin(status: boolean)
	{
		this.isLoggedIn = status
	}
}


