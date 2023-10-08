import React, { Component } from "react";

class AddOption extends Component {
  state = { error: undefined };

  handleSubmit = (e) => {
    e.preventDefault();

    const optionEl = e.target.elements.option;
    const text = optionEl.value.trim();

    const error = this.props.onAddOption(text);

    this.setState(() => ({ error: error }));

    if (!error) optionEl.value = "";
  };

  render() {
    return (
      <div>
        {this.state.error && (
          <p className="add-option-error">{this.state.error}</p>
        )}
        <form className="add-option" onSubmit={this.handleSubmit}>
          <input className="add-option__input" type="text" name="option" />
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}

export default AddOption;
