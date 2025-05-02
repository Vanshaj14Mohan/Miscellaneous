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