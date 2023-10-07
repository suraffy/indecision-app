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
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

export default AddOption;
