const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('✅️✅️✅️Assertion Passed: ${actual} === ${expected}');
  } else {
    console.log('🔴️🔴️🔴️Assertion Failed: ${actual} != ${expected}');
  }
};
const eqArrays = function(array1, array2) {
    let correct = true;                             //if the two arrays are not the same length the assertion fails automatically
    if (array1.length !== array2.length) {
    correct = false;
    }                                                            //if the two arrays are the same length this runs:
    for (let i = 0; i < array1.length; i ++) {
    if (array1[i] !== array2[i]) {
    correct = false;
    }
    }
    return correct;
    };           
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== "") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};
const firstNames = "lighthouse in the house";
console.log(letterPositions(firstNames));
assertArraysEqual(letterPositions("hello"));
  