import React from "react";

import "./Checkbox.css";
// import bibl zew
// import moich komp
// import css na samym dole
// starac sie to robic alfabetycznie

function Checkbox(props) {
    return (
        <input
            name=""
            type="checkbox"
            checked={props.checked}
            onChange={() => props.onChange()}
        />
    );
}

export default Checkbox;
