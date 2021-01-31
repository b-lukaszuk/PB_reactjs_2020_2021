import React from "react";

class TodoFilter extends React.Component {
  constructor(props) {
    super(props);
    console.log("TodoFilter constructor");
  }

  render() {
    return (
      <div>
        <h2>Show</h2>
        <span>Done </span>
        <input
          name=""
          placeholder="add todo..."
          type="checkbox"
          checked={this.props.checked}
          onChange={() => this.props.onChange()}
        />
      </div>
    );
  }
}

export default TodoFilter;
