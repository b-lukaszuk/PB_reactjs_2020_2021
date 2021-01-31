import React from "react";

class TodoFilter extends React.Component {
  constructor(props) {
    super(props);
    console.log("TodoFilter constructor");
  }

  render() {
    return (
      <div>
        <span>{this.props.filterMessage} </span>
        <input
          name=""
          type="checkbox"
          checked={this.props.checked}
          onChange={() => this.props.onChange()}
        />
      </div>
    );
  }
}

export default TodoFilter;
