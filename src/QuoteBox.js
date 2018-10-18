import React from "react";

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);

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

  render() {
    const { quote, author } = this.state;
    return (
      <div>
        <p>{quote}</p>
        <p>{author}</p>
      </div>
    );
  }
}

export default QuoteBox;
