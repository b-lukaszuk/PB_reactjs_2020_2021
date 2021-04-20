import React from "react";
import TodoAdder from "./TodoAdder";
import Button from "./Button";
import TodoSorter from "./TodoSorter";
import TodoFilter from "./TodoFilter";

function TodoHeader(props) {
    return (
        <div>
            <h1>Todo list</h1>
            <TodoAdder
                value={props.adderTaskToAdd}
                onChangeInput={props.adderUpdateTaskToAdd}
                onClickButton={props.adderAddTaskToList}
            />
            <br />
            <Button
                className="remBut"
                onClick={props.remAllBtnRemAllTasks}
                btnText={"\u2716 Remove all tasks from the list"}
            />
            <br /> <br />
            <TodoSorter
                onClick={props.sorterSortTasks}
                butMessage={props.sorterSortOrder}
            />
            <br />
            <TodoFilter
                filterMessage={props.filter1Msg}
                checked={props.filter1Checked}
                onChange={props.filter1OnChange}
            />
            <TodoFilter
                filterMessage={props.filter2Msg}
                checked={props.filter2Checked}
                onChange={props.filter2OnChange}
            />
            <br />
        </div>
    )
}

export default TodoHeader;
