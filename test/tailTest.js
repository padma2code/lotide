const assertEqual = require('../assertEqual');

const tail= require('../tail');


  
  const words = tail(["Hello", "Lighthouse", "Labs"]);
  assertEqual(words, ["Lighthouse", "Labs"]); // => will pass!
  
  assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Hello"]); // => will always fail!
  
