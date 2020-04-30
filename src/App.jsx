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

  componentDidMount() {
   let computerWin = localStorage.getItem("computerWin") || 0;
   let tiegame = localStorage.getItem("tiegame") || 0;
   let playerWin = localStorage.getItem("playerWin") || 0;
   this.setState({computerWin:computerWin , tiegame : tiegame , playerWin : playerWin});
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
    
    let winner = checkWinner(this.state.board);
    if( winner ){
      if(winner === "tie"){
        localStorage.setItem("tiegame" , Number(this.state.tiegame) + 1 );
        this.setState({ winner: winner , tiegame :  Number(this.state.tiegame) + 1 });
      }else if(winner === "X"){
        localStorage.setItem("computerWin" , Number(this.state.computerWin) + 1 );
        this.setState({ winner: winner , computerWin : Number(this.state.computerWin) + 1 });
      }else{
        localStorage.setItem("computerWin" , Number(this.state.playerWin) + 1 );
        this.setState({ winner: winner , playerWin : Number(this.state.playerWin) + 1 });
      }
    } 
  }

  boardClassGenerator(i, j) {
    let boardClass = "box";
    if (i === 0) {
      boardClass += " " + "border_top";
    }
    if (j === 0) {
      boardClass += " " + "border_left";
    }
    if (i === 2) {
      boardClass += " " + "border_bottom";
    }
    if (j === 2) {
      boardClass += " " + "border_right";
    }
    return boardClass;
  }

  deleteHistory(){
    let state = {
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
    localStorage.clear();
    this.setState({...state});
  }

  replay(){
    let state = {
      board: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ],
      nextMove: "X",
      winner: null,
    };
    this.setState({...state});
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
                      &#10005;
                      {/* <FaSkullCrossbones data-key={i + "-" + j} /> */}
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
        <span><strong>{this.state.playerWin}</strong></span>
          </div>
          <div className = "playerScoreWrapper">
            <span>TIE</span>
        <span><strong>{this.state.tiegame}</strong></span>
          </div>
          <div className = "playerScoreWrapper">
            <span>COMPUTER(<FaSkullCrossbones/>)</span>
        <span><strong>{this.state.computerWin}</strong></span>
          </div>
        </div>
          <div className="playagainResetButtonWrapper">
          <button onClick ={()=>this.replay()}><FaPlay/> play again</button> 
          <button onClick ={()=>this.deleteHistory()}><AiTwotoneDelete/>reset</button>
          </div>
      </>
    );
  }
}

export default App;
