import React from "react";

import Button from "../../components/Button";
// import bibl zew
// import moich komp
// import css na samym dole
// starac sie to robic alfabetycznie

function TodoSorter(props) {
    return (
        <div>
            <span>Sort by task description</span>
        &nbsp;
            <Button className="normalBut"
                onClick={() => props.onClick()}
                btnText={props.butMessage}
            />
        </div>
    );
}

export default TodoSorter;
