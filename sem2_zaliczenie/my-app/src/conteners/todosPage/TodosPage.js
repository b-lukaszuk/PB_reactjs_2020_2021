import React, { useEffect, useState, useContext } from "react";

import { authContext } from "../../components/AuthProvider";
import Button from "../../components/Button";
import TodoHeader from "../header/TodoHeader";
import TodoList from "./../lists/TodoList";
import {
    getKeyFromLocalStorage,
    pushDictToLocalStorage,
    isKeyInLocalStorage,
} from "../../utils/localStorage";

function TodosPage() {
    const { logout } = useContext(authContext);

    const urlForTodos = "https://jsonplaceholder.typicode.com/users/1/todos";
    const [todos, setTodos] = useState(getKeyFromLocalStorage("todos", []));
    console.log(todos);

    useEffect(() => {
        async function fetchData() {
            let response = await fetch(urlForTodos);
            let data = await response.json();
            let modifData = data.map((item) => {
                return { id: item.id, name: item.title, completed: item.completed };
            });
            if (!isKeyInLocalStorage("todos")) {
                console.log("fetching todos from url");
                setTodos(modifData);
            } else {
                console.log("preserving todos from localStorage");
            }
        }
        fetchData();
    }, []);

    const [taskToAdd, setTaskToAdd] = useState("");
    const [sortAsc, setSortAsc] = useState(true);
    const [showCompleted, setShowCompleted] = useState(
        getKeyFromLocalStorage("showCompleted", true)
    );
    const [showPending, setShowPending] = useState(
        getKeyFromLocalStorage("showPending", true)
    );

    // pushes todos to localStorage
    useEffect(() => {
        pushDictToLocalStorage({ todos: todos });
    }, [todos]);

    // pushes showCompleted to localStorage
    useEffect(() => {
        pushDictToLocalStorage({ showCompleted: showCompleted });
    }, [showCompleted]);

    // pushes showPending to localStorage
    useEffect(() => {
        pushDictToLocalStorage({ showPending: showPending });
    }, [showPending]);

    /**
     * obsluga checkboxa (checked|unchecked) przy "Show Completed"
     */
    const toggleShowCompleted = () => {
        setShowCompleted(!showCompleted);
    };

    /**
     * obsluga checkboxa (checked|unchecked) przy "Show Pending"
     */
    const toggleShowPending = () => {
        setShowPending(!showPending);
    };

    /**
     * sortuje taski alfabetycznie po task title
     * sortuje na przemian raz rosnaco, raz malejaco
     * zmienia todos - [{id: 123, title: "costam", completed: true|false}, ...]
     * zmienia sortAsc
     */
    const sortTasks = () => {
        if (sortAsc) {
            setTodos(todos.sort((t1, t2) => t1.title.localeCompare(t2.title)));
            setSortAsc(!sortAsc);
        } else {
            setTodos(todos.sort((t1, t2) => t2.title.localeCompare(t1.title)));
            setSortAsc(!sortAsc);
        }
    };

    /**
     * zmienia stan (completed) danego taska
     * @param {number} taskId - idTaska
     * zmienia todos - [{id: 123, title: "costam", completed: true|false}, ...]
     * togglujac status completed dla danego obiektu
     */
    const toggleCompleted = (taskId) => {
        setTodos(
            todos.map((item) => {
                if (item.id === taskId) {
                    return { ...item, completed: !item.completed };
                } else {
                    return item;
                }
            })
        );
    };

    /**
     * updateuje pole input z nazwa taska (do dodania) wpisana przez uzytkownika
     * @param {event} e - event triggerowany przez zmiane pola input
     */
    const updateTaskToAdd = (e) => {
        setTaskToAdd(e.target.value);
    };

    const getFirstFreeId = (todos) => {
        let usedIds = todos.map((todo) => {
            return todo.id;
        });
        console.log(usedIds);
        let maxId = usedIds.length === 0 ? 0 : Math.max(...usedIds);
        console.log(maxId);
        return maxId + 1;
    };

    /**
     * dodaje taska z pola input do todos
     * [{id: 123, title: "costam", completed: true|false}, ...]
     * @param {string} newTaskDesc - nowe title do dodania
     * przydziela dodanemu taskowi domyslny status completed: false
     * przydziela dodanemu taskowi unikalne id
     */
    const addTaskToList = (newTaskDesc) => {
        if (newTaskDesc.trim() === "") {
            // no empty fields allowed to add
            alert("please provide task description");
        } else if (!newTaskDesc.trim().match(/[a-zA-Z]+/)) {
            alert("Task title must contain at least 1 alphabetic character");
        } else {
            let newId = getFirstFreeId(todos);
            console.log("adding task, new id:", newId);
            console.log("adding task, name:", newTaskDesc);
            setTodos([
                ...todos,
                { id: newId, name: newTaskDesc.trim(), completed: false },
            ]);
        }
        setTaskToAdd("");
    };

    /**
     * usuwa dany task z listy todos-ow
     * @param {number} idToRemove - id taska do usuniecia
     * (id sa unikalne w obrebie todos)
     * zmienia todos
     */
    const remTaskFromList = (idToRemove) => {
        setTodos(
            todos.filter((item) => {
                return item.id !== idToRemove;
            })
        );
    };

    /**
     * usuwa wszystkie taski z listy todos
     */
    const remAllTasks = () => {
        setTodos([]);
    };

    return (
        <div>
            <span>Welcome to TODO app </span>
            <Button
                className="normalBut"
                btnText="logout"
                onClick={() => {
                    logout();
                }}
            />
            <TodoHeader
                adderTaskToAdd={taskToAdd}
                adderUpdateTaskToAdd={updateTaskToAdd}
                adderAddTaskToList={addTaskToList}
                remAllBtnRemAllTasks={remAllTasks}
                sorterSortTasks={sortTasks}
                sorterSortOrder={sortAsc ? "A to Z" : "Z to A"}
                filter1Msg="Show Completed"
                filter1Checked={showCompleted}
                filter1OnChange={toggleShowCompleted}
                filter2Msg="Show Pending"
                filter2Checked={showPending}
                filter2OnChange={toggleShowPending}
            />
            {showCompleted && (
                <TodoList
                    listName="Completed tasks:"
                    todos={todos.filter((t) => {
                        return t.completed;
                    })}
                    toggleCompleted={toggleCompleted}
                    onClickButton={remTaskFromList}
                />
            )}
            <br />
            {showPending && (
                <TodoList
                    listName="Pending tasks:"
                    todos={todos.filter((t) => {
                        return !t.completed;
                    })}
                    toggleCompleted={toggleCompleted}
                    onClickButton={remTaskFromList}
                />
            )}
        </div>
    );
}

export default TodosPage;
