let formEle= document.getElementById("form");
let container= document.getElementById("text");
let submit= document.getElementById("submit");
// console.log(form);

let userArray = [];
function handleForm(){
    event.preventDefault();
    let name= document.getElementById("userName").value;
    console.log(name);
    let email= document.getElementById("useremail").value;
    console.log(email);
    
    class form{
        constructor(name,email){
            this.name = name;
            this.email = email;
        }
    }
    let obj = new form(name,email);
    console.log(obj);
    userArray.push(obj);
    console.log(userArray);
    
    for(let ele of userArray){
        container.innerHTML += `Name : ${ele.name} <br> Email : ${ele.email} <br>`;
    }
    
    userArray.pop();
    formEle.reset();
}

formEle.addEventListener("submit",handleForm);

// submit.addEventListener("click",()=>{
    
//     console.log("hi")
// })



