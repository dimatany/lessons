'use strict'

const TodoItem = {
    name: 'TodoItem',
    props:['item', 'index'],
    methods: {
        markDone(ind) {
            this.$parent.markDone(ind);
        }
    },
    template: '#todo_item'
}
const App = {
    data(){
        return {
            todoList: [
                {
                    text: 'By milk',
                    isDone: true,
                },
                {
                    text: 'Learn Vue.JS',
                    isDone: false,
                },
                {
                    text: 'Wash car',
                    isDone: false,
                }
            ],
            taskText: '',
            
        }
    },
    components: {
        TodoItem
    },
    methods: {
        addTodo() {
            if(this.taskText !=='') {
                this.todoList.push({
                    text: this.taskText,
                    isDone: false,
                });
                this.taskText = '';
            }
        },
        markDone(ind){
            this.todoList[ind].isDone = true;
        }
    }
}

Vue.createApp(App).mount('#app')