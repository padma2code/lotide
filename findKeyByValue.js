/*const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log('✅️✅️✅️Assertion Passed: ${actual} === ${expected}');
    } else {
      console.log('🔴️🔴️🔴️Assertion Failed: ${actual} != ${expected}');
    }
  };*/
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
const findKeyByValue = function(showtype,showname) {
  const values = Object.entries(showtype);
  let returnobj;
  for (let [typ, nam] of values) {
            
    if (nam === showname) {
                
      returnobj = typ;

    }
  }
           
        
  return returnobj;
      
            
};
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
//assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
//assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);