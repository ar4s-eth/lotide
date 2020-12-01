# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@ar4sdoteth/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: function takes in two arrays and checks that they are equal in length, and value.
* `assertEqual(...)`: function takes in two arguments -actual && expected- and returns an assertion.
* `assertObjectsEqual(...)`: function takes in two objects and compares that they are the same.
* `countLetters(...)`: function takes in a string and counts the number of each letter.
* `countOnly(...)`: function takes in an array of strings and an input for what strings to count.
* `eqArrays(...)`: compares two arrays.
* `eqObjects(...)`:  compares two objects to see if they hold the same key-value pairs.
* `findKey(...)`: searches object properties with call backs to return the key.
* `findKeyByValue(...)`: searches object properties with an input and returns their key.
* `head(...)`: returns the first index of an array.
* `letterPositions(...)`: returns an object with letters-as-keys and all of the locations of those characters
* `map(...)`: function takes in an array and a callback to operate on the array.
* `middle(...)`: finds the middle element of an array, or if the array is even, the two middle values
* `tail(...)`: returns all index after the first index
* `takeUntil(...)`: takes in an array and a callback to return elements before those specified in the callback
* `without(...)`: takes in an array, and uses a second array to remove items from the first array.
