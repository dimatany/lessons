'use strict'
const App = {
    data(){
        return {
            todoList: [],
            taskText: '',
            
        }
    },
    methods: {
        addTodo() {
            this.todoList.push({
                text: this.taskText,
                isDone: false,
            });
        }
    }
}

Vue.createApp(App).mount('#app')