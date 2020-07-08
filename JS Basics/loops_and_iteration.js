/*
    *** loops and iteration ***
*/

/*
    *** for loop ***
*/

for (var i=0; i<10; i++) {
    console.log(i);
}

for (var i=0; i<10; i += 2) {
    console.log(i);
}

var payel = ['Payel', 'Banerjee', 2000, 'Student', true];
for (var i = 0; i < payel.length; i++) {
    console.log(payel[i]);
}
/*
    *** while loop ***
*/
var i = 0;
while(i < payel.length){
    console.log(payel[i]);
    i += 1;
}

// continue and break statements

var payel = ['Payel', 'Banerjee', 2000, 'Student', true];
for (var i = 0; i < payel.length; i++) {
    if(typeof(payel[i]) !== 'string') continue;
    console.log(payel[i]);
}
    
for (var i = 0; i < payel.length; i++) {
    if(typeof(payel[i]) !== 'string') break;
    console.log(payel[i]);
}

// looping backwards

for (var i = payel.length - 1; i >= 0; i--){
    console.log(payel[i]);
}