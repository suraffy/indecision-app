import React, { Component } from "react";
import Header from "./components/Header";
import Options from "./components/Options";
import AddOption from "./components/AddOption";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <Options />
        <AddOption />
      </div>
    );
  }
}

export default App;
