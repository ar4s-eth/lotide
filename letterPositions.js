const letterPositions = function(sentence) {
  const results = {}; //console.log(results)
  const noSpaceString = sentence.split(" ").join("");
  for (let i = 0; i < noSpaceString.length; i++) {
    let letter = noSpaceString[i]; //looking up the letter from the index in the string.
    if (results[letter]) {
      results[letter].push(i) //pushes the letter to the key in results
    } else {
      results[letter] = [i]; //creates an array from the index
    }
  }
  // logic to update results here
  return results;
};

// --- TEST CASES ---

// console.log(letterPositions("lighthouse blah blah blah"));

module.exports = letterPositions;