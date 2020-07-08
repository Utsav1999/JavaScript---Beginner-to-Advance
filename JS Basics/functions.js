/*

    *** functions ***
*/

function calculateAge(birthYear){
    return (2020 - birthYear);
}

var ageJohn = calculateAge(1990);
var ageLily = calculateAge(1999);
console.log(ageJohn, ageLily);

function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var yearsToRetire = 65 - age;
    
    if(yearsToRetire > 0){
        console.log(firstName + ' has ' + yearsToRetire + ' years to retire.');
    }else{
        console.log(firstName + ' is already retired.');
    }
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1999, 'Lily');
yearsUntilRetirement(1954, 'Mike');



// function declaration
// function whatDoYouDo(job, firstName){}

// function expression

var whatDoYouDo = function(job, firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teaches how to code.';
        case 'driver':
            return firstName + ' drives OLA car in NYC.';
        case 'designer':
            return firstName + ' designes beautiful websites.';
        default:
            return firstName + ' does something else.';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Lily'));
console.log(whatDoYouDo('cop', 'Mike'));

/*


expression is a piece of code that always 
produce a value/result. eg. 2 + 3 = 5

statement that performs action. eg. type coercion, if-else etc.

if(true){console.log(23);}
-->> it will print 23 but doesn't produce a value

function expression produces an immediate value but function declaration doesn't .
*/
