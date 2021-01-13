'use strict'

// let tall = true;
// let handsome = true;

// if(tall || handsome) {
//   console.log("Sure thing");
// } else if (tall && handsome) {
//   console.log("Yes please")
// } else {
//   console.log("Not Sure")
// }

/**
 * Create a function that takes in
 * 2 inputs
 * @param {boolean} handsome
 * @param {boolean} tall
 * @returns some exclamation based on the different criteria for handsome and tall
 * 
 */
// if they are handsome and tall return "you hit the jackpot"
// if they are not tall or handsome return " Man though luch"
// if either handsome or tall, but not both "It can be worse"

// let handsome = true;
// let tall = false;
// let check = function(handsome, tall){
// if (handsome && tall) {
//   return "Jackpot"
// } else if (handsome || tall) {
//   return "Could be worse"
// } else {
//   return "Tough Luck"
// }}

// console.log(check(true,false))














// ROCK PAPER SCISSORS PROGRAM

let opponent1 = "rock";
let opponent2 = "scissors";

let rockFunc = function(opponent2input){
  if(opponent2input == "rock") {
    console.log("Tie!") 
  } else if (opponent2input == "scissors") {
    console.log("Rock beats Scissors! Player One Wins")
  } else {
    console.log("Paper beats Rock! Player Two Wins")
  }
}
let scissorsFunc = function(opponent2input){
  if(opponent2input == "scissors") {
    console.log("Tie!") 
  } else if (opponent2input == "paper") {
    console.log("Scissors beats Paper! Player One Wins")
  } else {
    console.log("Rock beats Scissors! Player Two Wins")
  }
}

let paperFunc = function(opponent2input){
  if(opponent2input == "paper") {
    console.log("Tie!") 
  } else if (opponent2input == "rock") {
    console.log("Paper beats Rock! Player One Wins")
  } else {
    console.log("Scissors beats Paper! Player Two Wins")
  }
}


const opponent1conditional = function(opponent1input) {
  if (opponent1input == "rock") {
    return rockFunc(opponent2)
  } else if (opponent1input == "paper") {
    return paperFunc(opponent2)
  } else {
    return scissorsFunc(opponent2)
  }
}

console.log(opponent1conditional(opponent1));

/**
 * If you are single and make less than 75,000 a year you get 600
 * If you are married and together make less than 150,000 a year, you get 1200
 * for every child you have you get and additional 600, but only if you meet income rules #1 or #2
 * @param {number} income: the household income 
 * @param {boolean} married: true if married, false if single 
 * @param {number} numDependents: the number of dependents 
 * @return your stimulus check amount based on the rules above
 */



 let winter = false;

 let fruit;

 if(winter){
   fruit = "watermelon"
 } else{
   fruit = "apple"
 }

 let otherfruit = winter ? "watermelon" : "apple";

 