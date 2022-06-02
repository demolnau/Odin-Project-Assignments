var CHOICE=null;
var computerSelection=null;
var playerSelection=null;
var numberOfRounds=0;
var playerSelectionArray=[]

var options=[
    "rock",
    "paper",
    "scissors"
];

/*
function player_selection(){
    var CHOICE = window.prompt("Rock, Paper, OR Scissors?");
    var choice= CHOICE.toLowerCase();
    for(let i = 0; i < options.length; i++){
        if (choice == options[i]){
            var selection=options[i]
            return selection
        }
    }
}
*/

function player_selection(){
    var CHOICE = window.prompt("Rock, Paper, OR Scissors?");
    var choice= CHOICE.toLowerCase();
    if (options.includes(choice)){
        for(let i = 0; i < options.length; i++){
            if (choice == options[i]){
                var selection=options[i]
                //alert(`${selection}`)
                return selection
            }
        }
    }
    else{
        alert("Something went wrong. Let's try again.")
        return player_selection();
    }
}

function computerPlay(){
    var computerChoice=options[Math.floor(Math.random()*options.length)];
    return computerChoice;
}

function playAround(){
    var computerSelection=computerPlay()
    var playerSelection=player_selection()
    var result=null;
    if (playerSelection==undefined){

    }
    alert(`Player: ${playerSelection}, Computer: ${computerSelection}`)
    if (playerSelection == "rock"){
        if (computerSelection == "rock"){
            result="tie"
        }
        if (computerSelection == "paper"){
            result="computer"
        }
        if (computerSelection == "scissors"){
            result="player"
        }
    }

    if (playerSelection == "paper"){
        if (computerSelection == "rock"){
            result="player"
        }
        if (computerSelection == "paper"){
            result="tie"
        }
            if (computerSelection == "scissors"){
            result="computer"
        }
    }
    if (playerSelection == "scissors"){
        if (computerSelection == "rock"){
            result="computer"
        }
        if (computerSelection == "paper"){
            result="player"
        }
        if (computerSelection == "scissors"){
            result="tie"
        }
        
    }
    alert(`Winner: ${result}!`)
    return result
}

//round=playAround()

function game(numberOfRounds){
    player=0
    computer=0
    tie=0
    for (let i = 0; i < numberOfRounds; i++) {
        alert(`Round ${i+1}`)
        round=playAround()
        if (round == "player"){
            ++player;
        }
        if (round == "computer"){
            ++computer;
        }
        if (round == "tie"){
            ++tie;
        }
     }
    alert("Player: "+player+" Computer: "+computer+" Tie: "+tie)
}

var play_with_me=window.prompt("Would you like to play Rock, Paper, Scissors?","YES")
if (play_with_me.toLowerCase() == "no"){
    alert("Okeydoke! Until next time!")
}
else{
var number_of_games=Number(window.prompt("How many rounds would you like to play?"))
game(number_of_games)
}

var play_again=window.prompt("Would you like to play again?")
    if (play_again.toLowerCase() == "no"){
    alert("Goodbye!")
}
else{
    var number_of_games=Number(window.prompt("How many rounds would you like to play?"))
    game(number_of_games)
}

alert("Refresh to play more games!")

