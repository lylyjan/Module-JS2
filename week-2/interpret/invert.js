// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = { };

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}

const objectOne = { "Ly-Ly": "26"}
let result = invert(objectOne)

console.log(result)


// a) What is the current return value when invert is called with { a : 1 }

//obj[myKey] = value;

// b) What is the current return value when invert is called with { a: 1, b: 2 }

// 

// c) What is the target return value when invert is called with {a : 1, b: 2}

// { "1": "a", "2": "b" }

// c) What does Object.entries return? Why is it needed in this program?

// d) Explain why the current return value is different from the target output
