
const assertEqual = require('./assertEqual');


let tail = function(params) {
  let res = [];
  for (let i = 1; i < params.length; i++) {
    res.push(params[i]);
    
  }
  return res;
};

module.exports = tail;




