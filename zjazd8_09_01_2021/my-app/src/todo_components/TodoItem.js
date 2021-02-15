import React from "react";
import "./TodoItem.css";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    console.log("TodoItem constructor");
  }

  render() {
    const taskDesc = this.props.item.taskDesc;
    const isDone = this.props.item.done;
    return (
      // wstawia do tbody, wiec produkuje td
      <tr>
        <td className="taskDesc">{taskDesc}</td>
        <td className="status">
          <input
            name=""
            type="checkbox"
            checked={isDone}
            onChange={() => this.props.toggleDone(taskDesc)}
          />
        </td>
        <td className="remBut">
          <button onClick={() => this.props.onClickButton(taskDesc)}>
            remove
          </button>
        </td>
      </tr>
    );
  }
}

export default TodoItem;
