
let num = 143;
console.log(num , typeof num);
let string = num.toString();
console.log(string , typeof string);
let arr = [];
arr = string.split('');
console.log(arr);

const assignWords = () => {

}

let subtract = function(x,y){
  let z = x - y;
  console.log( "difference =" ,z);
  return z;
}

let multiply = function(x,y){
  let z = x * y;
  console.log( "product =" ,z);
  return z;
}

let divide = function(x,y){
  let z = x / y;
  console.log( "quotient =" ,z);
  return z;
}


subtract(4,3);
divide(4,3);
multiply(4,3);



let add = (input1, input2) => {
  console.log("input1 =", input1),
  console.log("input2 =", input2);
}

add(6,9);
 
let name = "John Doe";
