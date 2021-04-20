import React from "react";
import "./TodoItem.css";

function TodoItem(props) {

    const taskDesc = props.item.taskDesc;
    const isDone = props.item.done;
    return (
        // wstawia do tbody, wiec produkuje td
        <tr>
            <td className="taskDesc">{taskDesc}</td>
            <td className="status">
                <input
                    name=""
                    type="checkbox"
                    checked={isDone}
                    onChange={() => props.toggleDone(taskDesc)}
                />
            </td>
            <td className="remBut">
                <button onClick={() => props.onClickButton(taskDesc)}>
                    &#10006; remove
          </button>
            </td>
        </tr>
    );
}

export default TodoItem;
