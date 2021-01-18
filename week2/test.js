

let triangleArea = function(base, height){
  area = (base * height)/2;
  if(base < 0 || height < 0) {
    return "Both base and height should be positive!"
  } else {
    return area
  }
}

console.log(triangleArea(3,90))

const assert = require('assert');
describe('Testing Valid Triangles', function(){

  it('Testing the Unit Triangle', function(){
    let actual = triangleArea(1,1);
    let expected = .5;
    assert.equal(actual, expected)
  })

  it('Height greater than 1', function(){
    let actual = triangleArea(1,2);
    let expected = 1;
    assert.equal(actual, expected)

  })

  it('Base greater than 1', function(){
    let actual = triangleArea(3,1);
    let expected = 1.5;
    assert.equal(actual, expected)
  })

  it('Both height and base greater than 1', function(){
    let actual = triangleArea(2,2);
    let expected = 2;
    assert.equal(actual, expected)

  })

})

describe('Testing Invalid Inputs', function(){
  
  it('Testing Negative Height', function(){
    let actual = triangleArea(1,-1);
    let expected = "Both base and height should be positive!";
    assert.equal(actual, expected)
  })

  it('Testing Negative Base', function(){
    let actual = triangleArea(-1,1);
    let expected = "Both base and height should be positive!";
    assert.equal(actual, expected)
  })
})