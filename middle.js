//function that finds the middle value of an array, or the two middle values if it is divisible by 2
const middle = function(array) {
  let newArray = []
  //if the array has one or two elements, return an empty array
  if (array.length <=2) {
    return []
  } 
  //if the array isn't divisible by two, return the two middle elements -find them by dividing the arrays length and rounding down while returning it and the element that follows.
  if (array.length % 2 === 0) {
    newArray.push(array[Math.floor(array.length / 2) - 1], array[Math.floor(array.length / 2)]);
  } else {
    newArray.push(array[Math.floor(array.length / 2)]);
  }
  return newArray
}

module.exports = middle;