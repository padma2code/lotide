
let head = function (params)
{
    
    result = params[0]
    return result
}

const assertEqual = function(result, expected) {
    if (result === expected) {
      console.log('✅️✅️✅️Assertion Passed:'+ result + '===' + expected);
    } else {
      console.log('🔴️🔴️🔴️Assertion Failed:'+ result + '!=' + expected);
    }
  };


assertEqual(head([5,6,7]), 56);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");


