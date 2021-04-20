import React from "react";
import "./TodoAdder.css";
import Button from "../components/Button";

function TodoAdder(props) {
  return (
    <div>
      <input
        name=""
        maxLength="18"
        placeholder="add task description..."
        type="text"
        value={props.value}
        onChange={(e) => props.onChangeInput(e)}
      />
      &nbsp;
      <Button
        isRemove={true}
        title="Add new Task"
        onClick={props.onClickButton}
        value={props.value}
      />
    </div>
  );
}

export default TodoAdder;
