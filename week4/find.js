
/** *  * @param {array} array the array to loop through * @param {function} callback the callback to execute on every element in the array */
let myForEach = function(array, callback){
  for(let i = 0; i < array.length; i++){
    callback(array[i], i);  
}};
  
let fruit = ['apple', 'banana', 'clementine'];
  
myForEach(fruit, function(element){
  console.log(element)
});

//FIND

let numbers = [1,2,3,4,5];

let myFind = function(array, callback){
  let result;
  for(let i = 0; i < array.length; i++){
  let found = callback(array[i], i);
  if(found){
    result = array[i];
    break;
  }
  }
  return result;
};

let myFoundNumber = myFind(numbers, function(num){
  if(num > 3){
    return true
  }
})

console.log(myFoundNumber)