import foo from './bar'
import Vue from 'vue'

var app = new Vue({
	el: '#app',
	data: {
		newToDo: '',//将 input.value 与 data.newTodo 绑定起来
		toDoList: []//代办
	},
	created: function(){
	    //页面将要关闭前的
	    window.onbeforeunload = ()=>{
	    	let dataString = JSON.stringify(this.toDoList) //短时间存储数组中的内容
	      	window.sessionStorage.setItem('myTodos', dataString) 
	      	window.sessionStorage.setItem('myInput', this.newToDo);
	    }

	    let oldDataString = window.sessionStorage.getItem('myTodos')
	    let oldData = JSON.parse(oldDataString)
	    this.toDoList = oldData || []
	    this.newToDo = window.sessionStorage.getItem('myInput') || '';

	},
	methods: {
		addToDos: function(){
			this.toDoList.push({
				title: this.newToDo,
        		createdAt: new Date(),
        		checked: false
			});
			this.newToDo = '';
		},
		removeToDos: function(todo){
			var index = this.toDoList.indexOf(todo);
			this.toDoList.splice(index,1);
		}
	}
});