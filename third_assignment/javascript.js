var options=[
    "rock",
    "paper",
    "scissors"
];

function computerPlay(){
    var computerChoice=options[Math.floor(Math.random()*options.length)];
    return computerChoice;
}

//TODO make this into a prompt and remove hardcoded playerSelection
const playerSelection="rock"
var computerSelection=null;

function playAround(playerSelection){
    var computerSelection=computerPlay()
    if (playerSelection == "rock"){
            if (computerSelection == "rock"){
                return "tie"
            }
            if (computerSelection == "paper"){
                return "computer"
            }
            if (computerSelection == "scissors"){
                return "player"
            }
        }
        if (playerSelection == "paper"){
            if (computerSelection == "rock"){
                return "player"
            }
            if (computerSelection == "paper"){
                return "tie"
            }
            if (computerSelection == "scissors"){
                return "computer"
            }
        }
        if (playerSelection == "scissors"){
            if (computerSelection == "rock"){
                return "computer"
            }
            if (computerSelection == "paper"){
                return "player"
            }
            if (computerSelection == "scissors"){
                return "tie"
            }
        }
}

var numberOfRounds=0;
var playerSelectionArray=[]

function game(playerSelectionArray,numberOfRounds){
    player=0
    computer=0
    tie=0
    for (let i = 0; i < 5; i++) {
        round=playAround(playerSelection,computerSelection)
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
return("Player: "+player+" Computer: "+computer+" Tie: "+tie)
}

//TODO Remove hardcoded playerSelectionArray
playerSelectionArray=["scissors","rock","paper","paper","rock"]
console.log(game(playerSelectionArray,5))