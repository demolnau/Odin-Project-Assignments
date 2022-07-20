var number1= null;
var number2=null;
//const numbers=["1","2","3","4","5","6","7","8","9","0"]
//const operators=["+","-","*","/"]
var operator=null;
var selection=null;
var playerSelection=null;
var needToClear=false;


const equalsBtn = document.getElementById('equals')
const deleteBtn = document.getElementById('DELETE')
const clearBtn = document.getElementById('CLEAR')
const screen = document.querySelector('#screen');
const nbbuttons = document.querySelectorAll('[numbered-btns]');
const operatorBtns = document.querySelectorAll('[operator-btns]'); 
const display = document.createElement("display");

clearBtn.onclick = clear;
equalsBtn.onclick = operate;
//deleteBtn.onclick = delete;


nbbuttons.forEach((nbbutton) => {
  nbbutton.addEventListener('click', () => {
    selection=nbbutton.textContent;
    appendNumber(selection);
    //console.log(playerSelection)
    //console.log(selection);
    if(needToClear){
        clear();
        needToClear=false;
    }
    else{
    const display = document.createElement("display");
    display.textContent=`${selection}`;
    screen.appendChild(display);
    }
  });
});



operatorBtns.forEach((button) => { 
  button.addEventListener('click', () => { 
    //console.log(button.textContent);
    operator = setOperator(button.textContent);
    //console.log("operator: " + operator)
    number1 = setNumber();
    //console.log("number1 : " + number1);
    
    display.textContent=`${operator}`;
    screen.appendChild(display);
  }); 
});


function appendNumber(number_from_button){
    if (playerSelection==null){
        playerSelection=number_from_button;
    }
    else {
        playerSelection+=number_from_button;
    }
    return playerSelection;
}

function setOperator(value){
    var operator_value = value;
    return operator_value;
}

function setNumber(){
    var number = playerSelection;
    //console.log(typeof number)
    playerSelection=null;
    return number;
}


function operate(){
    var solution=null;
    number2 = setNumber();
    console.log("number1 : " + number1);
    console.log("number2: "+ number2);
    console.log("operator:" + operator);

    number1=parseFloat(number1);
    number2=parseFloat(number2);
    reset_screen();

    if (operator == "+"){
        solution = add(number1, number2);
    }
    if (operator == "-"){
        solution = subtract(number1, number2);
    }
    if (operator == "*"){
        solution = multiply(number1, number2);
    }
    if (operator == "/"){
        solution = divide(number1, number2);
    }
    console.log(solution);
    display.textContent=`${solution}`;
    screen.appendChild(display)
    needToClear = true;
    //playerSelection=solution;
    //number1=setNumber();
    //clear();
    return solution; 
    
    
}

function add(number1, number2){
    return number1 + number2;
}

function subtract(number1, number2){
    return number1 - number2;
}

function multiply(number1, number2){
    return number1 * number2;
}

function divide(number1, number2){
    return number1/number2;
}

function reset_screen(){
    screen.innerHTML = '';
}

function clear(){
    screen.innerHTML="";
    playerSelection=null;
    number1=null;
    number2=null
    operator=null;
}

/*

function delete(){

}
*/




