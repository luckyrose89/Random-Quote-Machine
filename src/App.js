import React from "react";
import ReactDOM from "react-dom";
import QuoteBox from "./QuoteBox";
import logo from "./the-simpsons-logo.png";

class App extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <img alt="logo" src={logo} height="200px" width="400px" />
        <header>
          <h1>Random Quote Machine</h1>
        </header>
        <QuoteBox />
        <footer>Made with &#10084; by Divya Mathur</footer>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
