let form= document.getElementById("form");
// console.log(form);

function handleForm(){
    event.preventDefault();
    let name= document.getElementById("userName");
    console.log(name.value);
    let pass= document.getElementById("userPass");
    console.log(pass.value);
}

form.addEventListener("submit",handleForm);