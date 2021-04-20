import React from "react";
import "./TodoFilter.css";

function TodoFilter(props) {
  return (
    <div>
      <input
        name=""
        type="checkbox"
        checked={props.checked}
        onChange={() => props.onChange()}
      />{" "}
      <span> {props.filterMessage} </span>
    </div>
  );
}

export default TodoFilter;
