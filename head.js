const assertEqual = require('./assertEqual.js')
 
const head = function(array) {
  let arrayZero = array[0];
  if (!array.length) {
    return undefined;
  }
  return arrayZero;
};

module.exports = head;