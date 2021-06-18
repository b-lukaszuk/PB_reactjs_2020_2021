import React from "react";
import { useParams, useHistory } from 'react-router-dom';
import { getKeyFromLocalStorage } from "../../utils/localStorage";
import Button from "../../components/Button";

function TodoItem() {

    const { id } = useParams();

    const todoId = parseInt(id);
    const todos = getKeyFromLocalStorage("todos", []);
    const getTodo = (taskId, todos) => {
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id === taskId) {
                return todos[i];
            }
        }
        return null;
    };
    const todo = getTodo(todoId, todos);
    const history = useHistory();

    return (
        <div>
            <Button
                className="normalBut"
                btnText={" \u27fd"}
                onClick={() => { history.replace('/todos') }} />
            <span> Go back to todos list </span>
            {todo === null ? (
                <div>
                    <p>No task of id: {todoId} found</p>
                </div>
            ) : (
                    <div>
                        <p>ID: {todo.id}</p>
                        <p>Name: {todo.name}</p>
                        <p>Completed: {todo.completed ? "Yes" : "No"}</p>
                    </div>
                )}
        </div>
    );
}

export default TodoItem;
