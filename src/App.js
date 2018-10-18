import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleQuoteChange = this.handleQuoteChange.bind(this);

    this.state = {
      quote: "",
      author: ""
    };
  }
  componentDidMount() {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response => response.json())
      .then(
        result => {
          this.setState({
            quote: result[0]["quote"],
            author: result[0]["character"]
          });
        },
        err => {
          this.setState({
            quote: "error",
            err,
            author: "error"
          });
        }
      );
  }

  handleQuoteChange() {
    window.location.reload();
  }

  render() {
    const { quote, author } = this.state;
    return (
      <div>
        <h1>Random Quote Machine</h1>
        <p>{quote}</p>
        <p>{author}</p>
        <button onClick={this.handleQuoteChange}>New</button>
        <button>Tweet</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
