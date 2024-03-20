//Even Numbers with For-loop
function even(a){
  for(let i=2;i<=a;i=i+2){
    console.log(i);
  }
}
even(10);
console.log("-----------------")

//Even Numbers with do-while
function evenNum(b){
    let i=2;
    do{
      console.log(i);
      i=i+2;
    }while(i<=b);
}
evenNum(10);
console.log("-----------------")

//print prime or not
function prime (n){
    let i;
    for(i =2 ; i<n;i+=1){
        if(n%i==0){
            console.log("Not prime");
            break;
        }
    }
    if(i==n){
        console.log("prime");
    }
}
prime(17);
console.log("-----------------")

//prime number with count
function primeNumber(num1){
   let i,count,c;
   
   if(num1>=1){
    console.log("2");
   }

   for(count =2 ,i=3; count<=num1; i++){
      for(c=2;c<=i-1;c++){
        if(i%c==0){
            break;
        }
      }
      if(c==i){
        console.log(i);
        count++;
      }
   }

}
primeNumber(10);
console.log("-----------------")
