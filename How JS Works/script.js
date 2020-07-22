/*
        *** creation phase ***
        1. variable object creation
        2. scope chain
        3. 'this' variable
        
        *** execution phase ***
*/

/*
    *** hoisting*** *** variable object creation ***
    
    * variable and function declaration will be moved to the top of its scope before code execution
    
    function declaration is a global execution context so it is the last section of the execution stack. So when the function will be called from anywhere after declaration, it will be executed.
    
    * not applicable for function expression
*/

calAge(1990); // will work

function calAge(birthYear) {
    console.log(2020 - birthYear);
}

calAge(1999); // will work


//retirement(1990); // will not work : Uncaught TypeError: retirement is not a function

var retirement = function(year) {
    console.log(65 - (2020 - year));
}

retirement(1999) // will work

/*
    *** hoisting for variables ***
*/

console.log(age); // will print undefined
/*
    variable declaration also comes under global execution context but value assignment doesn't! So when we are trying to print age it is only declared not assigned with 23 so undefined. 
*/

var age =23;
console.log(age); // will print 23


function foo() {
    console.log(age) // will print undefined as age is declared but not assigned with any value yet!
    var age = 67;
    console.log(age); 
    /*
        this age variable is completely different from the previously declared age variable, it comes under foo function execution 
        context
    */
}
foo();
console.log(age); // will print 23 as it comes under global execution contecxt 

/*
        *** scope chain ***
        * from where we can access a variable or a function
        
        1. each function creates a scope
        2. lexical scoping - function that is lexically within another function gets access to the scope of the outer function
        
*/

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();
    
    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
/*
    global scope - var a, first(), .... , var c
    first() scope - var b, second(), var c
    second() scope - var c
    
    * scope chain goes bottom to top
    
    * a and b are not declared within the scope of second() --> will search in scope of first(), not in the scope of first() --> will search in global scope --> if not find results in error
    
*/

/*
    *** execution context vs scope chain ***
*/
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();
    
    function second() {
        var c = 'Hey!';
        third();
        //console.log(a + b + c);
    }
}

function third()
{
    var d = 'Utsav';
    console.log(a + ' ' + d);
    //console.log(c); // don't have access to the variable c
}
/*
        execution context: 
                                        ^
            third()                     |
            
            second()                    |
            
            first()                     |
            
            global execution context    |
                                        order in which functions will be executed    
*/
/*

        scope chain:
                                    ^
        global scope                |
            
            first() scope           |
            
                second() scope      |
                
            third() scope           |
                                    order in which functions are written lexically
*/

/*
        *** 'this' variable ***
        
        regular function call: the this keyword points at the global object i.e. the window object 
        
        method call: the this keyword points to the object which is calling the method
*/


console.log(this); // will invoke window object as it is the by default global object

// regular function call

calAge(2000);

function calAge(year) {
    console.log(2020 - year);
    console.log(this); // invokes global object
}

// method call

var john = {
    firstName: 'John',
    yearOfBirth: 1985,
    calculateAge: function() {
        console.log(this); // invokes the object which is calling the method
        console.log(2020 - this.yearOfBirth);
        
        /*
        function innerFunc() {
            console.log(this); //invokes window object
        }
        innerFunc();
        */
    }
};

john.calculateAge();


var mike = {
    firstName: 'Mike',
    yearOfBirth: 1984,
};

mike.calculateAge = john.calculateAge; //method borrowing

mike.calculateAge();
