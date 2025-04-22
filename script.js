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

function makeEvent(id){
    const button=document.getElementById(id);
    console.log(button.innerHTML);
    button.addEventListener("click",(e)=>{
        console.log("clicked");
        if (resultCheck){ //checks if = was pressed just before, clear
            display="";
            resultCheck=false;
        }; 
        display+=button.innerHTML;
        inputScreen.textContent=display;
    });
}

let button;
let others=["+","-","x",":","."];
let operators=["+","-","x",":"];
let resultCheck = false;
const inputScreen = document.querySelector("#input");
let display="";
const resultScreen = document.querySelector("#result");

for (let i=0; i<10;i++){ //add event listener for number buttons
    makeEvent(i);
}

for (icon in others){ //add event listener for other buttons
    makeEvent(others[icon]);
}

const equal=document.getElementById("=");
equal.addEventListener("click",(e)=>{   //operate on the numbers on screen when "=" is clicked

    let numbers=display.split(/[x:+-]/); //get 
    numbers=numbers.filter((x)=>x!="");
    let op=display.split(/[1234567890.]/).join("").split("");
    op=op.filter((x)=>x!="");

    // check if :0
    let divByZero=false;
    for (let i=0; i<numbers.length;i++){
        if (numbers[i]==0 && op[i-1]==":"){
            divByZero=true;
            break;
        }
    }
    
    if (numbers.length<=op.length || divByZero){
        resultScreen.textContent="ERROR";
    }else{
        let i=0;
        let results=numbers
            .reduce((a,b)=>{ 
                let result=operate(a,b,op[i]);
                i++;
                return result;
            }
        );

        if (results%1>0){   // if results has decimals
            results=results.toFixed(2);
        }

        resultScreen.textContent=results;
        
    }
    resultCheck=true;
}
)

const clear=document.getElementById("C");
clear.addEventListener("click",(e)=>{
    display="";
    inputScreen.textContent=display;
});
