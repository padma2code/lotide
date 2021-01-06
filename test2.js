//without function starts here
const without = function(source, itemsToRemove) {

    let returnArray = [];
    
    for (let i = 0; i < source.length; i ++) 
    {
      let removeElem = false;
      for (let j = 0; j < itemsToRemove.length; j++) 
      
      {
        if (source[i] === itemsToRemove[j]) 
        {
          removeElem = true;
        }
      }
      if (removeElem === false) {
        returnArray.push(source[i]);
      }
    }
  
    return returnArray;
  
};
//test cases
//console.log(without([1, 2, 3], [1,2]))
//console.log(without(["1", "2", 3], ["1"]))


console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"]) );// => ["1", "2"]
