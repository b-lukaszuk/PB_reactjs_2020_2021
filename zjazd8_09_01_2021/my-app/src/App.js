import "./App.css";
import React from "react";
import TodoList from "./todo_components/TodoList";
import TodoAdder from "./todo_components/TodoAdder";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { taskDesc: "shopping", done: true },
        { taskDesc: "work", done: false },
        { taskDesc: "react homework", done: false },
        { taskDesc: "node.js homework", done: false },
        { taskDesc: "washing", done: true },
      ],
      taskToAdd: "",
    };

    // This binding is necessary to make `this` work in the callback
    this.toggleDone = this.toggleDone.bind(this);
    this.updateTaskToAdd = this.updateTaskToAdd.bind(this);
    this.addTaskToList = this.addTaskToList.bind(this);
  }

  toggleDone() {
    console.log("do skonczenia");
  }

  updateTaskToAdd(e) {
    this.setState({ taskToAdd: e.target.value });
  }

  addTaskToList(newTaskDesc) {
    // no dupl task descriptions allowed
    if (
      Boolean(
        this.state.todos.find((item) => {
          return item.taskDesc === newTaskDesc;
        })
      )
    ) {
      alert("the task is already on the list");
      this.setState({ taskToAdd: "" });
    } else {
      this.setState({
        todos: [...this.state.todos, { taskDesc: newTaskDesc, done: false }],
      });
    }
  }

  render = () => {
    return (
      <div>
        <h1>Todo list</h1>
        <TodoAdder
          value={this.state.taskToAdd}
          onChange={this.updateTaskToAdd}
          onClick={this.addTaskToList}
        />
        <br />
        <TodoList todos={this.state.todos} toggleDone={this.toggleDone} />
      </div>
    );
  };
}

export default App;
