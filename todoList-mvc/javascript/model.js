function TodoItem(caption, id) {
  this.caption = caption;
  this.id = id;
  this.isCompleted = false;
}

function TodoApp() {
  this.todoCollection = [];

  this.addItem = function(caption, id) {
    this.todoCollection.push(new TodoItem(caption, id));
  };

  this.removeItem = function(id) {
    var ind = this.todoCollection.findIndex(function(todo) {
      return todo.id == id;
    });

    this.todoCollection.splice(ind, 1);

    render();
  };
  this.completed = function(id) {
    var ind = this.todoCollection.findIndex(function(todo) {
      return todo.id == id;
    });

    this.todoCollection[ind].isCompleted = !this.todoCollection[ind].isCompleted;
    render();
  };
}
