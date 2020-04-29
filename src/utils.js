
// improve this function; 
export function checkWinner(grid){
   if(grid[0][0]){
    if(grid[0][0] === grid[0][1]  && grid[0][1] === grid[0][2]){return grid[0][0];}
    if(grid[1][0] === grid[0][0]  && grid[0][0] === grid[2][0]){return grid[0][0];}
   }
   if(grid[1][1]){
    if(grid[1][1] === grid[0][0]  && grid[1][1] === grid[2][2]){return grid[1][1];}
    if(grid[1][1] === grid[0][2]  && grid[1][1] === grid[2][0]){return grid[1][1];}
    if(grid[1][1] === grid[1][0]  && grid[1][1] === grid[1][2]){return grid[1][1];}
    if(grid[1][1] === grid[0][1]  && grid[1][1] === grid[2][1]){return grid[1][1];}
  }
  if(grid[2][2]){
    if(grid[2][2] === grid[2][0]  && grid[2][2] === grid[2][1]){return grid[2][2];}
    if(grid[2][2] === grid[0][2]  && grid[2][2] === grid[1][2]){return grid[2][2];}
  }
  return checkTie(grid) ? "tie" : null;   
}
 export function checkTie(grid){
   for(let i=0;i<3;i++){
     for(let j=0;j<3;j++){
       if(grid[i][j]===null){return false;}
     }
   }
   return true;
 }

// let ai = "X";
// let human = "O"; 

export function bestMove(board , ai , human) {
  let bestScore = -Infinity;
  let move;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] == null) {
        board[i][j] = ai;
        let score = minimax(board, 0, false , ai , human);
        board[i][j] = null;
        if (score > bestScore) {
          bestScore = score;
          move = { i, j };
        }
      }
    }
  }
  board[move.i][move.j] = ai;
  return move;
}

let scores = {
  X: 10,
  O: -10,
  tie: 0
};

function minimax(board, depth, isMaximizing , ai , human) {
  let result = checkWinner(board);
  if (result !== null) {
    return scores[result] - depth;
  }

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] == null) {
          board[i][j] = ai;
          let score = minimax(board, depth + 1, false , ai , human);
          board[i][j] = null;
          bestScore = Math.max(score, bestScore);
        }
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] == null) {
          board[i][j] = human;
          let score = minimax(board, depth + 1, true , ai , human);
          board[i][j] = null;
          bestScore = Math.min(score, bestScore);
        }
      }
    }
    return bestScore;
  }
}
