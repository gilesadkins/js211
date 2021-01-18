
// uses strict mode so strings are not coerced, variables are not hoisted, etc... 
'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// the function that will be called by the unit test below
const rockPaperScissors = (answer1, answer2) => {
  let hand1 = answer1.replace(/\s+/g, '').toLowerCase();
  let hand2 = answer2.replace(/\s+/g, '').toLowerCase();
  let rockFunc = function(hand2){
    if(hand2 == "rock") {
      return "It's a tie!" 
    } else if (hand2 == "scissors") {
      return "Hand one wins!"
    } else {
      return "Hand two wins!"
    }
  }
  let scissorsFunc = function(hand2){
    if(hand2 == "scissors") {
      return "It's a tie!" 
    } else if (hand2 == "paper") {
      return "Hand one wins!"
    } else {
      return "Hand two wins!"
    }
  }

  let paperFunc = function(hand2){
    if(hand2 == "paper") {
      return "It's a tie!" 
    } else if (hand2 == "rock") {
      return "Hand one wins!"
    } else {
      return "Hand two wins!"
    }
  }

    if (hand1 == "rock") {
      return rockFunc(hand2)
    } else if (hand1 == "paper") {
      return paperFunc(hand2)
    } else {
      return scissorsFunc(hand2)
    }
  }



// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log(rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  // most are notes for human eyes to read, but essentially passes in inputs then compares if the function you built return the expected output.
  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });

  //additional test for rps

  describe('RPS unit test assignment')

  it('should handle bad inputs', function(){
    let actual = rockPaperScissors("Boot","Roach");
    let expected = "Boot";
    assert.equal(actual, expected)
  })

  it('should handle bad inputs', function(){
    let actual = rockPaperScissors('private parts','other private parts');
    let expected = "Watch your mouth";
    assert.equal(actual, expected)
  })

  it('should handle Spanish', function(){
    let actual = rockPaperScissors('Piedra','Papel');
    let expected = "El papel vence al rock. ¡El papel gana!";
    assert.equal(actual, expected)
  })

} else {

  // always returns ask the user for another input
  getPrompt();

}
