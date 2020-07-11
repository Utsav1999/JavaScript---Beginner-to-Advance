/* 
    *** objects and properties ***
*/

//object literal

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Mark', 'Lily', 'Julia'],
    job: 'Teacher',
    isMarried: false
};
console.log(john);
console.log(john.firstName); //using '.' notation
console.log(john['lastName']);//using key as index value
var x = 'birthYear';
console.log(john[x]);

// object key's value mutation

john.job = 'Designer';
john['isMarried'] = true;
console.log(john);

//new Object() syntax

var payel = new Object();
payel.firstName= 'Payel';
payel.lastName= 'Banerjee';
payel['birthYear']= 2000;
console.log(payel);

/*
    *** objects and methods ***
*/


var mark = {
    firstName: 'Mark',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['John', 'Lily', 'Julia'],
    job: 'Cop',
    isMarried: false,
    calAge: function(){
        //return 2020 - this.birthYear;
        this.age = 2020 - this.birthYear;
    }
};

mark.calAge();
console.log(mark);

