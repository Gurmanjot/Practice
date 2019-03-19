function render() {
  var list = document.querySelector(".listt");

  var range = document.createRange();
  range.selectNodeContents(list);
  range.deleteContents();

  for (var todo of myApp.todoCollection) {
    var node = document.createElement("li");
    node.classList.add("list-group-item");
    node.id = todo.id;

    var btn = document.createElement("button");
    btn.innerHTML = "DELETE";
    btn.onclick = remove;

    var box = document.createElement("input");
    box.onclick = check;
    box.type = "checkbox";

    var span = document.createElement("span");

    var textnode = document.createElement("input");
    textnode.type = "text";
    textnode.value = todo.caption;

    span.appendChild(textnode);

    if (todo.isCompleted == true) {
      box.checked = true;
      textnode.style.textDecoration = "line-through";
      textnode.style.opacity = "0.2";
    } else {
      box.checked = false;
      textnode.style.textDecoration = "none";
      textnode.style.opacity = "1";
    }

    node.append(box, span, btn);

    list.appendChild(node);
  }
}
function remove(event) {
  var id = event.target.parentNode.id;

  $.ajax({
    url: "http://try2.local.geekydev.com/backend/",
    type: "DELETE",
    data: { id: id },
    success: function(response) {
      myApp.removeItem(id);
      render();
    }
  });
}

function check(event) {
  var id = event.target.parentNode.id;
  myApp.completed(id);
}
