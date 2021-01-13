// // console.log('hello')

// // const name = "Giles";
// // let num = 24;
// // let sick = false;
// // let address = {
// //   street: "1414 South Lamar",
// //   city: "Austin",
// //   state: "Texas",
// //   zip: "78704"
// // };

// // let topFruits = ['Banana','Apple',"Strawberry"];

// // let x = 12;
// // let y = 45;

// // let z = x + y;
// // console.log(z);


// // let w = "45";
// // let sum2 = x + w;
// // console.log(sum2)

// // let f1 = "Banana";
// // let f2 = "Orange";
// // let salad = f1 + f2;
// // console.log(salad);

// // let sentence = "My Name is "+name+". I am "+num+ " years of age."+" My favorite fruits are "+ topFruits+". And I live at "+address+".";
// // console.log(sentence)

// // let intro = `Hi my name is ${name}. I am ${num} years old. Am I sick? It is ${sick} that I am sick. I am from ${address.city}, ${address.state}.`;

// // console.log(intro)

// //write a function that will generate a happy birthday message
// // this function should take in 3 variables
// let name = "Giles";
// let age = 24;
// /**
//  * @param name name of the person
//  * @param age age of the person
//  * @returns a birthday message
//  */
// let happyBirthday = function(name, age){
//   let birthdayMessage = `Happy birthday ${name}. I can't believe you are ${age} years old today!`;
//   return birthdayMessage;
// }
//  console.log (happyBirthday(name, age))

//  //Assinment for today due next tuesday! Write a program, that 
//  let number1 = function(){
//    let not = new Date();
//    console.log('The time is now'+ now);
//  }


// // sumOfTwoNums - write a function that returns the sum of two numbers if both arguments are numbers.
// // bothTrue - write a function that returns 'both are true' if both arguments are true.
// // checkStrings - write a function that takes 3 parameters and if all 3 parameters are strings, return true
// // evaluateMonth - write a switch statement that evaluates a variable month, and for each of the 12 months, returns the number of days in that month.
// // starter code
//  const evaluateMonth = (month) => {
//   switch (month) {
//     case 'day':
//     case 'Jan': {
//       return 31
//     }

//     default: return '45'
//   }
// }


const myArr = [2, 33, 4, 54, 13, 8, 79]

const myFunFunction = (arr) => {
  let sum = 0

  for (let i = 0; i <= arr.length - 1; i++) {
    console.log("The value of 'i' is: " + i + " and the value at that index is: " + arr[i])
    sum += arr[i]
  }
  return console.log("The final sum is: " + sum)
}  

myFunFunction(myArr)