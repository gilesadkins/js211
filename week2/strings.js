//Tuesday Jan 12th
//concat: put one string on the end of the other
//string 1 + string 2 = put them together
// method, property?
//method is a function that is "built in"
//property: length

// let fruit = 'apple';
// console.log(fruit.length)

// let v = fruit.indexOf('p');

// console.log(v);

// console.log(fruit.indexOf('p', 2))

// let a = 12;
// let e = -1;
// let u = 3;
// let i = 5;
// let o = -2;

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

// console.log(smallestNonNegative(a, e))
// console.log(smallestNonNegative(e, o))
// console.log(smallestNonNegative(a, i))

let word1 = "bobcat";
let word2 = "meow";
let word3 = "elephant";
let word4 = 'TskTsk';

let indexOfFirstVowel = function(word){
  let indexa = word.indexOf('a');
  let indexe = word.indexOf('e');
  let indexi = word.indexOf('i');
  let indexo = word.indexOf('o');
  let indexu = word.indexOf('u');
  let arrOfIndex = [indexa, indexe, indexi, indexo, indexu];
  let vowelIndex = -1;
  
  for (i = 0; i < arrOfIndex.length; i++) { 
    vowelIndex = smallestNonNegative(vowelIndex, arrOfIndex[i])
  }
  return vowelIndex;
}

console.log(indexOfFirstVowel(word1))
console.log(indexOfFirstVowel(word2))
console.log(indexOfFirstVowel(word3))
console.log(indexOfFirstVowel(word4))




let wordsplit = "browny";
let part1 = wordsplit.substring(0,2)
let part2 = wordsplit.substring(2)
let newWord = part2 + part1 + "ay";
console.log(newWord)
// use substring to split the string
// write a function that will take in a single word
// and return the piglatin translation
//rules:
// if the word starts with a vowel add -yay to the end
// if the word has a vowel, then split the word in to 2 parts at the vowel,
// the swap the parts and add -ay to the end 
// concat part 2 + part 1 + "ay"
// if the word has no vowel add -ay to end




//Challenge Program

// let num = 143;
// console.log(num , typeof num);
// let string = num.toString();
// console.log(string , typeof string);
// let arr = [];
// arr = string.split('');
// console.log(arr);

// const assignWords = () => {
//   for (i = 0; i < arr.length; i++) {

//   }

// }