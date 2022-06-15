
var computerSelection=null;
var playerSelection=null;
var player=0;
var computer=0;
var options=["rock","paper","scissors"];
const container = document.querySelector('#container'); 

 //var document.createElement("br") = document.createElement("br");
container.appendChild(document.createElement("br"));




// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    //alert(button.id);
    var playerSelection=button.id;
    //console.log(playerSelection);
    playAround(playerSelection);
  });
});


function computerPlay(){
    var computerChoice=options[Math.floor(Math.random()*options.length)];
    return computerChoice;
}

function playAround(playerSelection){
    var computerSelection=computerPlay();
    var result=null;
    container.innerHTML="";

    const choice = document.createElement('choice'); 
    choice.textContent=`Player: ${playerSelection}, Computer: ${computerSelection}`;
    container.appendChild(document.createElement("br"));
    container.appendChild(choice);
    container.appendChild(document.createElement("br"));

    if (playerSelection == "rock"){
        if (computerSelection == "rock"){
            result="tie";
        }
        if (computerSelection == "paper"){
            result="computer";
            ++computer;
            
        }
        if (computerSelection == "scissors"){
            result="player";
            ++player;
            
        }
    }

    if (playerSelection == "paper"){
        if (computerSelection == "rock"){
            result="player";
            ++player;
            
        }
        if (computerSelection == "paper"){
            result="tie";
        }
            if (computerSelection == "scissors"){
            result="computer";
            ++computer;
            
        }
    }
    if (playerSelection == "scissors"){
        if (computerSelection == "rock"){
            result="computer";
            ++computer;
            
        }
        if (computerSelection == "paper"){
            result="player";
            ++player;
        
        }
        if (computerSelection == "scissors"){
            result="tie";
        }
        
    }

    if (result == "tie"){
        const a_tie = document.createElement('tie'); 
        a_tie.textContent="It's a tie! ";
        container.appendChild(document.createElement("br"));
        container.appendChild(a_tie);
    }
    else{
        const winner = document.createElement("winner");
        winner.textContent=`Winner: ${result}!`;
        container.appendChild(document.createElement("br"));
        container.appendChild(winner);

        if (player < 5 && computer< 5){
            const score =document.createElement('score');
            score.textContent="Player: "+ player +" Computer: "+ computer+ " "; 
            container.appendChild(document.createElement("br"));
            container.appendChild(score)
        }
        else{
            const round = document.createElement('round');
            
            if (player == 5){
                round.textContent="Player wins round!";
            }
            else{
                round.textContent="Computer wins round!";
            }
            container.appendChild(document.createElement("br"));
            container.appendChild(round)
            container.appendChild(document.createElement("br"));
            computer=0;
            player=0;
        } 
        
    }
    
    return result
}




