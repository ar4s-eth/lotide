const tail = function(array) {
  let emptyArray = [];
  if (array.length === 1 || !array.length) {
    return emptyArray;
  }
  return array.slice(1);
};

module.exports = tail;