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
    index: 0,
    maxIndex: 19
  };

  handleDecrease = () => {
    const { index, maxIndex } = this.state;
    if (index >= 1 && index <= maxIndex) {
      this.setState({ index: index - 1 });
    } else {
      this.setState({ index: 19 });
    }
  };

  handleIncrease = () => {
    const { index, maxIndex } = this.state;
    if (index >= 0 && index <= maxIndex - 1) {
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
          {words.words[index].learned ? (
            <h1 id="learned">learned</h1>
          ) : (
            <h1 id="not-learned">not learned</h1>
          )}
          <div id="spanish">
            <Spanish
              word={words.words[index].word}
              image={words.words[index].principal}
            />
          </div>
          <div id="app">
            <div id="english">
              <English
                word={words.words[index].engword}
                image={words.words[index].engimg}
              />
            </div>
            <div id="deutsch">
              <Deutsch
                word={words.words[index].deuword}
                image={words.words[index].deuimg}
              />
            </div>
          </div>
        </div>
        <div id="controls">
          <div id="previous-arrow">
            <Previous handleClick={this.handleDecrease} />
          </div>
          <Next id="next-arrow" handleClick={this.handleIncrease} />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
