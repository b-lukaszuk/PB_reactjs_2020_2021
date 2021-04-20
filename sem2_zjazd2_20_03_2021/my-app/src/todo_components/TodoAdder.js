import React from "react";
import "./TodoAdder.css";

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
            <button onClick={() => props.onClickButton(props.value)}>
                Add to the list
        </button>
        </div>
    );
}

export default TodoAdder;
