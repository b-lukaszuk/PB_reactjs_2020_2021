import React from "react";

import "./Input.css";
// import bibl zew
// import moich komp
// import css na samym dole
// starac sie to robic alfabetycznie

function Input(props) {
    return (
        <input
            name=""
            maxLength={props.maxLength}
            placeholder={props.placeholder}
            type="text"
            value={props.value}
            onChange={(e) => props.onChange(e)}
        />
    );
}

export default Input;

