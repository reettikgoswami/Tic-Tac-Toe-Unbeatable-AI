import React, { Component } from "react";
import "./style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ],
      nextMove: "X",
    };
  }

  eventHandelar(e) {
    let index = e.target.dataset.key.split("-").map(cv=>Number(cv));
    let board = this.state.board;
    if (this.state.nextMove === "X") {
      board[index[0]][index[1]] = 1;
      this.setState({
        board: board,
        nextMove: "O",
      });
    } else {
      board[index[0]][index[1]] = 0;
      this.setState({
        board: board,
        nextMove: "X",
      });
    }
  }

  render() {
    return (
      <div className="container" onClick={(e) => this.eventHandelar(e)}>
        <div className="box" data-key="0-0">
          {this.state.board[0][0] == null ? (
            ""
          ) : this.state.board[0][0] ? (
            <span>&#10005;</span>
          ) : (
            <span>&#9711;</span>
          )}{" "}
        </div>
        <div className="box" data-key="0-1">
          {this.state.board[0][1] == null ? (
            ""
          ) : this.state.board[0][1] ? (
            <span>&#10005;</span>
          ) : (
            <span>&#9711;</span>
          )}{" "}
        </div>
        <div className="box" data-key="0-2">
          {this.state.board[0][2] == null ? (
            ""
          ) : this.state.board[0][2] ? (
            <span>&#10005;</span>
          ) : (
            <span>&#9711;</span>
          )}{" "}
        </div>
        <div className="box" data-key="1-0">
          {this.state.board[1][0] == null ? (
            ""
          ) : this.state.board[1][0] ? (
            <span>&#10005;</span>
          ) : (
            <span>&#9711;</span>
          )}{" "}
        </div>
        <div className="box" data-key="1-1">
          {this.state.board[1][1] == null ? (
            ""
          ) : this.state.board[1][1] ? (
            <span>&#10005;</span>
          ) : (
            <span>&#9711;</span>
          )}{" "}
        </div>
        <div className="box" data-key="1-2">
          {this.state.board[1][2] == null ? (
            ""
          ) : this.state.board[1][2] ? (
            <span>&#10005;</span>
          ) : (
            <span>&#9711;</span>
          )}{" "}
        </div>
        <div className="box" data-key="2-0">
          {this.state.board[2][0] == null ? (
            ""
          ) : this.state.board[2][0] ? (
            <span>&#10005;</span>
          ) : (
            <span>&#9711;</span>
          )}{" "}
        </div>
        <div className="box" data-key="2-1">
          {this.state.board[2][1] == null ? (
            ""
          ) : this.state.board[2][1] ? (
            <span>&#10005;</span>
          ) : (
            <span>&#9711;</span>
          )}{" "}
        </div>
        <div className="box" data-key="2-2">
          {this.state.board[2][2] == null ? (
            ""
          ) : this.state.board[2][2] ? (
            <span>&#10005;</span>
          ) : (
            <span>&#9711;</span>
          )}{" "}
        </div>
      </div>
    );
  }
}

export default App;
