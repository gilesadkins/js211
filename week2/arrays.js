// let fruit = ['apple', 'banana', 'cucumber', 'dragon-fruit'];

// console.log(fruit[0]);

// fruit[0]= 'berry';

// console.log(fruit[0]);

/**
 * Write a function that
 * takes in an array of fruit of size 3
 * return true if all the fruit inside the array are the same
 */

let same3 = function (array) {
  if (array[0] == array[1] && array[1] == array[2] ) {
    return true
  } else {
    return false
  }
}

let fruitArray1 = ["apple", "apple", "apple"];
let fruitArray2 = ["banana", "apple", "apple"];

console.log(same3(fruitArray1))
console.log(same3(fruitArray2))

/**
 * want a function that will put a fruit in the position passed in
 *
 * @param {*} position the postion to add the fruit to
 * @param {*} toAdd the fruit that we need to add
 * @param {*} theFruitArray the array to add the fruit to
 */
let addFruit = function(position, toAdd, theFruitArray) {
  theFruitArray[position] = toAdd;
}

let basket = [];
addFruit(0, 'apple', basket)
console.log(basket)




const assert = require('assert')

if(typeof describe == 'function') {
describe('array size 3', function () {
  it("all the same", function () {
  let actual = same3(['apple', 'apple', 'apple']);
  let expected = true;
  assert.equal(actual, expected)
  })
  
  it("2 the same", function () {
  let actual = same3(['apple', 'banana', 'apple']);
  let expected = false;
  assert.equal(actual, expected)
  })
  
  it("all different ", function () {
  let actual = same3(['kiwi', 'banana', 'apple']);
  let expected = false;
  assert.equal(actual, expected)
  })
  })
  
  describe('array bigger than 3', function () {
  it("first 3 the same", function () {
  let actual = same3(['apple', 'apple', 'apple', 'banana']);
  let expected = true;
  assert.equal(actual, expected)
  })
  
  it("first 3 different the same", function () {
  let actual = same3(['apple', 'banana', 'kiwiw', 'mellon']);
  let expected = false;
  assert.equal(actual, expected)
  })
  
  })
  
  describe('array less than 3', function () {
  it("size 2 ", function () {
  let actual = same3(['apple', 'banana']);
  let expected = false;
  assert.equal(actual, expected)
  })
  
  it("first 2 the same", function () {
  let actual = same3(['apple', 'apple']);
  let expected = false;
  assert.equal(actual, expected)
  })
  
  })
}




