import React from "react";
import TodoAdder from "./TodoAdder";
import Button from "../components/Button";
import TodoSorter from "./TodoSorter";
import TodoFilter from "./TodoFilter";

function TodoHeader(props) {
  return (
    <React.Fragment>
      <h1>Todo list</h1>
      <TodoAdder
        value={props.taskToAdd}
        onChangeInput={props.updateTaskToAdd}
        onClickButton={props.addTaskToList}
      />
      <br />
      <Button
        isRemove={true}
        onClickButton={props.remAllTasks}
        title="&#10006; Remove All tasks from the list"
      />
      <br /> <br />
      <TodoSorter onClick={props.sortTasks} butMessage={props.sortOrder} />
      <br />
      <TodoFilter
        filterMessage="Show Completed"
        checked={props.showDone}
        onChange={props.toggleShowDone}
      />
      <TodoFilter
        filterMessage="Show Pending"
        checked={props.showPending}
        onChange={props.toggleShowPending}
      />
      <br />
    </React.Fragment>
  );
}

export default TodoHeader;
