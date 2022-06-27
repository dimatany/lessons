'use strict'

const App = {
	data() {
		return {
			API_KEY: 'ece4f8e9',
			search: '',
			movieList: [],
		}
	},
	methods: {
		searchMovies() {
			if(this.search !=='') {
			
			}
		},
	}
}

Vue.createApp(App).mount('#app')