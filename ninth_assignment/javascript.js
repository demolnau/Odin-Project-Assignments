
let selection;


//gameBoard as a module
const gameBoard = (function () {
    const gameboard = new Array(9);
    const gameboard_items = document.querySelectorAll('.gameboard_item');
    gameboard_items.forEach((button) => {
      // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
      button.innerHTML = selection;
      console.log("Player has made a choice!");
        });
    });
    const restart_btn= document.querySelector(".restart_btn");
    restart_btn.addEventListener('click', clear);
    function clear(){
      selection=null;
      gameboard_items.forEach((button) => {
        button.innerHTML = "";
      });
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



