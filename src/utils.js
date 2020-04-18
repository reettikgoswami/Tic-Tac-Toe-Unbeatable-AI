
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
  return false;  
}

