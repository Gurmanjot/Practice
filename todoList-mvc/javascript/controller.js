var myApp = new TodoApp();

render();

var form = document.getElementById("formm");

var i = 0;

form.onsubmit = function(event) {
  event.preventDefault();
  myApp.addItem(form.todo.value, i);
  i++;
  form.todo.value = "";
  render();
};
