import React from "react";
import "./TodoAdder.css";

class TodoAdder extends React.Component {
  constructor(props) {
    super(props);
    console.log("TodoAdder constructor");
  }

  render() {
    return (
      <div>
        <input
          name=""
          placeholder="add task description..."
          type="text"
          value={this.props.value}
          onChange={(e) => this.props.onChangeInput(e)}
        />
        &nbsp;
        <button onClick={() => this.props.onClickButton(this.props.value)}>
          Add to the list
        </button>
      </div>
    );
  }
}

export default TodoAdder;
