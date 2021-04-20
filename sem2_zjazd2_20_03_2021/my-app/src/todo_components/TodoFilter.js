import React from "react";
import Checkbox from "./Checkbox";

function TodoFilter(props) {

    return (
        <div>
            <Checkbox
                checked={props.checked}
                onChange={() => props.onChange()}
            /> {" "}
            <span>{props.filterMessage} </span>
        </div>
    );
}

export default TodoFilter;
