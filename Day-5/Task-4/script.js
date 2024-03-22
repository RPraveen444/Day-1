const parentDiv=document.getElementById('parent');
const childDiv=document.getElementById('child');

const bodyE=document.querySelector('body');

function parentHandler(){
    // event.stopPropagation();       
    console.log("Parent Got Clicked");
}

function childHandler(){
    event.stopPropagation(); 
    console.log("Child Got Clicked");
}


function bodyHandler(){
    //event.stopPropagation(); 
    console.log("Body Got Clicked");
}

parentDiv.addEventListener('click',parentHandler,true); //true for event capturing(reverse)
childDiv.addEventListener('click',childHandler,true);
bodyE.addEventListener('click',bodyHandler,true);