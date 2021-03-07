'use strict'

let getNames = function(){
  let bot1 = document.getElementById('i1').value;
  let bot2 = document.getElementById('i2').value;
  let bot3 = document.getElementById('i3').value;

  console.log(bot1, bot2, bot3);
  
  let botsArray = [bot1, bot2, bot3]
  
  console.log(botsArray);
  

  let populateImg = function(){
    let img1 = document.getElementById('img1');
    let img2 = document.getElementById('img2');
    let img3 = document.getElementById('img3');

    let imgArr = [img1, img2, img3];

    setTimeout(function(){
      for(let i = 0; i < botsArray.length; i++){
        imgArr[i].src = `https://robohash.org/${botsArray[i]}.png`;
      }
    }, 1000);

  };
  populateImg(botsArray)
}




let robotButton = document.getElementById('robotInput');

robotButton.addEventListener('click', function(){
  getNames()

});


//Loads Robot
// <img src="https://robohash.org/YOUR-TEXT.png">