import "./App.css";
import React from "react";
import TodoList from "./todo_components/TodoList";
import TodoAdder from "./todo_components/TodoAdder";
import TodoSorter from "./todo_components/TodoSorter";
import TodoFilter from "./todo_components/TodoFilter";

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
      sortOrder: "A to Z",
      showDone: true,
      showPending: true,
    }; // This binding is necessary to make `this` work in the callback
    this.toggleDone = this.toggleDone.bind(this);
    this.updateTaskToAdd = this.updateTaskToAdd.bind(this);
    this.addTaskToList = this.addTaskToList.bind(this);
    this.remTaskFromList = this.remTaskFromList.bind(this);
    this.remAllTasks = this.remAllTasks.bind(this);
    this.sortTasks = this.sortTasks.bind(this);
    this.toggleShowDone = this.toggleShowDone.bind(this);
    this.toggleShowPending = this.toggleShowPending.bind(this);
  }

  toggleShowDone() {
    this.setState({ showDone: !this.state.showDone });
  }

  toggleShowPending() {
    this.setState({ showPending: !this.state.showPending });
  }

  /**
   * sortuje taski alfabetycznie po task descriptions
   * sortuje na przemian raz rosnaco, raz malejaco
   * zmienia state.todos - [{taskDesc: "costam", done: true|false}, ...]
   * zmienia state.sortOrder
   */
  sortTasks() {
    if (this.state.sortOrder === "A to Z") {
      this.setState({
        todos: this.state.todos.sort((t1, t2) =>
          t1.taskDesc.localeCompare(t2.taskDesc)
        ),
        sortOrder: "Z to A",
      });
    } else if (this.state.sortOrder === "Z to A") {
      this.setState({
        todos: this.state.todos.sort((t1, t2) =>
          t2.taskDesc.localeCompare(t1.taskDesc)
        ),
        sortOrder: "A to Z",
      });
    }
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
        <button className="remAllBut" onClick={this.remAllTasks}>
          Remove all tasks form the list
        </button>
        <br /> <br />
        <TodoSorter
          onClick={this.sortTasks}
          butMessage={this.state.sortOrder}
        />
        <br />
        <TodoFilter
          filterMessage="Show Completed"
          checked={this.state.showDone}
          onChange={this.toggleShowDone}
        />
        <TodoFilter
          filterMessage="Show Pending"
          checked={this.state.showPending}
          onChange={this.toggleShowPending}
        />
        <br />
        <h2>Completed tasks:</h2>
        {this.state.showDone && (
          <TodoList
            todos={this.state.todos.filter((t) => {
              return t.done;
            })}
            toggleDone={this.toggleDone}
            onClickButton={this.remTaskFromList}
          />
        )}
        <br />
        <h2>Pending tasks:</h2>
        {this.state.showPending && (
          <TodoList
            todos={this.state.todos.filter((t) => {
              return !t.done;
            })}
            toggleDone={this.toggleDone}
            onClickButton={this.remTaskFromList}
          />
        )}
      </div>
    );
  };
}

export default App;
