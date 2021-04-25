import React, { useEffect, useState } from "react";

import TodoHeader from "./conteners/header/TodoHeader";
import TodoList from "./conteners/lists/TodoList";
// import bibl zew
// import moich komp
// import css na samym dole
// starac sie to robic alfabetycznie

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

function App() {

    // aplication state, state consts and getters/setters
    const [todos, setTodos] = useState(
        getKeyFromLocalStorage("todos", [])
    );
    const [taskToAdd, setTaskToAdd] = useState("");
    const [sortAsc, setSortAsc] = useState(true);
    const [showDone, setShowDone] = useState(
        getKeyFromLocalStorage("showDone", true)
    );
    const [showPending, setShowPending] = useState(
        getKeyFromLocalStorage("showPending", true)
    );

    // pushes todos to localStorage
    useEffect(() => {
        pushDictToLocalStorage({ "todos": todos });
    }, [todos]);

    // pushes showDone to localStorage
    useEffect(() => {
        pushDictToLocalStorage({ "showDone": showDone });
    }, [showDone]);

    // pushes showPending to localStorage
    useEffect(() => {
        pushDictToLocalStorage({ "showPending": showPending });
    }, [showPending]);

    /**
     * obsluga checkboxa (checked|unchecked) przy "Show Done"
     */
    const toggleShowDone = () => {
        setShowDone(!showDone);
    }
    // czysty kod - polecana ksiazka

    /**
     * obsluga checkboxa (checked|unchecked) przy "Show Pending"
     */
    const toggleShowPending = () => {
        setShowPending(!showPending);
    }

    /**
     * sortuje taski alfabetycznie po task descriptions
     * sortuje na przemian raz rosnaco, raz malejaco
     * zmienia todos - [{taskDesc: "costam", done: true|false}, ...]
     * zmienia sortAsc
     */
    const sortTasks = () => {
        if (sortAsc) {
            setTodos(todos.sort((t1, t2) =>
                t1.taskDesc.localeCompare(t2.taskDesc)));
            setSortAsc(!sortAsc);
        } else {
            setTodos(todos.sort((t1, t2) =>
                t2.taskDesc.localeCompare(t1.taskDesc)));
            setSortAsc(!sortAsc);
        }
    }

    // polecana ksiazka
    // Robert C. Martin - "Czysty Kod"
    // "Clean Code: A Handbook of Agile Software Craftsmanship"

    /**
     * zmienia stan (done) danego taska
     * @param {string} taskDescToToggle - opis zad/tasku (taskDesc sa unikalne)
     * zmienia todos - [{taskDesc: "costam", done: true|false}, ...]
     * togglujac status done dla danego obiektu
     */
    const toggleDone = (taskDescToToggle) => {
        setTodos(todos.map((item) => {
            if (item.taskDesc === taskDescToToggle) {
                return { taskDesc: taskDescToToggle, done: !item.done };
            } else {
                return item;
            }
        }
        ));
    }

    /**
     * updateuje pole input z nazwa taska wpisana przez uzytkownika
     * @param {event} e - event triggerowany przez zmiane pola input
     */
    const updateTaskToAdd = (e) => {
        setTaskToAdd(e.target.value);
    }

    /**
     * dodaje taska z pola input do todos
     * [{taskDesc: "costam", done: true|false}, ...]
     * @param {string} newTaskDesc - nowe taskDesc do dodania
     * taskDesc powinno byc unikalne (nie moze wyst na liscie)
     * przydziela dodanemu taskowi domyslny status done: false
     */
    const addTaskToList = (newTaskDesc) => {
        // no duplicated tasks descriptions allowed to add
        if (
            Boolean(
                todos.find((item) => {
                    return item.taskDesc === newTaskDesc.trim();
                })
            )
        ) {
            alert("the task is already on the list");
        } else if (newTaskDesc.trim() === "") {
            // no empty fields allowed to add
            alert("please provide task description");
        } else if (!newTaskDesc.trim().match(/[a-zA-Z]+/)) {
            alert("Task description musc contain at least 1 alphabetic character");
        } else {
            setTodos(
                [...todos, { taskDesc: newTaskDesc.trim(), done: false }]
            )
        }
        setTaskToAdd("");
    }

    /**
     * usuwa dany task z listy todos-ow
     * @param {string} taskDescToRemove - opis tasku do usuniecia
     * (taskDesc sa unikalne w obrebie todos)
     * zmienia todos
     */
    const remTaskFromList = (taskDescToRemove) => {
        setTodos(todos.filter((item) => {
            return item.taskDesc !== taskDescToRemove;
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
            <TodoHeader
                adderTaskToAdd={taskToAdd}
                adderUpdateTaskToAdd={updateTaskToAdd}
                adderAddTaskToList={addTaskToList}
                remAllBtnRemAllTasks={remAllTasks}
                sorterSortTasks={sortTasks}
                sorterSortOrder={sortAsc ? "A to Z" : "Z to A"}
                filter1Msg="Show Completed"
                filter1Checked={showDone}
                filter1OnChange={toggleShowDone}
                filter2Msg="Show Pending"
                filter2Checked={showPending}
                filter2OnChange={toggleShowPending}
            />
            {showDone && (
                <TodoList
                    listName="Completed tasks:"
                    todos={todos.filter((t) => {
                        return t.done;
                    })}
                    toggleDone={toggleDone}
                    onClickButton={remTaskFromList}
                />
            )}
            <br />
            {showPending && (
                <TodoList
                    listName="Pending tasks:"
                    todos={todos.filter((t) => {
                        return !t.done;
                    })}
                    toggleDone={toggleDone}
                    onClickButton={remTaskFromList}
                />
            )}
        </div>
    );
}

export default App;
