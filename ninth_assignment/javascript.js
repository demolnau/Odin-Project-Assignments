let selection;


//gameBoard as a module
const gameBoard = (function () {
    const gameboard = new Array(9);
    let counter = 0;
    //let activation_status=false;

    const gameboard_items = document.querySelectorAll('.gameboard_item');
    const restart_btn= document.querySelector(".restart_btn");
    restart_btn.addEventListener('click', clear);

    //add a 'click' listener event for each button
    gameboard_items.forEach((button) => {
      button.addEventListener('click', () => {
        //if player makes no selection the symbol will be set to X for next move
        if (selection == null ) {
          selection="X"
          console.log("Console seleciton is undefined. X chosen as default.");
        }
        //if player makes a selection
        else{
          //if (activation_status == false){
            button.innerHTML = selection;
          //console.log("Player has made a choice!");
          //activate(activation_status);
          //console.log(activation_status);
          ++counter;
          alternate(counter);
          //}
          
        }
     })
    });

    function activate(activation_status){
      if (activation_status==false){
        activation_status=true;
        //console.log("this button has been activated!");
        console.log(activation_status);
      }
      else{
        console.log("CHEATER!")
      }
      return activation_status;
    }


    //clear function to reset board and reset variables
    function clear(){
      selection=null;
      counter=0;
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

    return{clear}
})();

//displayController as a module
const displayController = (function () {
    //logic
})();


const player = function(){
  const playerSelection = document.querySelectorAll(".selection");
  playerSelection.forEach(function(button){
      button.addEventListener('click', function(){
        selection=button.innerHTML;
        console.log("Player selection: " + selection);
      });
    });
}();



