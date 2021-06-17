import React, { useEffect, useState } from "react";

import auth from "../../components/auth";
import Button from "../../components/Button";
import TodoHeader from "../header/TodoHeader";
import TodoList from "./../lists/TodoList";

/**
 * returns key from localStorage or defaultValue if no key is there
 */
function getKeyFromLocalStorage(key, defaultValue) {
    let result = JSON.parse(window.localStorage.getItem(key));
    // if locStor does not cont result we get null, so
    // console.log(result ? result : []);
    return result !== null ? result : defaultValue;
}

/**
 * pushes {key1: value1, key2?: value2?, ...} from dict to localStorage
 */
function pushDictToLocalStorage(dictionary) {
    for (const [key, value] of Object.entries(dictionary)) {
        window.localStorage.setItem(key, JSON.stringify(value));
    }
}

function TodosPage(props) {

    // aplication state, state consts and getters/setters
    const [todos, setTodos] = useState(
        getKeyFromLocalStorage("todos", [])
    );
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
        pushDictToLocalStorage({ "todos": todos });
    }, [todos]);

    // pushes showCompleted to localStorage
    useEffect(() => {
        pushDictToLocalStorage({ "showCompleted": showCompleted });
    }, [showCompleted]);

    // pushes showPending to localStorage
    useEffect(() => {
        pushDictToLocalStorage({ "showPending": showPending });
    }, [showPending]);

    /**
     * obsluga checkboxa (checked|unchecked) przy "Show Completed"
     */
    const toggleShowCompleted = () => {
        setShowCompleted(!showCompleted);
    }

    /**
     * obsluga checkboxa (checked|unchecked) przy "Show Pending"
     */
    const toggleShowPending = () => {
        setShowPending(!showPending);
    }

    /**
     * sortuje taski alfabetycznie po task name
     * sortuje na przemian raz rosnaco, raz malejaco
     * zmienia todos - [{id: 123, name: "costam", completed: true|false}, ...]
     * zmienia sortAsc
     */
    const sortTasks = () => {
        if (sortAsc) {
            setTodos(todos.sort((t1, t2) =>
                t1.name.localeCompare(t2.name)));
            setSortAsc(!sortAsc);
        } else {
            setTodos(todos.sort((t1, t2) =>
                t2.name.localeCompare(t1.name)));
            setSortAsc(!sortAsc);
        }
    }

    /**
     * zmienia stan (completed) danego taska
     * @param {number} taskId - idTaska
     * zmienia todos - [{id: 123, name: "costam", completed: true|false}, ...]
     * togglujac status completed dla danego obiektu
     */
    const toggleCompleted = (taskId) => {
        setTodos(todos.map((item) => {
            if (item.id === taskId) {
                return { ...item, completed: !item.completed };
            } else {
                return item;
            }
        }
        ));
    }

    /**
     * updateuje pole input z nazwa taska (do dodania) wpisana przez uzytkownika
     * @param {event} e - event triggerowany przez zmiane pola input
     */
    const updateTaskToAdd = (e) => {
        setTaskToAdd(e.target.value);
    }

    const getFirstFreeId = (todos) => {
        let usedIds = todos.map((todo) => { return todo.id });
        console.log(usedIds);
        let maxId = usedIds.length === 0 ? 0 : Math.max(...usedIds);
        console.log(maxId);
        return maxId + 1;
    }

    /**
     * dodaje taska z pola input do todos
     * [{id: 123, name: "costam", completed: true|false}, ...]
     * @param {string} newTaskDesc - nowe name do dodania
     * przydziela dodanemu taskowi domyslny status completed: false
     * przydziela dodanemu taskowi unikalne id
     */
    const addTaskToList = (newTaskDesc) => {
        if (newTaskDesc.trim() === "") {
            // no empty fields allowed to add
            alert("please provide task description");
        } else if (!newTaskDesc.trim().match(/[a-zA-Z]+/)) {
            alert("Task name must contain at least 1 alphabetic character");
        } else {
            let newId = getFirstFreeId(todos);
            console.log("adding task, new id:", newId);
            setTodos([...todos,
            { id: newId, name: newTaskDesc.trim(), completed: false }]
            )
        }
        setTaskToAdd("");
    }

    /**
     * usuwa dany task z listy todos-ow
     * @param {number} idToRemove - id taska do usuniecia
     * (id sa unikalne w obrebie todos)
     * zmienia todos
     */
    const remTaskFromList = (idToRemove) => {
        setTodos(todos.filter((item) => {
            return item.id !== idToRemove;
        }));
    }

    /**
     * usuwa wszystkie taski z listy todos
     */
    const remAllTasks = () => {
        setTodos([]);
    }

    return (
        <div>
            <Button
                className="normalBut"
                btnText="logout" onClick={() => {
                    return auth.logout(() => {
                        props.history.push("/");
                    }
                    );
                }} />
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
