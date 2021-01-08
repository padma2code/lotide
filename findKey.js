
const findKey = function(hotelName,callback) {
    //console.log(hotelName)
    let result 
    for (let [typ, nam] of Object.entries(hotelName)) {
        
        let xyz = callback(nam);
        
        if(xyz === true){result =typ;break;}
        
    }
    return result
    
}


   var findKeyResult =  findKey({
        "Blue Hill": { stars: 1 },
        "Akaleri":   { stars: 3 },
        "noma":      { stars: 2 },
        "elBulli":   { stars: 3 },
        "Ora":       { stars: 2 },
        "Akelarre":  { stars: 3 }
      }, x => x.stars === 2) ;

      

      const assertEqual = function(actual, expected) {
        if (actual !== expected) {
        console.log(`🔴️🔴️🔴️Assertion Failed: ${actual} !== ${expected}`);
        } else {
        console.log(`✅️✅️✅️Assertion Passed: ${actual} === ${expected}`);
        }
        };



        assertEqual(findKeyResult,"Blue Hill");
        assertEqual(findKeyResult,"noma");
        assertEqual(findKeyResult,"Ora");
      