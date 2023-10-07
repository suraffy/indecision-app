import React, { Component } from "react";
import Header from "./components/Header";
import Options from "./components/Options";
import AddOption from "./components/AddOption";
import "./App.css";

class App extends Component {
  state = {
    options: [
      { id: 1, text: "Take out trash" },
      { id: 2, text: "Exercise" },
      { id: 3, text: "Breakfast" },
    ],
  };

  render() {
    return (
      <div>
        <Header />
        <Options options={this.state.options} />
        <AddOption />
      </div>
    );
  }
}

export default App;
