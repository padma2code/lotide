let res = [];
let tail = function(params) {
  for (let i = 1; i < params.length; i++) {
    res.push(params[i]);
    
  }
  return res;
};


const assertEqual = function(words, expected) {

  console.log(words);
  console.log(expected);
  if (words.toString() === expected.toString()) {
        
    console.log('✅️✅️✅️Assertion Passed:' + words + '===' + expected);
  } else {
    console.log('🔴️🔴️🔴️Assertion Failed:' + words + '!=' + expected);
  }
};

//const words = tail(["Hello", "Lighthouse", "Labs"]);
//assertEqual(words, ["Lighthouse", "Labs"]); // => will pass!


//const result = tail(["Hello", "Lighthouse", "Labs"]);
//assertEqual(result.length,  2); // ensure we get back two elements
//assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
//assertEqual(result[1], "Labs"); // ensure second element is "Labs"

//assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]); // => will always fail!

const word = ["Yo Yo", "Lighthouse", "Labs"];
//console.log(tail(word).length); // no need to capture the return value since we are not checking it
//assertEqual(word.length, 3); // original array should still have 3 elements!
assertEqual(tail(word).length, 3);

