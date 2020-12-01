const assertEqual = require('../assertEqual')
const tail = require('../tail')

// --- TEST CASES ---
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(assertEqual(result.length, 2));
console.log(assertEqual(result[0], "Lighthouse"));
console.log(assertEqual(result[1], "Labs"));