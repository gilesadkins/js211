'use strict'


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

const pigLatin = (word) => {
  
  let indexa = word.indexOf('a');
  let indexe = word.indexOf('e');
  let indexi = word.indexOf('i');
  let indexo = word.indexOf('o');
  let indexu = word.indexOf('u');
  
  let arrOfIndex = [indexa, indexe, indexi, indexo, indexu]; 
  
  let vowelIndex = -1;
    
  for (let i = 0; i < arrOfIndex.length; i++) { 
    vowelIndex = smallestNonNegative(vowelIndex, arrOfIndex[i])
  }

  let part1 = word.substring(0, vowelIndex);
  let part2 = word.substring(vowelIndex);

  if(vowelIndex == 0) {
    return word + "yay"
  } else if(vowelIndex > 0){
    return part2 + part1 + "ay";
  } else {
    return word + "ay"
  }
}


let translate = function () {
   let inputBox = document.getElementById('input'); 
   let input = inputBox.value;
   let pigWord = (pigLatin(input))
   let output = document.createElement('p');
   let text = document.createTextNode(pigWord);
   document.body.appendChild(output);
   output.appendChild(text);
}


let button = document.getElementById("inputButton");
button.addEventListener('click', translate)


