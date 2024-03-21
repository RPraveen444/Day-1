var it1={
    name:"Shoes",
    category:"footware",
    price:200
}

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

console.log(shopItems);

//Task-1
// Reduce the price of each item by 50 from shopItems array;
// And store the modified objs in new array.
const reducedItems = shopItems.map(item => {
    return {
      ...item,
      price: item.price - 50
    };
  });
  
console.log(reducedItems);
console.log(shopItems);

//Task-1
// var catItems= shopItems.map((ele,index,array)=>{
//     ele.price = ele.price- 50;
//     return ele;
// });
// console.log(catItems);
// console.log(shopItems);

//Task-2
// Get the total value of all the products in shopitems array.
const totalPrice = shopItems.reduce((accumulator, currentValue) => {
    // console.log(accumulator);
    // console.log(currentValue);
    return accumulator + currentValue.price;  //if i put  return accumulator.price + currentValue.price; //NaN initialy acc is obj
},0);
 
console.log(totalPrice); // 1350


  