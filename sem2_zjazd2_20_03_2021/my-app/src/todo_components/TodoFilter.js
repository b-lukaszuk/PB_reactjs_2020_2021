import React from "react";

import Checkbox from "./Checkbox";
// import bibl zew
// import moich komp
// import css na samym dole
// starac sie to robic alfabetycznie

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
