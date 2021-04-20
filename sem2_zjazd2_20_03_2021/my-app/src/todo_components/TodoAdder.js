import React from "react";
import "./TodoAdder.css";
import Button from "./Button";

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
            <Button className="normalBut"
                onClick={() => props.onClickButton(props.value)}
                btnText="Add to the list"
            />
        </div>
    );
}

export default TodoAdder;
