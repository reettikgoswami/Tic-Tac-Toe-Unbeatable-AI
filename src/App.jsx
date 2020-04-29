import React, { Component } from "react";
import "./style.css";

import {FaPlay} from "react-icons/fa";
import {AiTwotoneDelete} from "react-icons/ai";
import {FaSkullCrossbones} from "react-icons/fa"

import { checkWinner, bestMove, checkTie } from "./utils";

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
      winner: null,
      computerWin: 0,
      tiegame:0,
      playerWin : 0
    };
  }




  eventHandelar(e) {
    let index = e.target.dataset.key.split("-").map((cv) => Number(cv));
    let board = this.state.board;
    if (board[index[0]][index[1]] !== null || this.state.winner) return;

    if (this.state.nextMove === "X") {
      board[index[0]][index[1]] = "O";

      if (!checkTie(board)) {
        bestMove(board, "X", "O");
      }
      this.setState({
        board: board,
        nextMove: "X",
      });
    }

    this.setState({ winner: checkWinner(this.state.board) });
  }

  boardClassGenerator(i, j) {
    let boardClass = "box";
    if (i == 0) {
      boardClass += " " + "border_top";
    }
    if (j == 0) {
      boardClass += " " + "border_left";
    }
    if (i == 2) {
      boardClass += " " + "border_bottom";
    }
    if (j == 2) {
      boardClass += " " + "border_right";
    }
    return boardClass;
  }

  render() {
    return (
      <>
        <div className="container" onClick={(e) => this.eventHandelar(e)}>
          {this.state.board.reduce((acc, row, i) => {
            row.forEach((cv, j) => {
              acc.push(
                <div
                  className={this.boardClassGenerator(i, j)}
                  data-key={i + "-" + j}
                >
                  {cv === null ? (
                    ""
                  ) : cv === "X" ? (
                    <span data-key={i + "-" + j}>
                      {/* &#10005; */}
                      <FaSkullCrossbones/>
                      </span>
                  ) : (
                    <span data-key={i + "-" + j}>&#9711;</span>
                  )}{" "}
                </div>
              );
            });
            return acc;
          }, [])}
          
        </div>

        <div className="scoreContaner">
          <div className = "playerScoreWrapper">
            <span>PLAYER(O)</span>
            <span><strong>0</strong></span>
          </div>
          <div className = "playerScoreWrapper">
            <span>TIE</span>
            <span><strong>0</strong></span>
          </div>
          <div className = "playerScoreWrapper">
            <span>COMPUTER(<FaSkullCrossbones/>)</span>
            <span><strong>0</strong></span>
          </div>
        </div>
          <div className="playagainResetButtonWrapper">
          <button><FaPlay/> play again</button> 
          <button><AiTwotoneDelete/>reset</button>
          </div>
      </>
    );
  }
}

export default App;
