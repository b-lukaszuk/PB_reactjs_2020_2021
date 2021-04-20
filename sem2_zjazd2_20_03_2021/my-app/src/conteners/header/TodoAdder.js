import React from "react";

import Button from "../../components/Button";
import Input from "../../components/Input";
// import bibl zew
// import moich komp
// import css na samym dole
// starac sie to robic alfabetycznie

function TodoAdder(props) {
    return (
        <div>
            <Input
                maxLength="18"
                placeholder="add task description..."
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
