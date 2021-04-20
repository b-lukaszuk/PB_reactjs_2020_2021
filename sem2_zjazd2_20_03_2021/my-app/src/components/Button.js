import * as React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <button
      className={props.isRemove ? "removeButton" : ""}
      onClick={() => props.onClickButton(props.value ? props.value : null)}
    >
      {props.title}
    </button>
  );
};

export default Button;
