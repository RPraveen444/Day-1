function demo(){

    if("Yash"){
        console.log("HI"); 
    }
}
    
// false, 0, ""
// true, 10, -10, "Yash"
demo();   
console.log("-----------------")
    
// Function expression / Anonymous function:(functions without name)
var funExpre = function (a){
    
    console.log(a);

}    
// console.log(funExpre);
funExpre(10);    
console.log("-----------------")
    
// Arrow Function
    
var arrowFun = (a,b)=> a+b;
    
var arrowFun2= (a,b)=>{
    var sum=a+b;
    return sum;
}

// console.log(funExpre);
console.log(arrowFun(10,20));
console.log(arrowFun2(10,20));    
console.log("-----------------")
    
// Default Parameters
function defaultPara(a,b=0){
   console.log(a+b);
}
defaultPara(10,20);    