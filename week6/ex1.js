'use strict'

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

  actualMpg(){
    if(this.odometer > 9000){
      return this.mpg*.95;
    } else {
      return this.mpg
    }
  }
  drive(distance){
    if(distance > this.milesTillEmpty()){
      this.odometer = this.odometer + this.milesTillEmpty();
      console.log(`You are out of gas.`);
      this.fuelLevel = 0;
    } else{
      this.odometer = this.odometer + distance;
      let fuelUsed = distance / this.actualMpg();
      this.fuelLevel = this.fuelLevel - fuelUsed;
    }
  }

}

class Truck extends Car{
  isLoaded;

  load(){
  this.isLoaded = true;
  }

  unload(){
  this.isLoaded = false;
  }

  actualMpg(){
    if(this.isLoaded == true){
      return this.mpg * .85;
    } else {
      return super.actualMpg();
    }
  }
}


let gilesCar = new Car(50, 11);
for(let i=0;i<21;i++){
  gilesCar.addFuel(10);
  gilesCar.drive(500);

}

console.log(gilesCar.odometer)
console.log(gilesCar.actualMpg())
console.log(gilesCar.mpg)