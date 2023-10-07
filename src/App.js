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

  handleAddOption = (optionText) => {
    const newId = this.state.options.length + 1;

    this.setState((preState) => ({
      options: [...preState.options, { id: newId, text: optionText }],
    }));
  };

  render() {
    return (
      <div>
        <Header />
        <Options options={this.state.options} />
        <AddOption onAddOption={this.handleAddOption} />
      </div>
    );
  }
}

export default App;
