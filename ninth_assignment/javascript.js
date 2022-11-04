let selection;

const player = function(){
  const playerSelection = document.querySelectorAll(".selection");
  playerSelection.forEach(function(button){
      button.addEventListener('click', function(){
        selection=button.innerHTML;
      });
    });
  function getSign(){
    return selection;
    
  };
  return{getSign}
}();

//gameBoard as a module
const gameBoard = (function () {
    const gameboard = new Array(9);
    let counter = 0;
    var gameOver=false;
    const gameboard_items = document.querySelectorAll('.gameboard_item');
    const restart_btn= document.querySelector(".restart_btn");
    restart_btn.addEventListener('click', clear);

    function getBoard(){
      return(gameboard)
    };


    

    const setBoard= (function(){
      //add a 'click' listener event for each button
    gameboard_items.forEach((button) => {
      
      button.addEventListener('click', () => {
        //if player makes no selection the symbol will be set to X for next move
        if (selection == null ) {
          selection="X";
          console.log("Console seleciton is undefined. X chosen as default.");
        }
        //if player makes a selection
        else{
          if(gameOver==false){
            if (button.textContent == ""){
              button.innerHTML = selection;
              gameboard[button.id-1]=selection;
              ++counter;
              alternate(counter);
              //console.log(counter);
              if(counter>=5){
                console.log("now we can check!");
                winner = displayController.check_winning_combinations();
                if (winner!=null){
                  gameOver=true;
                  console.log("No more moves are allowed!");
                  //clear();
                }
              }
            }
            else{
              console.log("CHEATER!");
            }
          }
        }
      })
    });
    })();



    //clear function to reset board and reset variables
    function clear(){
      selection=null;
      counter=0;
      gameOver=false;
      for(let i = 0; i < gameboard.length; i++){gameboard[i]=""};
      gameboard_items.forEach((button) => {
        button.innerHTML = "";
      });
    };

    //function to alternate the symbol played
    function alternate(counter){
      if(counter%2==1){
        if(selection =="X"){
          selection = "O";
        }
        else{
          selection="X";
        }

      }
      else if(selection=="X"){
        selection="O";
      }
      else{
        selection = "X";
      }
    };
    
    function get_number_of_moves_played(){
      return counter;
    }
    return{clear, getBoard, get_number_of_moves_played,setBoard}
})();

//displayController as a module
const displayController = (function () {
  //console.log(gameBoard.getBoard());
  var current_board = gameBoard.getBoard();
  //console.log(current_board);
  let winning_combos =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  

  function check_winning_combinations(){
      let winner;
      for(let i = 0; i < winning_combos.length; i++){
        if(current_board[winning_combos[i][0]] + current_board[winning_combos[i][1]] + current_board[winning_combos[i][2]] =="XXX"){
          //console.log("Player X is a winner!");
          winner="Player X";
        }
        else if(current_board[winning_combos[i][0]]+ current_board[winning_combos[i][1]] + current_board[winning_combos[i][2]] =="OOO"){
          //console.log("Player O is a winner!");
          winner="Player O";
        }
      }

      if (gameBoard.get_number_of_moves_played()>=5<9){
        if (winner!=null){
          console.log(winner+" is the winner!");
        }
      }

      if (gameBoard.get_number_of_moves_played()==9){
        if(winner == null){
          console.log("We have a tie");
        }
      }
      return(winner);
  };


   return{check_winning_combinations} 
})();








