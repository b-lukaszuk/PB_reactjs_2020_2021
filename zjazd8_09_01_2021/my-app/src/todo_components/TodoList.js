import React from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    console.log("TodoList constructor");
  }

  /**
   * zwraca komponent TodoItem
   * @param {Object} item - task postaci {taskDesc: "costam", done: true|false}
   * @return komponent TodoItem
   */
  newListItem(item) {
    return (
      <TodoItem
        key={item.taskDesc}
        item={item}
        toggleDone={this.props.toggleDone}
        onClickButton={this.props.onClickButton}
      />
    );
  }

  render() {
    const todos = this.props.todos;
    return (
      <div className="TodoList">
        <h2>{this.props.listName}</h2>
        {/* tabela, celem lepszego wyrownania elementow */}
        <table>
          <thead>
            <tr>
              <th className="taskDesc">task</th>
              <th className="status">done?</th>
              <th className="remBut">remove from list</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((item) => {
              return this.newListItem(item);
            })}
          </tbody>
        </table>
        <br />
      </div>
    );
  }
}

export default TodoList;
