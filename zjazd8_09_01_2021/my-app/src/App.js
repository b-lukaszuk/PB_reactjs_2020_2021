import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { costam: 1 };
  }
  render = () => {
    return (
      <div>
        <p>Output z pliku App.js</p>
      </div>
    );
  };
}

export default App;
