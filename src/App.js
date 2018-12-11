import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = { question: "", answear: "" };

  reload = () => {
    var url = "https://safe-falls-22549.herokuapp.com/random_joke";
    axios.get(url).then(props => {
      this.setState({
        question: props.data.setup,
        answear: props.data.punchline
      });
    });
  };

  render() {
    return (
      <div className="container" style={{ marginTop: "30px" }}>
        <div
          className="card"
          style={{ width: "35rem", marginLeft: "auto", marginRight: "auto" }}
        >
          <div className="card-body">
            <h2 className="card-title">Dad Jokes!</h2>
            <p className="card-text">{this.state.question}</p>
            <p className="card-text" style={{ fontWeight: "bold" }}>
              {this.state.answear} <i className="fas fa-grin-squint-tears" />
            </p>
            <a
              href="#"
              className="btn btn-danger"
              onClick={() => {
                this.reload();
              }}
            >
              {`Reload `}
              <i className="fas fa-sync-alt" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
