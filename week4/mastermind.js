'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 *  4 Letter code is created "a,b,c,d" with generate solution.
 *  Player guesses what the code is.
 *  A hint will be generated based off of the guess and the solution.
 *  The first hint will tell the player how many letters are exactly correct.
 *  Exactly correct means correct letter and position.
 *  The second hint will only tell the player how many letters are correct not if positions are right.
 */

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

const printBoard = () =>  {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

const generateSolution = () =>  {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

const generateHint = (guess) =>  {
// [ a , b , c , d] guess
// if guess[0] is equal to guess[0] add 1 to hint1
// for loop that checks guess[i] and solution[i]
let guessArr = guess.split("");
let solutionArr = solution.split("");

let hint1 = 0;
let hint2 = 0;

for(let i = 0; i < 4; i++){
  if(guessArr[i] == solutionArr[i]){
    hint1 = hint1 + 1;
    guessArr[i] = 1;
    solutionArr[i] = 0;
  }
}

for(let i = 0; i < 4; i++){
  for(let i2 = 0; i2 < 4; i2++){
    if(guessArr[i] == solutionArr[i2]){
      hint2 = hint2 + 1;
      guessArr[i] = 1;
      solutionArr[i2] = 0;
    }
    }
  }


return hint1 + "-" + hint2;
}

const mastermind = (guess) => {
  if(guess == solution) {
    board = [];
    console.log(`You guessed it!`)
    return `You guessed it!`
  } else {
    console.log(generateHint(guess));
    board.push(guess);
  }
  
  if(board.length > 9){
    console.log(`GAME OVER`)
    board = [];
    solution = "";
    generateSolution();
  }
}


const getPrompt = () =>  {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
