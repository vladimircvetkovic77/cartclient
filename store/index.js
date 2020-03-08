export const state = () => ({
	categories: []
})

export const getters = {
	categories (state) {
		return state.categories
	}
}
export const mutations = {
	SET_CATEGORIES (state, categories) {
		state.categories = categories
	}
}
export const actions = {
	async nuxtServerInit ({ commit }) {
		let response = await this.$axios.$get('http://127.0.0.1:8000/api/categories')
		commit ('SET_CATEGORIES', response.data)
	}
}