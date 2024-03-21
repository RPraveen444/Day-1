// Default Parameters

function demoPara(no1,no2=0){
    console.log(no1);  // 10
    console.log(no2); // undefined


    var sum=no1+no2;
    console.log(sum);
}

demoPara(10);   

// REST Operator ...

function sum(...numbers){
 console.log(numbers); //30
    var sum=0;
 
    for (let index = 0; index < numbers.length; index++) {
        sum += numbers[index];
    
    }
    console.log(sum);
}

sum(10,10);
sum(10,20,40);
sum(10,20,30,40);


// Spread Operator ...

function demoSpread(a,b,...c){
    console.log(a); //10
    console.log(b); //20
    console.log(c); // [30, 40]
}

var arr=[10,20,30,40];
demoSpread(...arr);

//difference b/w shallow copy and clone copy
var arr3=[1,2,3];
var arr4 = arr3;
arr[0]=11;
console.log(arr3); //[1, 2, 3]
console.log(arr4); //[1, 2, 3]

var arr5 = [10,20,30,40];
var arr6 = [...arr5];
arr5[0]=1;
console.log(arr5); // [1, 20, 30, 40]
console.log(arr6); //[10, 20, 30, 40]

//Array Methods
