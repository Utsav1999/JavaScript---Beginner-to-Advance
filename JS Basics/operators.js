//basic js operators

/*
***** Math Operators ****
*/
var yearUtsav= 2020 - 21;
console.log(yearUtsav);

var year = 2020;
var yearPrerona = year - 22;
var yearPayel = year - 20;
console.log(yearPrerona);
console.log(yearPayel);

var year, yearUtsav, yearPrerona;
year = 2020;
yearUtsav= year - 21;
yearPrerona = year - 22;
console.log(yearUtsav);
console.log(yearPrerona);

console.log(year + 2);
console.log(year * 2);
console.log(year / 10);


/*
**** Logical Operator ****
*/
var ageUtsav, ageBiswa;
ageUtsav = 20;
ageBiswa = 24;
var utsavOlder = ageUtsav > ageBiswa;
console.log(utsavOlder);
var biswaOlder = ageUtsav < ageBiswa;
console.log(biswaOlder);


/*
**** typeof operator ****
*/
var year = 2020, age;
console.log(typeof(year));
console.log(typeof(10 > 20));
console.log(typeof('hello'));
console.log(typeof(age));


/*

*** operator precedence & associativity ***
*/
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

//multiple operators

var now = 2020;
var yearUtsav = 1999;
var fullAge = 18;
var isFullAge = now - yearUtsav >=fullAge;
console.log(isFullAge);

//grouping

var agePayel = 20;
var ageUtsav = now - yearUtsav;
var avg = (ageUtsav + agePayel) / 2;
console.log(avg);

//multiple assignments

var x, y;
x = y = (2 + 3) * 4 - 2; //5*4-2 //20-2 //18
console.log(x, y);

//more operators

x += 2;
console.log(x);

x *= 2;
console.log(x);

x++
y--
console.log(x, y);
