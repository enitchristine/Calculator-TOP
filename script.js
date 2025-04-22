// add subtract multiple divide

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(num1,num2, operator){
    num1=parseFloat(num1);
    num2=parseFloat(num2);

    switch (operator){
        case "+":
            return add(num1,num2);
        case "-":
            return subtract(num1,num2);
        case "x":
            return multiply(num1,num2);
        case ":":
            if (num1==0 || num2==0){
                
            }
            return divide(num1,num2);
    }
}

function makeEventNum(id){
    const button=document.getElementById(id);
    button.addEventListener("click",(e)=>{
        if (equalCheck){
            curNum="";
            equalCheck=false;
        }
        curNum+=button.innerHTML
        screen.textContent=curNum;
    });
}

function makeEventOp(id){
    // when pressed an op: push number in curNum
    const button=document.getElementById(id);
    button.addEventListener("click",(e)=>{
        equalCheck=false;
        screen.textContent=button.innerHTML;// change to highlight button
        numbers.push(curNum);
        
        if (numbers.length==2){
            numbers=[showResults(curOp)];                 
        }
        curOp=button.innerHTML;
        curNum="";
    }
)
}

function showResults(op){
    let results;
    if (op==""){
        results = numbers[0];
    }else{
        results=operate(numbers[0],numbers[1],op);
        if (results%1>0){   //if results has decimals
            results=results.toFixed(2);
            }
    }
    screen.textContent=results;
    return results;
}

function clearFunc(){
    curNum="";
    curOp=""
    numbers=[];
    equalCheck=false;
    screen.textContent="";
}

let button;
let others=["+","-","x",":","."];
let operators=["+","-","x",":"];

let curNum="";
let curOp="";
let numbers=[];
let equalCheck=false;

const screen = document.querySelector("#screen");


for (let i=0; i<10;i++){ //add event listener for number buttons
    makeEventNum(i);
}

for (icon in others){ //add event listener for other buttons
    makeEventOp(others[icon]);
}

const equal=document.getElementById("=");

equal.addEventListener("click",(e)=>{   //operate on the numbers on screen when "=" is clicked
    numbers.push(curNum);
    curNum=showResults(curOp);
    curOp = "";
    numbers=[];
    equalCheck=true;
}
)


const clear=document.getElementById("C");
clear.addEventListener("click",(e)=>{
    clearFunc();
    
});
