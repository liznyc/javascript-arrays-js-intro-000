var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var addElementToBeginningOfArray = ["a", "b", "c", "d"];
["e", ...addElementToBeginningOfArray];
addElementToBeginningOfArray

var destructivelyAddElementToBeginningOfArray  ["a", "b", "c", "d"];
destructivelyAddElementToBeginningOfArray.unshift("e");
destructivelyAddElementToBeginningOfArray

var addElementToEndOfArray = ["a", "b", "c", "d"];
[...addElementToEndOfArray, "e"];
addElementToEndOfArray

var destructivelyAddElementToEndOfArray =  ["a", "b", "c", "d"];
destructivelyAddElementToEndOfArray.push("e");
destructivelyAddElementToEndOfArray

var accessElementInArray = ["Oprah Winfrey", "Laurene Powell Jobs", "Arianna Huffington"];
console.log(accessElementInArray[0]);

var destructivelyRemoveElementFromBeginningOfArray =  ["a", "b", "c", "d"];
destructivelyRemoveElementFromBeginningOfArray.shift();
destructivelyRemoveElementFromBeginningOfArray

var removeElementFromBeginningOfArray =  ["a", "b", "c", "d"];
removeElementFromBeginningOfArray.slice(1);
removeElementFromBeginningOfArray

var destructivelyRemoveElementFromEndOfArray =  ["a", "b", "c", "d"];
destructivelyRemoveElementFromEndOfArray.pop();
destructivelyRemoveElementFromEndOfArray

var removeElementFromEndOfArray  =  ["a", "b", "c", "d"];
removeElementFromEndOfArray.slice(0,removeElementFromEndOfArray.length - 1);
removeElementFromEndOfArray
