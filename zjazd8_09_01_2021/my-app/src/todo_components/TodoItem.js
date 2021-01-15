import React from "react";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    console.log("TodoItem constructor");
  }

  render() {
    const task = this.props.item.taskDesc;
    const isDone = this.props.item.done;
    return (
      <div>
        <span>{task}</span> &nbsp;
        <input
          name=""
          type="checkbox"
          checked={isDone}
          onChange={() => this.props.onChange()}
        />
      </div>
    );
  }
}

export default TodoItem;
