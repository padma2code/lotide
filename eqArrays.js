const eqArrays = function(actual, expected) {
  if (actual.toString() === expected.toString()) {    console.log(actual)
    console.log(expected)
    console.log(actual)
    console.log(expected)
    console.log('✅️✅️✅️Assertion Passed: ${actual} ===+ ${expected}');
  } else {
    console.log(actual)
    console.log(expected)
    console.log('🔴️🔴️🔴️Assertion Failed: ${actual} != ${expected}');
  }
};
//let eqArrays = ([1, 2, 3], [1, 2, 3]);
eqArrays([1, 2, 3],[1, 2, 3]); // => should PASS 
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

