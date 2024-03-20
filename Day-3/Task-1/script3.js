const sum = (a,b)=> parseInt(a)+parseInt(b);
const Sub = (a,b)=> parseInt(a)-parseInt(b);
const Mul = (a,b)=> parseInt(a)*parseInt(b);
const Div = (a,b)=> parseInt(a)/parseInt(b);

function calculator(){
    const userInput = prompt("Enter the Performing Operations","Ex.sum,minus,mul,div");
    const num1 = prompt("Enter the first Number");
    const num2 = prompt("Enter the second Number");
    // console.log(userInput,num1,num2);

    switch(userInput){
        case "sum" :
            console.log(`sum of ${num1} + ${num2} is ${sum(num1,num2)}`);
            break;
        case "minus" :
            console.log(`subtraction of ${num1} - ${num2} is ${Sub(num1,num2)}`);
            break;
        case "mul" :
            console.log(`Multiplication of ${num1} * ${num2} is ${Mul(num1,num2)}`);
            break;
        case "div" :
            console.log(`Division of ${num1} / ${num2} is ${Div(num1,num2)}`);
            break;
        default :
            console.log("Invalid Input");
            break;
    }
}
calculator();