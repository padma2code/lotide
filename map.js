const words = ["ground", "control", "to", "major", "tom"];
let word;
const results1 =(word) => { 
    return word[0]
};
  /*const map = function(array, callback) {
    // temporary code:
    console.log('array: ', array);
    console.log('callback: ', callback);
  
    const results = [];
    return results;
  }
  
  const map = function(array, callback) {
    const results = [];
    for (let item of array) {
      console.log('item BEFORE: ', item);
      console.log('item AFTER: ', callback(item));
      console.log('---');
    }
    return results;
  }*/


  const map = function(array, callback) {
    const results = [];
    for (let item of array) {
      results.push(callback(item));
    }
    return results;
  }

  

  var result = map(words,results1);
  console.log(result);
  
  const eqArrays = function(array1, array2) {
    let correct = true;                                                         //if the two arrays are not the same length the assertion fails automatically
    if (array1.length !== array2.length) {
    correct = false;
    }                                                          //if the two arrays are the same length this runs:
    for (let i = 0; i < array1.length; i ++) {
    if (results1(array1[i]) !== array2[i]) {
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
        
        assertArraysEqual(words,result);
        //assertArraysEqual(["pear","mango","pie"],["pear","apple","pie"]);