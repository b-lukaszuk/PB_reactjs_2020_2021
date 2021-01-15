import React from "react";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    console.log("TodoItem constructor");
  }

  render() {
    const taskDesc = this.props.item.taskDesc;
    const isDone = this.props.item.done;
    return (
      <div>
        <span>{taskDesc}</span> &nbsp;
        <input
          name=""
          type="checkbox"
          checked={isDone}
          onChange={() => this.props.onChange(taskDesc)}
        />
      </div>
    );
  }
}

export default TodoItem;
