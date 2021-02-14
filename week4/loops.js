// Complete each of the following exercises:

const { before } = require("mocha");

// Use a do...while loop to console.log the numbers from 1 to 1000.
let i = 0;
do { i = i + 1;
  console.log(i)
} while (i < 1000)

// Create an object (with keys and values) called person with the following data:

const person = {
  firstName: 'Jane',
  lastName: 'Doe',
  birthDate: 'Jan 5, 1925',
  gender: 'female'
}
// Create a function that logs out the keys of the object using Object.keys().

let keysLog = function(obj){
  console.log(Object.keys(obj))
}

keysLog(person)

// Create a function that logs out the keys and values of the object using Object.entries().

let entriesLog = function(obj){
  console.log(Object.entries(obj))
}
entriesLog(person)

// Create an arrayOfPersons that contains multiple "people" objects. You can simply copy/paste the person object you made above multiple times. 
//Feel free to change the values to reflect multiple people you might have in your database.

let arrayOfPersons = [
  {
    firstName: 'Rick',
    lastName: 'Man',
    birthDate: 'Feb 5, 1930',
    gender: 'male'
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    birthDate: 'Jan 5, 1925',
    gender: 'female'
  },
  {
    firstName: 'John',
    lastName: 'Joe',
    birthDate: 'Jan 10, 1996',
    gender: 'male'
  },
  {
    firstName: 'Sarah',
    lastName: 'Lee',
    birthDate: 'Dec 5, 1977',
    gender: 'female'
  }
]

// Create a function that uses a for...of loop and an if statement to console.log the value associated with the key birthDate of each object if the birth year is an odd number.

for (const i of arrayOfPersons) {
  let birthDate = i.birthDate;
  
  if(birthDate.slice(-1) % 2 == 1){
    console.log(birthDate)
  }
}

// Use .map() to map over the arrayOfPersons and console.log() their information.
console.log(
  arrayOfPersons.map(function(element){
    return `My name is ${element.firstName} ${element.lastName}, a ${element.gender} born on ${element.birthDate}`
  })
)

// Use .filter() to filter the persons array and console.log only males in the array.


  arrayOfPersons.filter(function(element){
    if(element.gender == 'male'){
    console.log(element);
    }
  })


// Create a function that returns true if the value of birthDate is before Jan 1, 1990.

  let beforeYear = arrayOfPersons.forEach(function(index){
    birthYear = index.birthDate.slice(-4)
    console.log(birthYear);
    if(birthYear < 1990){
      return true
    }
  })
console.log(beforeYear)

// Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.

let beforeYearFilter = arrayOfPersons.filter(function(index){
  birthYear = index.birthDate.slice(-4)
  if(birthYear <= 1990){
    console.log(index)
  }
})

beforeYearFilter

// BONUS - Create a function that returns true if the date passed to it is >= 21 years in the past.
// BONUS - .filter() out the people in the array who are younger than 21