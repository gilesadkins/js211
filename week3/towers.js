'use strict';

/**
 * 20 pts you code correctly moves peices
 * 20 pts your code correctly detects an illegal move
 * 20 pts your code detects a win
 * 20 sufficently understandable code comments
 * 20 3 new tests
 */

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// An object that represents the three stacks of Towers of Hanoi; 
  // * each key is an array of Numbers: 
    // * A is the far-left, 
    // * B is the middle, 
    // * C is the far-right stack
      // * Each number represents the largest to smallest tokens: 
        // * 4 is the largest, 
        // * 1 is the smallest

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

// Start here. What is this function doing?
const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

// Next, what do you think this function should do?
/**
 * This function will note be checking if the move is legal. All it will do is move the piece from the starting stack to the ending stack.
 * 
 * @param {*} startStack this parameter will be the stack the piece is moving from. This will be used with the pop() method, which
 * we will store the return value from in a variable called piece.
 * @param {*} endStack this parameter will take the piece variable, and use the push() method on the corresponding array.
 */
const movePiece = (startStack, endStack) => {
    let piece = stacks[startStack].pop();
    stacks[endStack].push(piece);
}

// Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2
/**
 * returns true if it is a legal move, and false if not legal.
 * end stack
 */
const isLegal = (startStack, endStack) => {
  if(stacks[startStack].length > 0){
    if(stacks[endStack].length == 0) {
      return true
    }
    if(stacks[endStack].slice(-1) > stacks[startStack].slice(-1)) {
      return true
  } else{
    return false
    }
  }
}

// What is a win in Towers of Hanoi? When should this function run?
/**
 * this function returns true if board is in winning state and false if not.
 */
const checkForWin = () => {
  if(stack[b].length == 4|| stack[c].length == 4) {
    return true
  } else {
    return false
  }
}
/**
 * this function is the brains and drives 1 turn of the game
 * @param {} startStack 
 * @param {*} endStack 
 */
// When is this function called? What should it do with its argument?
const towersOfHanoi = (startStack, endStack) => {
  // check if move is legal
  if(isLegal(startStack, endStack)){
    movePiece(startStack, endStack)
  } else {
    return console.log('Move is not legal.')
  }

  if (checkForWin()) {
    return console.log('You have won!')
  }
  // if move is not then print a not legal message.
  //if move it legal make move
  
  //after make move check if user won
  //if board is in win state print winning message
}

const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}