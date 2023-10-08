import React, { Component } from "react";
import Header from "./components/Header";
import Action from "./components/Action";
import Options from "./components/Options";
import AddOption from "./components/AddOption";
import OptionModal from "./components/OptionModal";

class App extends Component {
  state = {
    options: [],
    selectedOption: undefined,
  };

  componentDidMount() {
    const optionsJSON = localStorage.getItem("options");
    const options = JSON.parse(optionsJSON);

    if (options) {
      this.setState({ options });
    }
  }

  componentDidUpdate() {
    const optionsJSON = JSON.stringify(this.state.options);
    localStorage.setItem("options", optionsJSON);
  }

  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

  handlePickOption = () => {
    const length = this.state.options.length;

    if (length === 0) return;

    const random = Math.floor(Math.random() * length);
    const selectedOption = this.state.options[random].text;

    this.setState({ selectedOption });
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

        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            onPickOption={this.handlePickOption}
          />

          <div className="widget">
            <Options
              onRemoveAllOptions={this.handleRemoveAllOptions}
              onRemoveOption={this.handleRemoveOption}
              options={this.state.options}
            />
            <AddOption onAddOption={this.handleAddOption} />
          </div>
        </div>

        <OptionModal
          selectedOption={this.state.selectedOption}
          onClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}

export default App;
