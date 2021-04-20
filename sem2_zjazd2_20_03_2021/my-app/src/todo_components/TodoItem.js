import React from "react";
import "./TodoItem.css";
import Button from "./Button";
import Checkbox from "./Checkbox";

function TodoItem(props) {
    const taskDesc = props.item.taskDesc;
    const isDone = props.item.done;
    return (
        // wstawia do tbody, wiec produkuje td
        <tr>
            <td className="taskDesc">{taskDesc}</td>
            <td className="status">
                <Checkbox
                    checked={isDone}
                    onChange={() => props.toggleDone(taskDesc)}
                />
            </td>
            <td>
                <Button
                    className="remBut"
                    onClick={() => props.onClickButton(taskDesc)}
                    btnText={"\u2716 remove"}
                />
            </td>
        </tr>
    );
}

export default TodoItem;
