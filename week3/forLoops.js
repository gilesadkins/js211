/**
 * TYPES OF LOOPS:
 * FOR
 * FOR OF
 * FOR IN
 * WHILE
 * DO-WHILE
 */

 /**
  * FOR LOOPS
  * 1 Statement that is run before the loop starts.
  * 2 Should I go again? True False statment. If true run 1 more time.
  * 3 the code that should be exectuted every iteration.
  * 4 what to do to prepare for next round.
  */

// for (let i = 2; i <= 100; i = i + 2) {
//   console.log(i)
// }

// for (let i = 100; i >= 2; i = i - 2) {
//   console.log(i);
// }

for (let i = 1; i <= 45; i++) {
  if(i%15 == 0) {
    console.log('fizzbuzz') 
  } else if(i%3 == 0) {
    console.log('fizz')
  } else if(i%5 == 0){
    console.log("buzz")
  } else {
    console.log(i)
  }
};

