var number1= null;
var number2=null;
//const numbers=["1","2","3","4","5","6","7","8","9","0"]
const operators=["+","-","*","/"]
var operator=null;
//var selection=null;
var full_selection=null;
var number_selection=null;
//var current_display=null;
//var needToClear=false;

//var last_button=null
//var current_button=null



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
    button_selection=nbbutton.textContent;
    number_selection=appendNumber(button_selection);
    //add_to_display(number_selection)
    add_to_display(button_selection);
  });
});



operatorBtns.forEach((button) => { 
  button.addEventListener('click', () => { 
    if(operator == null){
        operator = setOperator(button.textContent);
        if(number1==null){
            number1 = setNumber();
        };
    }
    else{
        
        number2=setNumber();
        operate();
        operator = setOperator(button.textContent);

    }
    //full_selection= `${number_selection}` + `${operator}`;
    add_to_display(operator)
    //add_to_display(full_selection)
  }); 
});

function add_to_display(new_element){
    if(full_selection==null){
        full_selection=new_element;
    }
    else{
        full_selection=full_selection+new_element;
    }
    display.textContent=`${full_selection}`
    //display.textContent=`${new_element}`;
    screen.appendChild(display);
}

function appendNumber(number_from_button){
    if (number_selection==null){
        number_selection=number_from_button;
    }
    else {
        number_selection+=number_from_button;
    }
    return number_selection;
}

function setOperator(value){
    var operator_value = value;
    //console.log("operator set: " + operator_value);
    return operator_value;
}

function setNumber(){
    //console.log("number selection: "+ number_selection)
    var number = number_selection;
    //console.log("number has been set : "+ number_selection);
    number_selection=null;  
    return number;
}


function operate(){
    var solution=null;
    if(number2==null){
        number2 = setNumber();
    }

    number1=parseFloat(number1);
    number2=parseFloat(number2);
    //reset_screen();

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
    
    //display.textContent=`${solution}`;
    //screen.appendChild(display)
    //needToClear = true;
    reset_screen();
    console.log("number1 : " + number1 + '\n'+
    "number2: "+ number2+ '\n'+
    "operator:" + operator+ '\n'+
    "solution:"+ solution);

    add_to_display(solution);
    number1=solution;
    number2=null;
    operator=null;

    console.log("number1 reset to solution: "+ number1+'\n'+
    "number2: "+ number2+ '\n'+
    "operator:" + operator);


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
    if (number2 == '0'){
        reset_screen();
        console.log("EXCUSE YOU! YOU MAY NOT DIVIDE BY ZERO!");
        return "Excuse you! You may not divide by zero! Hit clear and try again, you fool!"
    }
    else{
        return number1/number2;
    }
    
}

function reset_screen(){
    full_selection=null;
}

function clear(){
    screen.innerHTML="";
    full_selection=null;
    number_selection=null
    number1=null;
    number2=null
    operator=null;
    solution=null;

    console.log("screen reset"+'\n'+
    "number1 : " + number1 + '\n'+
    "number2: "+ number2+ '\n'+
    "operator:" + operator+ '\n'+
    "solution:"+ solution
    );

}

/*

function delete(){

}
*/




