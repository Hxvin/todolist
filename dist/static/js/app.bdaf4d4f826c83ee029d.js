webpackJsonp([1],[function(t,o){},,function(t,o,e){"use strict";function n(){var t=location.hash.replace(/#\/?/,"");c[t]?s.hashName=t:(location.hash="",s.hashName="all")}e(0);var i=e(1),d=function(t){return t&&t.__esModule?t:{default:t}}(i),c={all:function(t){return t},active:function(t){return t.filter(function(t){return!t.completed})},completed:function(t){return t.filter(function(t){return t.completed})}},s=new d.default({el:".todoapp",data:{msg:"hello world",title:"待做清单",newTodo:"",todos:[{content:"下午：读完“追风筝的人”",completed:!1},{content:"晚上：写读书笔记",completed:!1}],editedTodo:"",hashName:"all"},computed:{remain:function(){return c.active(this.todos).length},isAll:{get:function(){return 0===this.remain},set:function(t){this.todos.forEach(function(o){o.completed=t})}},filteredTodos:function(){return c[this.hashName](this.todos)}},methods:{addTodo:function(t){this.newTodo&&(this.todos.push({content:this.newTodo,completed:!1}),this.newTodo="")},removeTodo:function(t){this.todos.splice(t,1)},editTodo:function(t){this.editCache=t.content,this.editedTodo=t},doneEdit:function(t,o){this.editedTodo=null,t.content||this.removeTodo(o)},cancelEdit:function(t){this.editedTodo=null,t.content=this.editCache},clear:function(){this.todos=c.active(this.todos)}},directives:{focus:function(t,o){o&&t.focus()}}});window.addEventListener("hashchange",n)}],[2]);
//# sourceMappingURL=app.bdaf4d4f826c83ee029d.js.map