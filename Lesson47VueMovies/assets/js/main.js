const movieItem = {
	props: ['movie'],
	methods: {
		getMovieInfo(id) {
			this.$emit('getMovie', id)
		},
		addToFavourites(id){
			this.$emit('addToFavourites', id)
		}
	},
	template: '#movieItem',
}

const App = {
	data() {
		return {
			API_KEY: 'ece4f8e9',
			search: 'batman',
			selected: ['Movie', 'Series'],
			select: 'Movie',
			movieList: [],
			movieInfo: {},
			favourite: [],
			showModal: false,
			storage: {}
		}
	},
	components: {
		movieItem
	},
	created() {
		//загружаем, получаем данные из localStorage и присваиваем нашей переменной storage
		const local = localStorage.getItem('user_favourites')
		this.storage = JSON.parse(local)
		// перебираем storage, записываем в favourite - оно отобразится при загрузке App
		for (let key in this.storage) {
			this.favourite.push(this.storage[key])
		}
	},
	methods: {
		searchMovie() {
			if (this.search !== '') {
				axios
				.get(`https://www.omdbapi.com/?apikey=${this.API_KEY}&s=${this.search}&type=${this.select}`)
				.then(response => {
					this.movieList = response.data.Search
					this.search = ''
				})
				.catch(error => {
					this.showErr(error.code)
				})
			} else {
				this.showErr('Enter movie title.')
			}
		},
		showMovieInfo() {
			this.showModal = true
		},
		getMovieInfo(id) {
			axios.get(`https://www.omdbapi.com/?apikey=${this.API_KEY}&i=${id}`)
			.then(response => {
				this.movieInfo = response.data
				this.showMovieInfo()
			})
			.catch(error => {
				this.showErr(error.code)
			})
		},
		addToFavourites(id) {
			const index = this.movieList.findIndex((el) => el.imdbID === id)
			//удаление при клике на сердечко
			const index2 = this.favourite.findIndex((el) => el.imdbID === id)
			if (index2 === -1) {
				let item = this.movieList[index]
				item.inFav = true
				this.favourite.push(item);
				
			} else {
				this.favourite.splice(index2, 1)
			}
			
			localStorage.setItem('user_favourites', JSON.stringify(this.favourite))
		},
		showErr(text) {
			let html = ''
			html += `
                    <div class='modal_overlay'>
                        <div class='my_modal text-bg-warning text-center fs-2'>
                            ${text}
                        </div>
                    </div>
                `
			document.body.insertAdjacentHTML('afterbegin', html)
			
			setTimeout(() => {
				let el = document.querySelector(".modal_overlay")
				el.classList.add('none')
				
			},2000)
		},
		//делаем проверку фильмов - если они есть в массиве favourite тогда меняем цвет сердца
		movieListWithFavourite() {
			let arr = []
			this.movieList.forEach(el => {
				let findFav =  this.favourite.find(item =>{
					return el.imdbID === item.imdbID
				})
				el.inFav = findFav !== undefined ? true : false
				arr.push(el)
			})
			return arr
		}
	}
}

function myFunction() {
	let checkBox = document.getElementById("myCheck");
	if (checkBox.checked === true){
		document.body.classList.toggle('dark');
	} else {
		document.body.classList.toggle('dark');
	}
}

Vue.createApp(App).mount('#app')