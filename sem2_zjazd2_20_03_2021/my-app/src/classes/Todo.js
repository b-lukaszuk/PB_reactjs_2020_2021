class Todo {
  static counter = 1;
  constructor(taskDesc, done) {
    this.taskDesc = taskDesc;
    this.done = done;
    this.id = Todo.counter;
    Todo.counter += 1;
  }

  toggleDone() {
    this.done = !this.done;
  }
}

export default Todo;
