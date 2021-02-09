'use strict'
let assert = require("assert");
const { cpuUsage } = require("process");

class Car {
  mpg;
  tankCapacity;
  fuelLevel = 0;
  odometer = 0;
  id;
  constructor(inputMpg, inputTankCapacity){
    let randomNumber = Math.floor((Math.random()*10000));
    this.id = randomNumber;
    this.mpg = inputMpg;
    this.tankCapacity = inputTankCapacity;
  }

  addFuel(gallons){
    let emptySpace = this.tankCapacity - this.fuelLevel;
    
    if(gallons > emptySpace) {
      this.fuelLevel = this.tankCapacity;
      console.log(`You spilt the gas man.`);
    } else {
      this.fuelLevel = this.fuelLevel + gallons;
    }
  }

  milesTillEmpty(){
    return this.fuelLevel * this.mpg;
  };

  drive(distance){
    if(distance > this.milesTillEmpty()){
      this.odometer = this.odometer + this.milesTillEmpty();
      console.log(`You are out of gas.`);
      this.fuelLevel = 0;
    } else{
      this.odometer = this.odometer + distance;
      let fuelUsed = distance / this.mpg;
      this.fuelLevel = this.fuelLevel - fuelUsed;
    }
  }
}

let pinto = new Car(26, 10);

pinto.addFuel(2);
console.log(pinto)
pinto.drive(10)
console.log(pinto)
//ASSIGNMENTS

//ADD in the checks for the cars class in tuesday 1. remove bugs. Add fuel cant add more fuel than capacity of tank. Also you cannot drive passed fuel capacity
  if(typeof describe === "function") {
    describe("test set 1", function(){
      it('not over fill', function(){
        let c1 = new Car(10,2);
        c1.addFuel(100);
  
        let expected = 2;
        assert.equal(c1.fuelLevel, expected);
      })
  
      describe("not drive past empty", function(){
        it('not over fill', function(){
          let c2 = new Car(10,2);
          c2.addFuel(2);
          c2.drive(1000);
      
          assert.equal(c2.odometer, 20);
          assert.equal(c2.fuelLevel, 0);
        })
    })
  })
}
