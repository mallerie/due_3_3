// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.
// var firstNum = 5;
// var secondNum = 17;

function sum(firstNum, secondNum) {
  return firstNum + secondNum;
}

// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.

function avg(paramOne, paramTwo, paramThree) {
  var sum = Number(paramOne) + Number(paramOne) + Number(paramOne);
  return sum / 3;
}

// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length

function getLength(stringThing) {
  return stringThing.length;
}

// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.

function greaterThan(firstParam, secondParam) {
   return Number(firstParam) >= Number(secondParam) 
};


// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.


function greet(name) {
  return ("Hello, " + name + "!");
}


// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function 
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"

function madlib(date, dayType, dollarAmount, transitType, location) {
  return (date + " was an " + dayType + " day. I found " + dollarAmount + " dollars on my way to the " + transitType + " after " + location + ".")
}















