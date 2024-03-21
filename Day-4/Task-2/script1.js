let student = {
    Name : "praveen",
    Age : 21,
    Grade : "A",

    displayInfo : function(){
       console.log(this.Name);
       console.log(this.Age);
       console.log(this.Grade);
    }
}

student.displayInfo();

let studentData = Object.keys(student);
console.log(studentData);

let arr = [];
for(let i=0;i<studentData.length-1;i++){
    var userInput = prompt(`Enter the Student ${studentData[i]}`);
    arr.push(userInput);
}
console.log(arr);

for(let i=0;i<studentData.length-1;i++){
    const key = studentData[i];
    student[key] = arr[i];
}
console.log(student);
student.displayInfo();