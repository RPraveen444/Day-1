// var num=[1,2,3,4,5]

// 4th type to iterate over an array.
// num.forEach(function (element, index, array){
//     console.log(`${element} <==> ${index} <==> ${array}`);
// });


// Get even number from array num and store in new array

// var evenNum=[];

// for(var ele of num){
//     if(ele%2==0){
//         evenNum.push(ele);
//     }
// }
// console.log(num);
// console.log(evenNum);


// var evenNum=num.filter((ele)=> {
//    return ele%2==0; 
// });
// console.log(num);
// console.log(evenNum);





// Objects
var it1={
    name:"Shoes",
    category:"footware",
    price:200
}

// console.log(it1["price"]);
// console.log(it1.price);
// for(var key in it1 ){
//     // console.log(key);

//     // console.log(it1.key);
//     console.log(it1[key]);
// }

// it1.color="red";

// console.log(it1);


var it2={
    name:"Shirt",
    category:"Clothes",
    price:800
}

var it3={
    name:"Pant",
    category:"Clothes",
    price:500
}



var shopItems=[it1,it2,it3];
// console.log(shopItems);

// Get item which belong to "Clothes" category and add them in new array.
// var catItems= shopItems.filter((ele,index,array)=>{
//      return ele.category =="Clothes";
// });
// console.log(catItems);


// var num=[1,2,3,4,5];

// Add 2 in each element of num array and store the new values in a new array.

// var newArray=[];
// for(var ele of num){
//     ele+=2;
//     newArray.push(ele);
// }
// console.log(num);
// console.log(newArray);

// MAP

// var newarry= num.map((ele,index,array)=>{
//     console.log(ele);
//     ele=ele+2;
//     return ele;
// });
// console.log(num);
// console.log(newarry);

// Task
// Reduce the price of each item by 50 from shopItems array;
// And store the modified objs in new array.


// Reduce method
var num=[1,2,3,4,5];

var singleValue= num.reduce((acc,ele,index,array)=>{
    console.log(` acc: ${acc} <==> ele: ${ele} <==> index: ${index} `);

    return acc*ele;

});

console.log(singleValue);
