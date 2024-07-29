const todoList = [
  {
    name: "make dinner",
    dueDate: '29/07/2024'
  },
];
renderTodo();
function renderTodo() {
  let todoListHTML = '';
  for (i = 0; i < todoList.length; i++) {
    const todoObj = todoList[i];
    // const name=todoObj.name;
    // const dueDate=todoObj.dueDate;
    const {name,dueDate}=todoObj;
    const html = `<p>${name} ${dueDate}
    <button onclick="
    todoList.splice(${i},1);
renderTodo();
">delete</button></p>`
    todoListHTML += html;
  }
  document.querySelector('.todo-list').innerHTML = todoListHTML
}
function addTodo() {
  const inputElement = document.querySelector(".todo-name");
  const dateInputElement= document.querySelector('.due-date')
  const name = inputElement.value;
  const dueDate= dateInputElement.value;
  todoList.push({
    name,
    dueDate,
  });
  //console.log(todoList);
  inputElement.value = '';
  renderTodo();
}
