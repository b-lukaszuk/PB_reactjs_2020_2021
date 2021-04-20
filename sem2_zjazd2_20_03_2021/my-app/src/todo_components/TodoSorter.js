import React from "react";

function TodoSorter(props) {
    return (
        <div>
            <span>Sort by task description</span>
        &nbsp;
            <button onClick={() => props.onClick()}>
                {props.butMessage}
            </button>
        </div>
    );
}

export default TodoSorter;
