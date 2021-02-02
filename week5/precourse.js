'use strict'

//Class 1
// const sayHello = (name) => `Hello, my name is ${name}.`


// class Human {
//   constructor(name, height){
//     this.myName = name; 
//     this.myHeight = height;
//   }

//   greeting() {
//   return sayHello(this.myName)
// }};

// const humanOne = new Human("Giles", `6'3"`)

// const humanTwo = new Human("Sarah", `5'11"`)

// console.log(humanOne.greeting()

// This code above takes in the parameters
//, and creates an object (based on the template) with a variable declaration. 

// const myBicycle = {
//   frame: "green mountain",
//   wheels: "all-terrain",
//   seat: "soft leather",
//   brakes: "dual-discs",
//   handlebars: "straight",
//   reflectors: 0
// }

// const kateBicycle = {
//   frame: "blue road",
//   wheels: "road touring",
//   seat: "small synthetic",
//   brakes: "dual-discs",
//   handlebars: "horned",
//   reflectors: 4
// }

//INSTEAD OF CREATING A NEW OBJECT FOR EACH BICYCLE WHICH COULD BE TONS.
//WE CAN USE A CONSTRUCTOR WHICH WILL TAKE IN VALUES AND CREAT THE OBJECT FOR US.

class Bicycle {
  constructor(frame, wheels, seat, brakes, handlebars, reflectors){
    this.frame = frame;
    this.wheels = wheels;
    this.seat = seat;
    this.brakes = brakes;
    this.handleBars = handlebars;
    this.reflectors = reflectors;
  }
};

const myBicycle = new Bicycle ("Green-Mountain", 'All-Terrain', 'Soft-Leather', ' Dual-Discs', 'Strait', 0);

const kateBicycle = new Bicycle("blue road", "road touring", "small synthetic", "dual-discs", "horned", 4);

console.log(myBicycle);

console.log(kateBicycle);


class Human {
  constructor(name, height, weight, dob){
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.dob = dob;
  }
  greeting() {
    return "Hello " + this.name + "!";
  }
}

class AcaStudent extends Human {
  constructor(codingLanguage, name, height, weight, dob){
    super(name, height, weight, dob);
    this.codingLanguage = codingLanguage;
  }
  greeting() {
    console.log("Hello, my name is " + this.name + "! I am learning how to code!");
  }
}

const dan = new AcaStudent("JavaScript", "Dan", "5 ft 6 in", "160 lbs", "February 25th, 1986");
dan.greeting();
dan.codingLanguage;