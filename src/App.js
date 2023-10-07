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
      { id: 4, text: "sura" },
    ],
  };

  handleRemoveAllOptions = (id) => {
    this.setState({ options: [] });
  };

  handleRemoveOption = (id) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => option.id !== id),
    }));
  };

  handleAddOption = (text) => {
    if (!text) {
      return "Please add an Option!";
    }

    if (this.state.options.find((option) => option.text === text)) {
      return "This Option already exits! Add a new one.";
    }

    // set newId to 1, if this.state.options is empty
    let newId = 1;
    const options = this.state.options;
    if (options.length) {
      newId = options[options.length - 1].id + 1;
    }

    this.setState((preState) => ({
      options: [...preState.options, { id: newId, text: text }],
    }));
  };

  render() {
    return (
      <div>
        <Header />
        <Options
          onRemoveAllOptions={this.handleRemoveAllOptions}
          onRemoveOption={this.handleRemoveOption}
          options={this.state.options}
        />
        <AddOption onAddOption={this.handleAddOption} />
      </div>
    );
  }
}

export default App;
