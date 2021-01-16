import React from "react";

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
