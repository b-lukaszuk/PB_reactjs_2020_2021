import React from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem";

function TodoList(props) {
    const todos = props.todos;
    return (
        <div className="TodoList">
            <h2>{props.listName}</h2>
            {/* tabela, celem lepszego wyrownania elementow */}
            <table>
                <thead>
                    <tr>
                        <th className="taskDesc">task</th>
                        <th className="status">done?</th>
                        <th>remove from list</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((item) => {
                        return newListItem(item,
                            props.toggleDone,
                            props.onClickButton);
                    })}
                </tbody>
            </table>
            <br />
        </div>
    );
}

export default TodoList;


/**
 * zwraca komponent TodoItem
 * @param {Object} item - task postaci {taskDesc: "costam", done: true|false}
 * @return komponent TodoItem
 */
function newListItem(item, toggleDone, onClickButton) {
    return (
        <TodoItem
            key={item.taskDesc}
            item={item}
            toggleDone={toggleDone}
            onClickButton={onClickButton}
        />
    );
}
