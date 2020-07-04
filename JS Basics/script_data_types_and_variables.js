/*
    Variables and Datatypes
*/


console.log("Hello World!!!");
var firstName = 'Utsav Akash';
console.log(firstName);
var lastName = 'Naskar';
var age = 21;
var fullAge = true;
console.log(fullAge);
var job;
console.log(job);
job = 'Teacher';
console.log(job);


/*
    Variable mutation and type coercion
*/

//type coercion
var firstName = 'Utsav Akash';
var age = 21;
console.log(firstName + ' ' + age);

var job, isMarried;
job='teacher';
isMarried=false;

console.log(firstName+ ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

//variable mutation

age = 'twenty one';
job = 'driver';
alert(firstName+ ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' +lastName);
