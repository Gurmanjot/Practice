var myApp = new TodoApp();
var form = document.getElementById("formm");
$.ajax({
  url: "http://try2.local.geekydev.com/backend/",
  type: "GET",

  success: function(response) {
    response.map(todo => myApp.addItem(todo.caption, todo.id));
    render();
  }
});

form.onsubmit = function(event) {
  event.preventDefault();
  var todoItem = form.todo.value;
  form.todo.value = "";

  $.ajax({
    url: "http://try2.local.geekydev.com/backend/",
    type: "POST",

    data: {
      caption: todoItem
    },
    success: function(response) {
      myApp.addItem(todoItem, response);
      render();
    }
  });
};
