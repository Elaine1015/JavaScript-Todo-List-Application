// Your JavaScript todo list application code here
let todos = [];

function addTodo(todo) {
  todos.push(todo);
}

function removeTodo(index) {
  todos.splice(index, 1);
}

function displayTodos() {
  todos.forEach((todo, index) => {
    console.log(`${index + 1}. ${todo}`);
  });
}

// Example usage
addTodo('Learn JavaScript');
addTodo('Build a todo list app');
removeTodo(0);
displayTodos();
