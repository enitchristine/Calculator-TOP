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
    num1=parseInt(num1);
    num2=parseInt(num2);

    switch (operator){
        case "+":
            return add(num1,num2);
        case "-":
            return subtract(num1,num2);
        case "x":
            return multiply(num1,num2);
        case ":":
            return divide(num1,num2);
    }

}

function makeEvent(id){
    const button=document.getElementById(id);
    console.log(button.innerHTML);
    button.addEventListener("click",(e)=>{
        console.log("clicked");
        resultCheck=""; //checks if = was pressed recently
        display+=button.innerHTML;
        inputScreen.textContent=display;
    });
}


let button;
let operator=["+","-","x",":","C"];

const inputScreen = document.querySelector("#input");
let display="";


for (let i=0; i<10;i++){ //add event listener for number buttons
    makeEvent(i);
}

for (op in operator){ //add event listener for operator buttons
    makeEvent(operator[op]);
}

const equal=document.getElementById("=");
equal.addEventListener("click",(e)=>{

    //operate on the numbers on screen

    let numbers=display.split(/[x:+-]/);
    console.log(numbers);
    let op=display.split(/[1234567890]/);
    op=op.filter((x)=>x!="");
    console.log(op);
    let i=0;
    console.log(numbers.reduce((a,b)=>{
        let result=operate(a,b,op[i]);
        i++;
        return result;
    }
    ));

})
