// Write a JavaScript program to display the current day and time, start with:

  const currentDate = new Date()
  console.log('The current date and time is: ' + currentDate)



// Write a JavaScript program to convert a number to a string.

console.log('These next two logs are going to demonstrate the .toString() method used on number data types.')

const numToString = (num) => {
  console.log(num + " is a " + typeof num + " data type.")
  let string = num.toString();
  console.log("After passed through the function " +string + " is a " + typeof string + " data type.")
};
console.log(numToString(100))

// Write a JavaScript program to convert a string to the number.

console.log('The next few logs will be to demonstrate the parseInt() method which converts a string to a number')
const stringToNum = (string) => {
  console.log('Before parseInt() the data type is a ' + typeof string + ' for ' + string)
  let num = parseInt(string);
  console.log('After parseInt() the data type of ' + string+ ' is a ' + typeof num)
};

stringToNum("78")



// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  
  const whatType = () => {
    const dataType = true;
    // document.querySelector('.dataType').value;
    let answer = typeof dataType;
    console.log('Using the typeof method we find that the data type entered into this function is ' + answer)
  };
  whatType()

  
// Write a JavaScript program that adds 2 numbers together.

const add2Num = () => {
  const a = 5;
  const b = 6;
  let sum = a + b;
  console.log( 'This program displays addition. a = 5, b = 6, a + b = ' + sum)
};

add2Num()


// Write a JavaScript program that runs only when 2 things are true.

console.log("These next few programs are if statments that run a progam if two things are true, if one of two are true, and when both are not true.")

const ifStatment = () => {
  const a = 5;
  const b = 6;
  let text = "";
  if (a == 5 && b == 6) {
    text = "This program will run!"
  } else {
    text = "This program sucks"
  };
  console.log(text)
};

ifStatment()
// Write a JavaScript program that runs when 1 of 2 things are true.

const ifStatmentWithOr = () => {
  const a = 5;
  const b = 7;
  let text = "";
  if (a == 5 || b == 6) {
    text = "This program will run!"
  } else {
    text = "This program sucks"
  };
  console.log(text)
};

ifStatmentWithOr()
// Write a JavaScript program that runs when both things are not true. 

const ifStatmentNot = () => {
  const a = 5;
  const b = 6;
  let text = "";
  if (a !== 5 && b !== 6) {
    text = "This program will run!"
  } else {
    text = "This program sucks"
  };
  console.log(text)
  // document.querySelector().innerHTML = text;
};
ifStatmentNot()

//create inputs, buttons and event listeners that render the code blocks you built above to the DOM.


// write a program or a function that takes in a number ex 143
// and convert into a string "one hundred and forty three"
// roman numerals

//leet code js practice