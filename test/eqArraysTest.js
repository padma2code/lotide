const assertEqual = require('../assertEqual');
const eqArrays =require('../eqArrays');

assertEqual(eqArrays(["Lighthouse Labs", "Bootcamp"],["Lighthouse Labs", "Bootcamp"]),true);
  assertEqual(eqArrays(["Bootcamp"], ["Bootcamp"]),false);
  

