let myCar = new Object();
myCar.make = "Toyota";
myCar.model = '4Runner';
myCar.year = 2002;

let myCar2 = {
  make: 'Toyota',
  model: '4Runner',
  year: 2002,
  scratches: true
}

console.log(myCar2['make'])
console.log(myCar2['model'])
console.log(myCar2['year'])
console.log(myCar2['scratches'])

myCar2['skate box'] = true;

console.log(myCar2)

function showProps(obj, objName) {
  var result = ``;
  for (var i in obj) {
    // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
    if (obj.hasOwnProperty(i)) {
      result += `${objName}.${i} = ${obj[i]}\n`;
    }
  }
  return result;
}

console.log(showProps(myCar2, 'myCar2'))