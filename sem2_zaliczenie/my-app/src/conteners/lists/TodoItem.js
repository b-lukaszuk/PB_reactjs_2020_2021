import React from "react";

import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";

import "./TodoItem.css";

function TodoItem(props) {
    const taskName = props.item.name;
    const isCompleted = props.item.completed;
    const taskId = props.item.id;
    return (
        // wstawia do tbody, wiec produkuje td
        <tr>
            <td className="name">{taskName}</td>
            <td className="status">
                <Checkbox
                    checked={isCompleted}
                    onChange={() => props.toggleCompleted(taskId)}
                />
            </td>
            <td>
                <Button
                    className="remBut"
                    onClick={() => props.onClickButton(taskId)}
                    btnText={"\u2716 remove"}
                />
            </td>
        </tr>
    );
}

export default TodoItem;
