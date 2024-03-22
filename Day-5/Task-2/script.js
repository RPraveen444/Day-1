//Que-1
document.getElementById("mainDiv").style.color="red";
let changeClr = document.getElementsByClassName("para");
changeClr[0].style.color="blue";

//Que-2
// div-1
function changeBgClr(){
   event.target.style.backgroundColor="orange";
}
// div-2
function changeclr(){
    event.target.style.backgroundColor="black";
}
// div-3
let addImg = document.getElementById("div_3");
addImg.addEventListener("click",addImg1);
function addImg1(){
    let imgTag = document.createElement("img");
    imgTag.src = "20200712_152112.jpg";
    imgTag.style.width="100px";
    imgTag.style.height="100px";
    addImg.appendChild(imgTag);
}
// div-4
let chngaeSize = document.getElementById("div_4");
chngaeSize.addEventListener("click",changeSize);
function changeSize(){
    chngaeSize.style.width="50px";
    chngaeSize.style.height="50px";
}

//Que3
function changeDiv_5(){
    event.target.style.backgroundColor="pink";
    event.target.innerHTML = "I got clicked";

}

//Que-4
let num = document.getElementById("num");
let incre = document.getElementById("incre");
let decre = document.getElementById("decre");
let count = 0;

incre.addEventListener("click",()=>{
    count++;
    num.innerHTML = count;
})

decre.addEventListener("click",()=>{
    count--;
    num.innerHTML = count;
})

//Que-5
let arr = [{name:"Praveen",city:"Chennai",age:21},{name:"Bharath",city:"Madurai",age:19},{name:"Surya",city:"Delhi",age:23}];
let divParent = document.getElementById("div_5");
function addNmae(){
   for(let ele of arr){
    // console.log(ele.name);
    let h1 = document.createElement("h1");
    h1.innerHTML = ele.name;
    divParent.appendChild(h1);
   }
}




