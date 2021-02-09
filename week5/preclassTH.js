'use strict'

class Human {
  constructor(name, height, weight, dob){
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.dob = dob;
  }

  greeting() {
    return 'Hello ' + this.name + '!';
  }
}

const chris = new Human("Chris", "6 ft 2 in", "230 lbs", "July 24th, 1988");

const john = new Human('John', '6 ft 0 in', '170 lbs', "July 17th, 1996")

console.log(chris.name);
console.log(chris.dob);
console.log(chris.weight);
console.log(chris.greeting());