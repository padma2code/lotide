const eqArrays = function(array1, array2) {
    let correct = true;                                                         //if the two arrays are not the same length the assertion fails automatically
    if (array1.length !== array2.length) {
    correct = false;
    }                                                          //if the two arrays are the same length this runs:
    for (let i = 0; i < array1.length; i ++) {
    if (array1[i] !== array2[i]) {
    correct = false;
    }
    }
    return correct;
    };

  //eqobjects function()

  const eqObjects = function(object1, object2) {
    let result = true;  
//if the two objects are not the same length the assertion fails automatically
    let array1 = Object.keys(object1);
    let array2 = Object.keys(object2);

    if (array1.length !== array2.length) {
      result = false;
    }   
//if the two objects are the same length this runs:
    else for (let item of array1) {
    if (Array.isArray(object1[item]) && Array.isArray(object2[item]))  {
    result = eqArrays(object1[item], object2[item]);    
    } else if (typeof(object1[item]) === "object" || typeof(object2[item]) === "object") {
    result = eqObjects(object1[item], object2[item]);
     } else if  (object1[item] !== object2[item]) {
    result = false;   
      }
}
  
  return result;
};

const inspect = require('util').inspect;
const eqobjects = require("./eqObjects");    
  
// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected)
 {     
        if (!eqObjects(actual, expected))
        {
       return (console.log(`❌❌❌ Assertion Failed: `));
         }    
        return (console.log(`✅✅✅ Assertion Passed: `));
};

//test cases
console.log(assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' }));
  
