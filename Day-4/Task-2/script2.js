//print the location of "my" in a string "I am enjoying my training".
let str = "I am enjoying my training";
let arr = str.split(" ");
console.log(arr);

arr.forEach((ele,ind)=>{
   if(ele == "my"){
    console.log(ind);
   }
})

//print the location of "m" in a string "I am enjoying my training".
let str1 = "I am enjoying my training";
console.log(str1.indexOf("m"));

//extract the complete string from index 3 of the string "I am enjoying my training". and store in a variable
let str3 = "I am enjoying my training";
let extractValue = "";
let arr1 = str3.split(" ");
extractValue+=arr1[3];
console.log(extractValue);

//extract string from index 0 to 4 from the string "I am enjoying my training". and store in a variable.
let ind1,ind2,ind3,ind4,ind5;
ind1 = arr1[0];ind2 = arr1[1];ind3 = arr1[2];ind4 = arr1[3];ind5 = arr1[4];
console.log(ind1,ind2,ind3,ind4,ind5);

//replace "training" with "journey" in "I am enjoying my training". and store in a variable.
let str4 = "I am enjoying my training";
console.log(str4.replace("training","journey"));

//Print all the characters of a string using for loop. can use charAt() or str[];
let str5 = "I am enjoying my training";
let characters = "";
for(let i = 0 ; i<str5.length;i++){
    characters += str5.charAt(i);
}
console.log(characters);

//store string str="a,b,c" into an array.
let str6 = "a,b,c";
let arr2 = str6.split(",");
console.log(arr2);

//remove white spaces from the string str="abc     ".
let str7 = "abc     ";
console.log(str7.trim());

//Add two strings using the concat() function. and print them. make sure there is space between concatenated elements.
let str8 = "hello";
let str9 = "world";
console.log(str8.concat(" ").concat(str9));

//Remove 'e' from the following string: const str = "abcedgedcve";
let str10 = "abcedgedcve";
str10 = str10.split("e");
console.log(str10.join(""));

//Convert the following string into an array: const str = "Hello there I am jack";
let str11 = "Hello there I am jack";
console.log(str11.split(" "));

//Check if the given string is a palindrome or not: javascript const str = "racecar";
let str12 = "racecar";
let str13 = ""
for(let i=0;i<str12.length;i++){
    str13+=str12[str12.length-1-i];
}
// console.log(str13);
if(str12==str13){
    console.log("palindrome");
}else{
    console.log("Not a palindrome");
}

//Write a function to check if a given string is a valid email address: const email1 = "example@example.com"; const email2 = "invalid@email";
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
  
const email1 = "example@example.com";
const email2 = "invalid@email";
  
console.log(isValidEmail(email1)); // Output: true
console.log(isValidEmail(email2)); // Output: false

  
//Check if a string starts with a specific substring:const str = "Hello, World!";const substr = "Hello";
let str14 =  "Hello, World!";
let str15 =   "Hello";
console.log(str14.startsWith(str15));

// let pattermEx = /^[a1@]+$/;
// let word = "praveen1@gamil.com";
// console.log(pattermEx.test(word));



