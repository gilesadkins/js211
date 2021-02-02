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
// This function console logs the arrays inside of the stacks object. Showing the player the board.
const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

// Next, what do you think this function should do?
// This function will note be checking if the move is legal. All it will do is move the piece from the starting stack to the ending stack.
/**
 * The pop() and push() array methods pull of the end of an array which will always be the smallest piece once we have our isLegal() function working.
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
 * This function returns true if it is a legal move, and false if not legal.
 * The first thing to check is if the startStack(the stack where the piece is moving from) has a piece to move. 
 * Because you cannot move a piece that doesn't exist.
 * Then we can test if the place we are moving to has no pieces. We do these two tests first because slice will be undefined if the arrays have no elements.
 * IF(if statment) that is true, move on to next test. IF not true, return true.
 * The next test is to check IF the peice being moved is smaller than the piece it is being stacked upon.
 * Originally I tried to find a solution with .length - 1 but found it was easier to use slice(-1) to pull the end value of the array and compare them.
 * If true return TRUE. Else return false.
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
};
// What is a win in Towers of Hanoi? When should this function run?
// A win is when all of the pieces are LEGALLY stacked in a stack other than the starting stack.
/**
 * This function returns true if board is in winning state and false if not.
 * All that needs to be done here is check if stack B or C is full of pieces.
 * We dont have to worry about how they got there since we have a seperate isLegal function.
 * An if statement that checks if B OR C is full (array length of 4) will work.
 * If A OR B have a length of 4. Return true. Else return false.
 */
const checkForWin = () => {
  if(stacks['b'].length == 4|| stacks['c'].length == 4) {
    return true
  } else {
    return false
  }
};
/**
 * This function is meant to put all of the working peices of the game together in the correct order to execute one turn of the game.
 * @param {} startStack 
 * @param {*} endStack 
 * First it should check IF(if statment) the move is legal.
 * If ifLegal() is false, print not legal message.
 * If ifLegal() is true, execute movePiece().
 * After completing the if statment. The check for win function will then check IF(if statment) the board object is in a winning state.
 * If checkForWin() is true. Print winning message. If false do nothing.
 */

const towersOfHanoi = (startStack, endStack) => {
  if(isLegal(startStack, endStack)){
    movePiece(startStack, endStack)
  } else {
    return console.log('Move is not legal.')
  }
  if (checkForWin()) {
    return console.log('You have won!')
  } 
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

  describe('#checkTurns', () => {
    it('should detect if user has gone over 10 turns', () => {
      let actual = checkTurns(10)
      let expected = "You are so close!"
      assert.equal(actual, expected);
    });
  });


  describe('#translateOnomatopoeia', () => {
    it('shoud take in ayy, bee, and cee', () => {
      let actual = towersOfHanoi('ayy', 'bee')
      let expected = towersOfHanoi('a', 'b')
      assert.equal(actual, expected);
    });
  });

  describe('#translateNumbers', () => {
    it('inputs a, b and c should be equal to 1, 2 and 3', () => {
      let actual = towersOfHanoi('1', '2')
      let expected = towersOfHanoi('a', 'b')
      assert.equal(actual, expected);
    });
  });

  describe('#uppercaseLetters', () => {
    it('uppercase inputs should work', () => {
      let actual = towersOfHanoi('A', 'B')
      let expected = towersOfHanoi('a', 'b')
      assert.equal(actual, expected);
    });
  });


} else {

  getPrompt();

}