const add = function(a,b) {
    console.log(a + b)
    return a + b;
}

const subtract = function(a, b) {
    return a - b;

}

const multiply = function(a, b){
    return a * b;

}

const divide = function(a,b){
    if ((a || b) == 0){ return "You can't do that"};
    return a / b; 
}

const operate = function (operator, num1, num2){

    if (operator == "+"){
       return add(num1,num2);
    }else if (operator == "-"){
        return subtract(num1,num2);

    }else if(operator == "*"){
        return multiply(num1,num2);
    }else if(operator == "/"){
        return divide(num1, num2);
    }
}
let firstNum;
let secondNum;
let operand = '';
let displayText = '0';



const display = document.querySelector('#display');

const digitBtns = document.querySelectorAll('.digits');
const operandBtns = document.querySelectorAll('.operand');

digitBtns.forEach((btn) => btn.addEventListener('click', (event) => {
    console.log(operand);
    if ((event.target.innerHTML == '.' && !(display.innerHTML.includes('.'))) || event.target.innerHTML != '.'){
        if (operand == '' && firstNum === undefined){
            displayText = display.innerHTML + event.target.innerHTML;
    
            display.innerHTML = displayText;
        }else if(operand != '' && firstNum != undefined){
            console.log(displayText)
            if (parseFloat(displayText) == firstNum){
                displayText = event.target.innerHTML;
            }else{
                displayText = display.innerHTML + event.target.innerHTML;
            }
            
            display.innerHTML = displayText;
            
        }
    }
    

}));



operandBtns.forEach((btn) => btn.addEventListener('click', (event) => {
  
   if (operand == ''){
        if (firstNum == undefined){
        firstNum = displayText;
        
        console.log(firstNum);
        }
        operand = event.target.innerHTML;

   }else{
        secondNum = display.innerHTML;
        console.log(firstNum + operand + secondNum)
        let result = Math.round(operate(operand, parseFloat(firstNum), parseFloat(secondNum))*100) / 100;
        displayText = result;
        display.innerHTML = result;
        operand = event.target.innerHTML;
        firstNum = result;
   }
   
    

}));

const equalsBtn = document.querySelector('#equals');
const clearBtn = document.querySelector('#clear');

equalsBtn.addEventListener('click', (event)=> {
    if (operand != ''){
        secondNum = display.innerHTML;
        console.log(firstNum + operand + secondNum)
        let result = Math.round(operate(operand, parseFloat(firstNum), parseFloat(secondNum))*100) / 100;
        displayText = result;
        display.innerHTML = result;
        operand = '';
        firstNum = result;


    }
    
} );

clearBtn.addEventListener('click', (event) => {
    displayText = '';
    firstNum = undefined;
    secondNum = undefined;
    operand = '';
    display.innerHTML = displayText;
});