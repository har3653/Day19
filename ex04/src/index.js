
import ReactDOM from "react-dom";
import "./index.css";
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, Padawans!</h1>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById("root"));
