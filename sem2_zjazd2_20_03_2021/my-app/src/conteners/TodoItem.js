import React from "react";
import "./TodoItem.css";
import Button from "../components/Button";

function TodoItem(props) {
  const taskDesc = props.item.taskDesc;
  const isDone = props.item.done;

  console.log(taskDesc);

  return (
    // wstawia do tbody, wiec produkuje td
    <tr>
      <td className="taskDesc">{taskDesc}</td>
      <td className="status">
        <input
          name=""
          type="checkbox"
          checked={isDone}
          onChange={() => {
            props.item.toggleDone(taskDesc);
          }}
        />
      </td>
      <td className="remBut">
        <Button
          isRemove={true}
          onClickButton={props.onClickButton(taskDesc)}
          title="&#10006; remove"
          value={taskDesc}
        />
      </td>
    </tr>
  );
}

export default TodoItem;
