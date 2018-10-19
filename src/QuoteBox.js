import React from "react";

class QuoteBox extends React.Component {
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
      <div id="quote-box">
        <p id="text">{quote}</p>
        <p id="author">{author}</p>
        <div id="button-box">
          <button id="new-quote" onClick={this.handleQuoteChange}>
            New
          </button>
          <a
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text=${quote}-${author}`}
          >
            Tweet
          </a>
        </div>
      </div>
    );
  }
}

export default QuoteBox;
