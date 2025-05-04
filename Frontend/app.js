// Object Prototypes
let arr = [1,2,3,4];
arr.sayHello = () =>{
    console.log("Arr here");
};

//using Factory Functions
function PersonMaker (name, age){
    const person = {
        name: name,
        age: age,
        talk(){
            console.log(`Hi my name is ${this.name}`);
        },
    };
    return person;
}

let p1 = PersonMaker("Adam", 25); //copy 
let p2 = PersonMaker("Rose", 24); //copy

//Using Constructors -> does'nt return anything and start with capital by convention.
function Person(name, age){
    this.name = name;
    this.age= age;
}

//adding a Talking function
Person.prototype.talk = function(){
    console.log(`Hi, my name is ${this.name}`);
}

let x1 = new Person("John", 23);
let x2 = new Person("David", 25);
//A tricky syntax to follow 

//Now Using Classes here
class Human{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi, my name is ${this.name}`);
    }
}

let a1 = new Human("Thomas", 25);
let a2 = new Human("Arthur", 27);

//Using Inheritance here
//For Student
class Student{
    constructor(name, age, marks){
        this.name = name;
        this.age= age;
        this.marks = marks;
    }
    talk(){
        console.log(`Hi, I'm ${this.name}`);
    }
}

let stu1 = new Student("Adam", 17, 90);
let stu2 = new Student("John", 18, 91);
let stu3 = new Student("Bruce", 18, 90);

//And now we will make one for Teacher too.
class Teacher{
    constructor(name, age, subject){
        this.name = name;
        this.age = age;
        this.subject = subject;
    }
    talk(){
        console.log(`Hi, I'm ${this.name}`);
    }
}
//Now assigning the common values in a different class
class College{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi, I'm ${this.name}`);
    }
}


