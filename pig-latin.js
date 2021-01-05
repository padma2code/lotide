

let reverse = function(params) {
  let res = [];
  for (let i = params.length - 1; i >= 0; i--) {
    res += params[i];
  }
  res += "ay";
  return res;
};
      
      
for (let j = 2; j < process.argv.length; j++) {
  console.log(reverse(process.argv[j]));
}
      



/* this is the program to give inline input and not in runtime
let reverse = function(params) {
    let res = [];
      for (let i = params.length-1; i >=0; i--) {
        res += params[i]
      }
      res += "ay"
      return res;
    };
    
    let arr = ["valli", "dutt", "abcd"]
    for (let j = 0; j <= arr.length-1; j++) {
       
        console.log(reverse(arr[j]))
    };
    */




