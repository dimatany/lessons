'use strict'

const App = {
	data(){
		return {
			API_BOT_ID: '',
			CHAT_ID: '',
			name: '',
			email: '',
			phone: '',
			subject: '',
			message: '',
			errors: {
				name: '',
				email: '',
				phone: '',
				subject: '',
				message: '',
			},
			answer: {
				success: null,
				text: '',
				
			}
		}
	},
	methods: {
		checkAndSend() {
			let valid = true
			if(this.name ==='') {
				this.errors.name = 'Enter your name'
				valid = false
			}
			if(this.name.length === 1) {
				this.errors.name = 'Minimal name  length is two chars'
				valid = false
			}
			if(this.email ==='') {
				this.errors.email = 'Enter your email address'
				valid = false
			} else {
				if(this.isValidEmail(this.email) ===  false ) {
					this.errors.email = 'Enter valid email address'
					valid = false
				}
			}
			if(this.phone ==='') {
				this.errors.phone = 'Enter phone number'
				valid = false
			}
			if(this.subject ==='') {
				this.errors.subject = 'Enter subject text'
				valid = false
			}
			if(this.message ==='') {
				this.errors.message = 'Enter message text'
				valid = false
			}
			
			
			if(valid) {
				//todo
			}
		},
		resetError(fld) {
			this.errors[fld] = ''
		},
		isValidEmail(email ) {
			return Boolean(email.match(
				/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			));
		}
	}
}

Vue.createApp(App).mount('#app')