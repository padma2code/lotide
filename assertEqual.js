/*console.assert(1 === 1);
console.assert(1 === 1.1);

const sum = function(a, b) {
    return a + b;
  }
  
  // TEST CODE
  console.assert(sum(1, 2) === 3);
  console.assert(sum(1, 20) === 3);
  
  const sumBuggy = function(a, b) {
    return a * b;
  }
  
  // TEST CODE
  console.assert(sumBuggy(1, 2) === 2);*/

/*const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('✅️✅️✅️Assertion Passed: ${actual} === ${expected}');
  } else {
    console.log('🔴️🔴️🔴️Assertion Failed: ${actual} != ${expected}');
  }
};
assertEqual("Lighthouse Labs", "Bootcamp");*/

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
  const assertArraysEqual = function(arr1, arr2) {
    if (eqArrays(arr1, arr2)) { //if the true (two arrays are equal)
    console.log(`Arrays are equal!`)
    } else {
    console.log(`Arrays are NOT equal!`)
    }
    };
    
    assertArraysEqual(["pear","apple","pie"],["pear","apple","pie"]);
    assertArraysEqual(["pear","mango","pie"],["pear","apple","pie"]);
    


    
















