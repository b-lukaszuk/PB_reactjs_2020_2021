import React from "react";

class TodoAdder extends React.Component {
  constructor(props) {
    super(props);
    console.log("TodoAdder constructor");
    console.log(this.props);
    // console.log(this.props.value);
    // console.log(this.props.onChange);
  }

  render() {
    return (
      <div>
        <input
          name=""
          type="text"
          value={this.props.value}
          onChange={(e) => this.props.onChange(e)}
        />
        &nbsp;
        <button onClick={() => this.props.onClick(this.props.value)}>
          Add to the list
        </button>
      </div>
    );
  }
}

export default TodoAdder;
