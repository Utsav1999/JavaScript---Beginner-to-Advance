/*
    *** Arrays ***
*/

// Initialization new Array

var names = ['John', 'Mark', 'Lily']; 
var birthYear = new Array(1990, 1995, 1999);

console.log(names[0]);
console.log(names);
console.log(names.length);

// Mutate Array Data

names[1] = 'Ben';
names[names.length] = 'Paro';
console.log(names);

// Different Data Types 

var payel = ['Payel', 'Banerjee', 2000, 'Student', true];

payel.push('Black'); //add element at the end position 
payel.unshift('Mrs.'); //add element at the beginning
console.log(payel);

payel.pop();
payel.pop(); //remove element from the end position 
payel.shift(); //remove element form the beginning
console.log(payel);

console.log(payel.indexOf(2000)); //return the index of the given element
console.log(payel.indexOf(2001)); //if the element is not there in the array then returns -1

var isDesigner = payel.indexOf('Designer') === -1 ? 'Payel is not a Designer.' : 'Payel is a Designer.'
console.log(isDesigner);