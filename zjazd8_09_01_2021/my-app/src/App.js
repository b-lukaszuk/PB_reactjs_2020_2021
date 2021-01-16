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
        { taskDesc: "work in the office", done: false },
        { taskDesc: "react homework", done: true },
        { taskDesc: "node.js homework", done: false },
        { taskDesc: "washing", done: true },
      ],
      taskToAdd: "",
    };

    // This binding is necessary to make `this` work in the callback
    this.toggleDone = this.toggleDone.bind(this);
    this.updateTaskToAdd = this.updateTaskToAdd.bind(this);
    this.addTaskToList = this.addTaskToList.bind(this);
    this.remTaskFromList = this.remTaskFromList.bind(this);
    this.remAllTasks = this.remAllTasks.bind(this);
  }

  /**
   * zmienia stan (done) danego taska
   * @param {string} taskDescToToggle - opis zad/tasku (taskDesc sa unikalne)
   * zmienia state.todos - [{taskDesc: "costam", done: true|false}, ...]
   * togglujac status done dla danego obiektu
   */
  toggleDone(taskDescToToggle) {
    this.setState({
      todos: this.state.todos.map((item) => {
        if (item.taskDesc === taskDescToToggle) {
          return { taskDesc: taskDescToToggle, done: !item.done };
        } else {
          return item;
        }
      }),
    });
  }

  /**
   * updateuje pole input z nazwa taska wpisana przez uzytkownika
   * @param {event} e - event triggerowany przez zmiane pola input
   */
  updateTaskToAdd(e) {
    this.setState({ taskToAdd: e.target.value });
  }

  /**
   * dodaje taska z pola input do state.todos
   * [{taskDesc: "costam", done: true|false}, ...]
   * @param {string} newTaskDesc - nowe taskDesc do dodania
   * taskDesc powinno byc unikalne (nie moze wyst na liscie)
   * przydziela dodanemu taskowi domyslny status done: false
   */
  addTaskToList(newTaskDesc) {
    // no duplicated tasks descriptions allowed to add
    if (
      Boolean(
        this.state.todos.find((item) => {
          return item.taskDesc === newTaskDesc.trim();
        })
      )
    ) {
      alert("the task is already on the list");
    } else if (newTaskDesc.trim() === "") {
      // no empty fields allowed to add
      alert("please provide task description");
    } else {
      this.setState({
        todos: [
          ...this.state.todos,
          { taskDesc: newTaskDesc.trim(), done: false },
        ],
      });
    }
    this.setState({ taskToAdd: "" });
  }

  /**
   * usuwa dany task z listy todos-ow
   * @param {string} taskDescToRemove - opis tasku do usuniecia
   * (taskDesc sa unikalne w obrebie state.todos)
   * zmienia this.state.todos
   */
  remTaskFromList(taskDescToRemove) {
    this.setState({
      todos: this.state.todos.filter((item) => {
        return item.taskDesc !== taskDescToRemove;
      }),
    });
  }

  /**
   * usuwa wszystkie taski z listy this.state.todos
   */
  remAllTasks() {
    this.setState({ todos: [] });
  }

  render = () => {
    return (
      <div>
        <h1>Todo list</h1>
        <TodoAdder
          value={this.state.taskToAdd}
          onChangeInput={this.updateTaskToAdd}
          onClickButton={this.addTaskToList}
        />
        <br />
        <button onClick={this.remAllTasks}>
          Remove all tasks form the list
        </button>
        <br /> <br />
        <TodoList
          todos={this.state.todos}
          toggleDone={this.toggleDone}
          onClickButton={this.remTaskFromList}
        />
      </div>
    );
  };
}

export default App;
