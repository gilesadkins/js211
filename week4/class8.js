// let cars = [{
//   'make': "Mazda", 
//   'cylinders': '4', 
//   'model':'Protege', 
//   'colors': ['blue','red', 'cyan', 'green']
// },
// {
//   'make': "Ford", 
//   'cylinders': '4', 
//   'model':'Focus', 
//   'colors': ['blue','red', 'green']
// },
// {
//   'make': "BMW", 
//   'cylinders': '4', 
//   'model':'328', 
//   'colors': ['black','silver']
// },
// {
//   'make': "Maserati", 
//   'cylinders': '8', 
//   'model':'GT', 
//   'colors': ['light green','orange']
// },
// {
//   'make':'VW',
//   'cylinders': '2', 
//   'model':'Bug', 
//   'colors': ['yellow','rust']
// }]

// let myOptions = cars.filter(function(car, index){
//   if(car.cylinders == 4){
//     return true
//   }
// }).filter(function(car, index){
//   if(car.colors.indexOf('red') > -1){
//     return true;
//   }
// }).map(function(car){
//   //The BMW 329 is a nice 4 cylinder car that is available in silver and black.
//   return `The ${car.make} ${car.model} is a nice ${car.cylinders} car that is available in ${car.colors.join(", ")}.`
// }).forEach(function(description){
//   // console.log(description);
// })

// let someCar =bcars.find(function(car){
// if(car.cylinders == 4){
//   return true;
// }
// });

// console.log(someCar);

// let numbers = [22,33,445,6,67542,213,56,89,5,6,8,443]
// /**
//  * reduce notes
//  * reduce(function(previous, current, index){}, 0(which is the initial value))
//  */

// let sum = numbers.reduce(function(previous, current, index){
//   previous + current;
// }, 0)

// console.log(sum);

// let max = numbers.reduce(function(previous, current, index){
//   if(previous<current){
//     return current;
//   } else {
//     return previous;
//   }
// })

/**
 * 
 * @param {*} callback is the function that defines how the number should be updated, takes in the og number
 * @param {*} number the number to print, and is passed to the callback and get updated
 */

let printAndUpdate = function(callback, number){
  console.log('the number before the update');
  number = callback(number);
  console.log('the number after the update');

}

