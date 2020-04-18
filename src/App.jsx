import React, { Component } from "react";
import "./style.css";

import {checkWinner} from "./utils"

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
      winner : null
    };
  }

  eventHandelar(e) {
    let index = e.target.dataset.key.split("-").map(cv=>Number(cv));
    let board = this.state.board;
    if(board[index[0]][index[1]] !== null || this.state.winner)return;

    if (this.state.nextMove === "X") {
      board[index[0]][index[1]] = "X";
      this.setState({
        board: board,
        nextMove: "O",
      });
    } else {
      board[index[0]][index[1]] = "O";
      this.setState({
        board: board,
        nextMove: "X",
      });
    }

     this.setState({winner : checkWinner(this.state.board)})
  }

  render() {
    return (
      <>
      <h1>winner :{this.state.winner ? this.state.winner : "" }</h1>
      <div className="container" onClick={(e) => this.eventHandelar(e)}>
        <div className="box" data-key="0-0">
          
          {this.state.board[0][0] == null ? (
            ""
          ) : this.state.board[0][0] === "X" ? (
            <span data-key="0-0">&#10005;</span>
          ) : (
            <span data-key="0-0">&#9711;</span>
          )}{" "}
        </div>
        <div className="box" data-key="0-1">
          {this.state.board[0][1] == null ? (
            ""
          ) : this.state.board[0][1] === "X" ? (
            <span data-key="0-1">&#10005;</span>
          ) : (
            <span data-key="0-1">&#9711;</span>
          )}{" "}
        </div>
        <div className="box" data-key="0-2">
          {this.state.board[0][2] == null ? (
            ""
          ) : this.state.board[0][2] === "X" ? (
            <span data-key="0-2">&#10005;</span>
          ) : (
            <span data-key="0-2"> &#9711;</span>
          )}{" "}
        </div>
        <div className="box" data-key="1-0">
          {this.state.board[1][0] == null ? (
            ""
          ) : this.state.board[1][0] === "X" ? (
            <span data-key="1-0">&#10005;</span>
          ) : (
            <span data-key="1-0">&#9711;</span>
          )}{" "}
        </div>
        <div className="box" data-key="1-1">
          {this.state.board[1][1] == null ? (
            ""
          ) : this.state.board[1][1] === "X" ? (
            <span data-key="1-1">&#10005;</span>
          ) : (
            <span data-key="1-1">&#9711;</span>
          )}{" "}
        </div>
        <div className="box" data-key="1-2">
          {this.state.board[1][2] == null ? (
            ""
          ) : this.state.board[1][2] === "X"? (
            <span data-key="1-2">&#10005;</span>
          ) : (
            <span data-key="1-2">&#9711;</span>
          )}{" "}
        </div>
        <div className="box" data-key="2-0">
          {this.state.board[2][0] == null ? (
            ""
          ) : this.state.board[2][0] === "X" ? (
            <span data-key="2-0">&#10005;</span>
          ) : (
            <span data-key="2-0">&#9711;</span>
          )}{" "}
        </div>
        <div className="box" data-key="2-1">
          {this.state.board[2][1] == null ? (
            ""
          ) : this.state.board[2][1] === "X"? (
            <span data-key="2-1">&#10005;</span>
          ) : (
            <span data-key="2-1">&#9711;</span>
          )}{" "}
        </div>
        <div className="box" data-key="2-2">
          {this.state.board[2][2] == null ? (
            ""
          ) : this.state.board[2][2] === "X" ? (
            <span data-key="2-2">&#10005;</span>
          ) : (
            <span data-key="2-2">&#9711;</span>
          )}{" "}
        </div>
      </div>
      </>
    );
  }
}

export default App;
