import React from "react";

import "./Button.css";

function Button(props) {
    return (
        <button className={props.className}
            onClick={() => props.onClick()}>
            {props.btnText}
        </button>
    );
}

export default Button;
