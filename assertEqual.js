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

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
  console.log(`🔴️🔴️🔴️Assertion Failed: ${actual} !== ${expected}`);
  } else {
  console.log(`✅️✅️✅️Assertion Passed: ${actual} === ${expected}`);
  }
  };



module.exports = assertEqual;


    
















