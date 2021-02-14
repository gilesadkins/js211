'use strict'

function binarySearch (array, lookingFor){
  let L = 0;
  let R = array.length - 1;
  while(L <= R){
    let m = Math.floor((L + R)/2);
    if(array[m] < lookingFor){
      L = m + 1;
    } else if (array[m] > lookingFor){
      R = m - 1;
    } else {
      return array[m]}
  }
  return -1;
}

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

console.log(binarySearch(arr, 15));