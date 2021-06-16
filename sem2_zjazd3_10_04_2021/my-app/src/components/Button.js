import React from "react";

import "./Button.css";
// import bibl zew
// import moich komp
// import css na samym dole
// starac sie to robic alfabetycznie

function Button(props) {
    return (
        <button className={props.className}
            onClick={() => props.onClick()}>
            {props.btnText}
        </button>
    );
}

export default Button;
