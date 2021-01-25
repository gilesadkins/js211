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



 let boardTest1 = [
  ['X', 'X', 'X'],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let boardTest2 = [
  ['X', 'O', 'X'],
  ['O', 'X', 'O'],
  ['O', 'O', 'O']
];

let boardTest3 = [
  [' ', ' ', ' '],
  ['X', 'X', 'X'],
  [' ', ' ', ' ']
];


const verticalWin = (board) => {
  if (board[0] == ['X', 'X', 'X']) {
    return 'Player X Wins'
  } else if (board[0] == ['O', "O", "O"]) {
    return "Player O Wins"
  } else if (board[1] == ['X', 'X', 'X']) {
    return 'Player X Wins'
  } else if (board[1] == ['O', "O", "O"]) {
    return "Player O Wins"
  } else if (board[2] == ['X', 'X', 'X']) {
    return 'Player X Wins'
  } else if (board[2] == ['O', "O", "O"]) {
    return "Player O Wins"
  }
}

console.log(verticalWin(boardTest2))