import React from "react";
import "./TodoAdder.css";

// komponenty bez stanow zawsze funkcyjnie

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
          maxLength="18"
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
