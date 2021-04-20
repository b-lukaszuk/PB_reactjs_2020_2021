import React, { useState } from "react";

import TodoHeader from "./todo_components/TodoHeader";
import TodoList from "./todo_components/TodoList";

// import bibl zew
// import moich komp
// import css na samym dole
// starac sie to robic alfabetycznie

function App() {
    const [todos, setTodos] = useState(
        [
            { taskDesc: "shopping", done: true },
            { taskDesc: "work in the office", done: false },
            { taskDesc: "react homework", done: true },
            { taskDesc: "node.js homework", done: false },
            { taskDesc: "washing", done: true },
        ]
    );

    const [taskToAdd, setTaskToAdd] = useState("");
    const [sortOrder, setSortOrder] = useState("A to Z");
    const [showDone, setShowDone] = useState(true);
    const [showPending, setShowPending] = useState(true);

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
     * zmienia sortOrder
     */
    const sortTasks = () => {
        if (sortOrder === "A to Z") {
            setTodos(todos.sort((t1, t2) =>
                t1.taskDesc.localeCompare(t2.taskDesc)));
            setSortOrder("Z to A");
        } else if (sortOrder === "Z to A") {
            setTodos(todos.sort((t1, t2) =>
                t2.taskDesc.localeCompare(t1.taskDesc)));
            setSortOrder("A to Z");
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
                sorterSortOrder={sortOrder}
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
