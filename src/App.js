import React from "react";
import ReactDOM from "react-dom";
import QuoteBox from "./QuoteBox";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Random Quote Machine</h1>
        <QuoteBox />
        <button>New</button>
        <button>Tweet</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
