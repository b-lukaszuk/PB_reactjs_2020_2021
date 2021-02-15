import React from "react";
import "./TodoFilter.css";

class TodoFilter extends React.Component {
  constructor(props) {
    super(props);
    console.log("TodoFilter constructor");
  }

  render() {
    return (
      <div>
        <input
          name=""
          type="checkbox"
          checked={this.props.checked}
          onChange={() => this.props.onChange()}
        />{" "}
        <span>{this.props.filterMessage} </span>
      </div>
    );
  }
}

export default TodoFilter;
