/**
 * We want to simulate a sqaure
 * 
 */

class Rectangle {
  height;
  width;
  constructor(inputHeight, inputWidth){
    this.width = inputWidth;
    this.height = inputHeight;
  }

  parimeter(){
    return (this.height + this.width) * 2;
  }
  area(){
    return this.height * this.width;
  }
  isSquare(){
    if(this.height == this.width){
      return true
    } else {
      return false
    }
  }
}



let r1 = new Rectangle(4,5)

let r2 = new Rectangle(8,8)

let log = function(r){
  console.log("These are the answers")
  console.log("parimeter:", r.parimeter())
  console.log('area:', r.area())
  console.log('is it a sqaure:', r.isSquare())
}

log(r1)

log(r2)



//ASSIGNMENTS

//ADD in the checks for the cars class in tuesday 1. remove bugs. Add fuel cant add more fuel than capacity of tank. Also you cannot drive passed fuel capacity

let Person = function(){
  let answer = 2 + 2;
  console.log(answer);
};
var person = new Person()

