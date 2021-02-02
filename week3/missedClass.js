'use strict'

/**
 * This function takes in an array of numbers and returns the largest number in the array.
 * If the array is empty return null.
 * 
 */

//  let largest = function(numbers) {
//   let biggest = 0;
//   if(!numbers || numbers.length == 0){
//     return null
//   } else {
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > biggest) {
//       biggest = numbers[i]
//     }
//   }
//   return biggest
//  }
// }


//  let test1 = []; //null
//  let test2 = undefined; //null
//  let test3 = [122,333,4456,11221,456,223334,1112,4567,24,1,223,23342,3340] //2233456
//  console.log(largest(test3))

/**
 * objects could be strings
 * they can be added to arrays 
 * they have keys and values
 * they can have any data type including other objects
 */

let myFriendName = 'John';

let myFriendAge = '1234 Main St, Austin, Texas, 78704';


let friends = [{
  name: 'Jenny ',
  age: 39,
  address: '144 Congress Ave, Austin, Texas, 78704',
  isMale: false,
  bestFriend: true
},
{
  name: 'John',
  age: 12,
  address: '1233 Main St, Austin, Texas, 78704',
  isMale: true,
  bestFriend: false
}
];


let fruit = [{name: 'apple', color: ["red", "green", "yellow"],properties: ["juicy",'tart', 'sandy','crunchy']},{name: "banana", color: ["yellow","green", "black"], properties: ["squishy"]},{name: "orange", color: ["orange"], properties: ["sour"]},{name: "grape", color: ["green", "red", "black", "indigo"],properties:['seedless','juicy', 'boozy']}]

for(let i = 0; i < friends.length; i++){
let text = `hi ${friends[i].name}, please text me when you get this.`;
console.log(text)
}

for(let i = 0; i < fruit.length; i++){
let sentence = `An ${fruit[i].name} is an awesome fruit that can be found in ${fruit[i].color.length}`;
if(fruit[i].color.length > 1) {
  sentence += ' colors. '
} else {
  sentence += ' color. '
}

let propertiesString;
if(fruit[i].properties.length>1){
  let lastProperty = fruit[i].properties.pop();
  propertiesString = fruit[i].properties.join(", ");
  propertiesString = propertiesString+" and "+lastProperty;
} else{
  propertiesString = 'just '+fruit[i].properties[0];
}

sentence += `They also feel ${propertiesString}.`

console.log(sentence)
}