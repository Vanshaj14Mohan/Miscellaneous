// Object Prototypes
let arr = [1,2,3,4];
arr.sayHello = () =>{
    console.log("Arr here");
};

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