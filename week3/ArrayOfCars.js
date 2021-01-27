'use strict'
//3
let cars = ['Ford', 'Honda', 'Toyota', 'Fiat'];
console.log(cars.length);
//4
let moreCars = ['Chevy', 'Tesla', 'Ferrari', 'Honda'];
let totalCars = cars.concat(moreCars);
console.log(totalCars);
//5
console.log(totalCars.indexOf('Honda'));
console.log(totalCars.lastIndexOf("Ford"));
//6
let stringOfCars = totalCars.join(' ');
console.log(stringOfCars)
//7
totalCars = stringOfCars.split(' ');
console.log(totalCars);
//8
let carsInReverse = totalCars.reverse();
console.log(carsInReverse);
//9
carsInReverse.sort();
console.log(carsInReverse.indexOf('Chevy'));
//10
let removedCars = carsInReverse.slice(3 , 6);
console.log(removedCars);
//11
console.log(carsInReverse)
console.log(carsInReverse.splice(1 , 2, 'Ford', 'Honda'))
carsInReverse.splice(1 , 2, 'Ford', 'Honda')
console.log(carsInReverse)
//12
carsInReverse.push('Ferrari', 'Fiat');
console.log(carsInReverse);
//13
carsInReverse.pop();
console.log(carsInReverse);
//14
carsInReverse.shift();
console.log(carsInReverse);
//15
carsInReverse.unshift('Volvo');
//16
let numbers = [23, 45, 0, 2, 8, 44, 100, 1, 3, 91, 34];

console.log(numbers)
let newArr = [];
let add2 = function(num){
  let newNum = num + 2
  console.log(newNum)
  newArr.push(newNum)
};

numbers.forEach(add2)

console.log(newArr)
