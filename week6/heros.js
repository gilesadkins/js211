/**
 * Class that represents a person
 * name 
 * job
 *
 */

class Person{
  name;
  job;
  constructor(name, job){
  this.name = name;
  this.job = job;
  }

  hi(){
    return `Hi my name is ${this.name}. Nice to meet you!`
  }
}

class Hero extends Person {
  superpower;
  
  constructor(name, title, superpower){
    super(name, title);
    this.superpower = superpower;
  }
}

class Villan extends Person {
  weakness;
  
  constructor(name, weakness){
    super(name, "Villan")
    this.weakness = weakness;
  }

  hi(){
    return `I am ${this.name}. This is going to be a bad day for you!`
  }
}


let giles = new Person('Giles', 'The Man');
let theBug = new Hero('The Bug', 'Hero', 'Crunchable')
let greenGoblin = new Villan('Green Goblin', 'Crazy')

console.log(giles.hi());

console.log(theBug.hi());

console.log(greenGoblin.hi());