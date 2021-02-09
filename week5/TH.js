'use strict'

class Student {
  constructor(name, DOB){
    this.name = name;
    this.DOB = DOB;
    this.assignments = [];
    let randomNumber = Math.floor((Math.random()*100))
    this.id = randomNumber;
  }
  getAvg(){
    if(this.assignments.length == 0) {
      return null;
    }
    
    let sum = 0;
    this.assignments.forEach(function(grade){
      sum = sum + grade.grade;
    })
    let avg = sum / this.assignments.length;
    
    return avg;
  }
  getMin(){
    if(this.assignments.length == 0) {
      return null;
    }
    
    let min = this.assignments[0].grade;

    this.assignments.forEach(function(grade){
      if (grade.grade < min) {
        min = grade.grade
      }
    })
    return min;
  }
  isPassing(){
    if(this.getAvg() > 70){
      return true
    } else {
      return false
    }
  }
  addAssn(assn){
    this.assignments.push(assn);
  }
}

let John = new Student ('John', 'JULY 17, 1996')

let Bailey = new Student ('Bailey', 'DECEMBER 21, 1990')


class Assignment{
  constructor(grade, name){
  this.grade = grade
  this.aname = name
  }
}

let towers = new Assignment(90, 'Towers')

let blogpost = new Assignment(20, 'Blog Post')

John.addAssn(towers)
John.addAssn(blogpost)

console.log(John.assignments)
console.log(John.getAvg())
console.log(John.getMin())

console.log(Bailey.getAvg())
console.log(Bailey.getMin())