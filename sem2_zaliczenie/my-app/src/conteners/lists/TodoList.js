import React from "react";

import TodoItem from "./TodoItem";

import "./TodoList.css";

function TodoList(props) {
    const todos = props.todos;
    return (
        <div className="TodoList">
            <h2>{props.listName}</h2>
            {/* tabela, celem lepszego wyrownania elementow */}
            <table>
                <thead>
                    <tr>
                        <th className="name">task</th>
                        <th className="status">completed?</th>
                        <th>remove from list</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((item) => {
                        return newListItem(item,
                            props.toggleCompleted,
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
 * @param {Object} item - task postaci {id: 123, name: "costam", completed: true|false}
 * @return komponent TodoItem
 */
function newListItem(item, toggleCompleted, onClickButton) {
    return (
        <TodoItem
            key={item.id}
            item={item}
            toggleCompleted={toggleCompleted}
            onClickButton={onClickButton}
        />
    );
}
