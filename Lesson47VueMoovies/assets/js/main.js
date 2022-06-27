const App = {
	data() {
		return {
			API_KEY: 'ece4f8e9',
			search: '',
			movieList: [],
			movieInfo: {},
			showModal: false,
		}
	},
	methods: {
		searchMovies() {
			if(this.search !=='') {
				axios.get(`https://www.omdbapi.com/?apikey=${this.API_KEY}&s=${this.search}`)
				.then(response => {
					// обработка успешного запроса
					this.movieList = response.data.Search
					console.log(response);
				})
				.catch(function (error) {
					// обработка ошибки
					console.log(error);
				})
				.then(function () {
					// выполняется всегда
				});
			}
		},
		showMovieInfo() {
			this.showModal = true
		},
		
		getMovieInfo(id){
			axios.get(`https://www.omdbapi.com/?apikey=${this.API_KEY}&i=${id}`)
			.then(response => {
				this.movieInfo = response.data
				this.showMovieInfo()
			})
			.catch(function (error) {
			})
			.then(function () {
			});
		}
	}
}

Vue.createApp(App).mount('#app')