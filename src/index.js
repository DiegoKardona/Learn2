import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.scss";

/*Importing word*/
import words from "./words.json";

/*Importing components*/
import Spanish from "./components/spanish/Spanish";
import English from "./components/english/English";
import Deutsch from "./components/deutsch/Deutsch";

/*Importing controls component*/
import Previous from "./components/controls/previous/Previous";
import Next from "./components/controls/next/Next";

class App extends Component {
  state = {
    index: 0
  };

  handleDecrease = () => {
    const { index } = this.state;
    if (index >= 1 && index <= 49) {
      this.setState({ index: index - 1 });
    } else {
      this.setState({ index: 49 });
    }
  };

  handleIncrease = () => {
    const { index } = this.state;
    if (index >= 0 && index <= 48) {
      this.setState({ index: index + 1 });
    } else {
      this.setState({ index: 0 });
    }
  };

  render() {
    const { index } = this.state;
    return (
      <div>
        <div id="container">
          <h1 id="actual-word">#{index}</h1>
          <div id="spanish">
            <Spanish word={words.words[index].word} />
          </div>
          <div id="app">
            <div id="english">
              <English word={words.words[index].engword} />
            </div>
            <div id="deutsch">
              <Deutsch word={words.words[index].deuword} />
            </div>
          </div>
        </div>
        <div id="controls">
          <Previous handleClick={this.handleDecrease} />
          <Next handleClick={this.handleIncrease} />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
