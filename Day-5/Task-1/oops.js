
// var person={
//     name:"Yash",
//     age:24,
//     city:"Pune"
        // getName:function(){
        //     return this.name;
        // }

// }


// class Person{

//     constructor(name,age,city){
//         this.name=name;
//         this.age=age;
//         this.city=city;
      
//     }

//     getName(){
//         return this.name;
//     }

// }

// var p1= new Person("Yash",24,"Pune");
// console.log(p1.name);
// console.log(p1.getName());
// p1.name="sham";
// console.log(p1.name);


// Inheritance

// class Student extends Person{

//     constructor(name,age,city,grade){
//         super(name,age,city);
//         this.grade=grade;
//     }

//     getGrades(){
//         return `${this.name} got ${this.grade}`;
//     }

//     getName(){
//         return `The obj name in ${this.name}`;
//     }

// }

// var s1=new Student("Ram",24,"Pune","A");
// console.log(s1.getGrades());
// console.log(s1.getName());



// Polymorphism
// Method overriding


// class Car{

//     constructor(name,color){
//         this._cname=name;
//         this._color=color;
//     }

//     getName(){
//         return this._cname;
//     }

//     setName(cname){
//         this._cname=cname;  
//     }
    
// }

// var c1=new Car("i10","white");
// c1.setName("i20");
// console.log(c1.getName());

// c1.cname="i30";
// console.log(c1.cname);
// console.log(c1);

// Closure

function f1(){
    
    let a=10;
    function f2(){
     
        console.log(a); //10
    }

    f2();
}

f1();





