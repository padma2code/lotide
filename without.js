   const assertEqual = function(actual, expected) {
    if (actual !== expected) {
    console.log(`🔴️🔴️🔴️Assertion Failed: ${actual} !== ${expected}`);
    } else {
    console.log(`✅️✅️✅️Assertion Passed: ${actual} === ${expected}`);
    }
    };                                                              //eqArrays function
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
    };                                                            //test cases
    assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

    
    let without =function(arr1,arr2) 
    {
      
        let returnarray=[];
        for (let i=0;i< arr1.length;i++)
        {
            let xyz = "notmatch";
            for(let j=0;j< arr2.length;j++)

            {

                if(arr1[i] === arr2[j])
                {
                    
                    xyz = "match";
                }
                
                
            }
            if(xyz === "notmatch")
            {
                returnarray.push(arr1[i]);
            }


        }
     return returnarray;
    };

  //console.log(without([1, 2, 3], [1])); // => [2, 3]
//console.log(without(["1", "2", "3"], [1, 2, "3"]) );// => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
//without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
eqArrays(words, ["hello", "world", "lighthouse"]);