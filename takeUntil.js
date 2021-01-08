const takeUntil = function(array, callback) 
{
    
    let results = [];
    for (let item of array) {
        
        let xyz = callback(item);
        
        if(xyz === false){results.push(item);}
        else{break;}
        
    
    }
    return results;
    
};



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


const eqArrays = function(array1, array2) {
    let correct = true;                                                         //if the two arrays are not the same length the assertion fails automatically
    if (array1.length !== array2.length) {
    correct = false;
    }                                                          //if the two arrays are the same length this runs:
    for (let i = 0; i < array1.length; i ++) {
    if ((array1[i]) !== array2[i]) {
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
        
        assertArraysEqual(data1,results1);