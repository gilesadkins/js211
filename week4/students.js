let students = [];

students.push({
  'name': 'Jimbo',
  'passing' : false
});

students.push({
  'name': 'Jay',
  'passing' : true
})

students.push({
  'name': 'Bob',
  'passing' : true
})

students.push({
  'name': 'McLain',
  'passing' : false
})

students.push({
  'name': 'Tool Man',
  'passing' : true
})

/**
 * use the filter method on the students array
 * to filter down to just the failing students
 * 
 */

// let failing = students.filter(function(element, index){
//   return (!element.passing)
// })

// failing.forEach(function(element){
//   console.log(element.name);
// })

/**
 * map() is used to convert every element from what ever it is to somthing else
 */

/**
 * write a function that takes in a student object and returns one of the following
 * Hi X you are currently passing
 * Hi X you are failing, get it together!
 */

// let studentMessage = function(student){
//   if(student.passing) {
//     return `Hi ${student.name}, you are passing.`
//   } else {
//     return `Hi ${student.name}, you are failing. Get it together.`
//   }
// }



let failingStudents = students.filter(function(student){
  if(student.passing == false) {
    return true
  } else{
    return false
  }
})

let messages = failingStudents.map(function(student){
  return `Hi ${student.name}, get it together.`
})

messages.forEach(function(msg){
  console.log(msg);
});