import React from "react";
import ReactDOM from "react-dom";
import QuoteBox from "./QuoteBox";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleQuoteChange = this.handleQuoteChange.bind(this);
  }
  handleQuoteChange() {
    window.location.reload();
  }
  render() {
    return (
      <div>
        <h1>Random Quote Machine</h1>
        <QuoteBox />
        <div>
          <button onClick={this.handleQuoteChange}>New</button>
          <a href="twitter.com/intent/tweet">Tweet</a>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
