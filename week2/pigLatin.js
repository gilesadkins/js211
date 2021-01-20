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

let smallestNonNegative = function(num1, num2) {
  if (num1 < 0 && num2 < 0) {
    return num1
  } else if (num1 < 0 || num2 < 0) {
    if (num1 >= 0) {
      return num1
    } else {
      return num2
    }
  } else {
    if(num1 < num2) {
      return num1
    } else {
      return num2}
  }
}

const pigLatin = (input) => {
  let word = input.replace(/\s+/g, '').toLowerCase();
  let indexa = word.indexOf('a');
  let indexe = word.indexOf('e');
  let indexi = word.indexOf('i');
  let indexo = word.indexOf('o');
  let indexu = word.indexOf('u');
  
  let arrOfIndex = [indexa, indexe, indexi, indexo, indexu]; 
  
  let vowelIndex = -1;
    
  for (let i = 0; i < arrOfIndex.length; i++) { 
    vowelIndex = smallestNonNegative(vowelIndex, arrOfIndex[i])
  }

  let part1 = word.substring(0, vowelIndex);
  let part2 = word.substring(vowelIndex);

  if(vowelIndex == 0) {
    return word + "yay"
  } else if(vowelIndex > 0){
    return part2 + part1 + "ay";
  } else {
    return word + "ay"
  }
}


// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}