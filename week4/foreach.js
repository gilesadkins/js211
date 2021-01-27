'use strict'

//for each notes
/**
 * any function that you pass in the forEach function must meet certain requirements
 * 1 the first input to the funtion passed in is the element of the array
 * 2 the sencond input to the function passed in is the index of the element 
 * 3 the third input to the funtion passed in is the array itself
 */

/**
 * Filter is used to filter "in" elements from the array
 */

let friends = ['john', 'betty', 'marge', 'mark', 'james', 'mary', 'adam', 'bob']

/**
 * write a function that takes in a string 
 * and returns true if the first letter is an "M"
 * and false if not an "M"
 */

let startsWithM = function(word) {
  if(word[0] == "m") {
    return true
  } else {
    return false
  }
  //if start with M, return true
  //else return false
}

let specialFriends = friends.filter(startsWithM);
console.log(specialFriends);

let numbers = [4,55,66,77,33,55,3245,1113,1,20,30,4,6,8];

let odd = numbers.filter(function(element, index){
  if(element %2 == 0){
    return false
  } else {
    return true
  }
})

odd.forEach(function(element, index){
  console.log(element , " is and odd number")
})
