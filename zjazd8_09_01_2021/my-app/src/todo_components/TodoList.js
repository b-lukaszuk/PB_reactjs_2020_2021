import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    console.log("TodoList constructor");
  }

  newListItem(item) {
    return (
      <TodoItem
        key={item.taskDesc}
        item={item}
        onChange={this.props.toggleDone}
      />
    );
  }

  render() {
    const todos = this.props.todos;
    return (
      <div>
        {todos.map((item) => {
          return this.newListItem(item);
        })}
        <br />
      </div>
    );
  }
}

export default TodoList;
