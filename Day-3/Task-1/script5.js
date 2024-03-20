//Leap Year
const yr = parseInt(prompt("Enter the Year"));
if((yr%4==0 && yr%100!=0) || yr%400==0){
    console.log("It is Leap Year");
}
else{
    console.log("It is Not a Leap Year");
}

//Guessing Number
let Random = Math.floor(Math.random() * 100) + 1;
console.log(Random);
let flag = true;

while(flag){
    let num = parseInt(prompt("Guess The Number"));
    if(num == Random){
        console.log("Congrats You guessed The Right Number");
        flag = false;
    }else if(num>Random){
        console.log("Your Guessing Number is Greater than System Number");
        console.log(Random);
    }else{
        console.log("Your Guessing Number is Less than System Number");
        console.log(Random);
    }
}

//Students Grade
function gradeCheck(mark){
   if(mark>=90){
    console.log("Your Grade is \"A\" ");
   }else if(mark>=80 && mark<=89){
    console.log("Your Grade is \"B\" ");
   }else if(mark>=70 && mark<=79){
    console.log("Your Grade is \"C\" ");
   }else if(mark>=60 && mark<=69){
    console.log("Your Grade is \"D\" ");
   }else{
    console.log("Your Grade is \"F\" ");
   }
}
const score = parseInt(prompt("Enter Your Mark"));
gradeCheck(score);

//Find Index
const arr = [1, 2, 3, 4, 5, 6];
let findNum = 6;
let ele;

for(ele=0 ; ele<arr.length;ele++){
    if(arr[ele] == findNum){
        console.log(`The number is Found at Index of ${ele}`);
        break;
    }
}
if(ele==arr.length){
    console.log("Element not found in array");
}

//Remove element
const fruits = ["banana", "mango", "apple", "kiwi"];
let removeEle = "apple";
let i;
for(i=0 ; i<fruits.length;i++){
    if(fruits[i] == removeEle){
        fruits.splice(i,1);
        console.log(fruits);
        break;
    }
}
if(i==fruits.length){
    console.log("Element not found in array");
}

//Reverse Array
const numbers = [23, 45, 12, 67, 89, 34];
console.log(numbers.reverse());
//OR
let left =0;
let right = numbers.length-1;
let temp =0;
while(left<right){
    swap = left;
    left = right;
    right = swap;
    left++;
    right++;
}
console.log(numbers);

//Find Maximum
const numbers1 = [23, 45, 12, 67, 89, 34];
let max = numbers1[0];
for(let ele of numbers1){
    if(ele>max) max=ele;
}
console.log(max);

//Find Second Largest
function secLarg(num){
    num.sort((a,b)=>a-b);
    console.log(numbers2);
    console.log(numbers2[numbers2.length-2]);
}
const numbers2 = [10, 5, 8, 20, 15, 12];
secLarg(numbers2);

//Find sum
function sumOfEvenNumbers(numbers6) {
    let sum = 0;
    for (let i = 0; i < numbers6.length; i++) {
        if (numbers6[i] % 2 === 0) {
            sum += numbers6[i];
        }
    }
    return sum;
}

const numbers6 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(sumOfEvenNumbers(numbers6));

//add object in array
let students = [{Name:"Praveen",Age : 22}];
console.log(students);

let obj1 = {Name:"Prasanth",Age : 25};
let obj2 = {Name:"Bharath",Age : 21};
let obj3 = {Name:"Arun",Age : 11};

students.push(obj1);
students.push(obj2);
students.push(obj3);
console.log(students);








