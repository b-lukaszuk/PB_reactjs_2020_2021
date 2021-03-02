import React from "react";

class TodoSorter extends React.Component {
  constructor(props) {
    super(props);
    console.log("TodoSorter constructor");
  }

  render() {
    return (
      <div>
        <span>Sort by task description</span>
        &nbsp;
        <button onClick={() => this.props.onClick()}>
          {this.props.butMessage}
        </button>
      </div>
    );
  }
}

export default TodoSorter;
