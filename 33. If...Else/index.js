// Syntax: 
// if (condition) {
//     statement when true;
// }
// else {
//     statement when false;
// }

// Example1: Toss A Coin
// function tossACoin() {
//     var value = Math.random();
//     if( value < 0.5 ) {
//         console.log('Tail!');
//     }
//     else {
//         console.log('Head!');
//     }
// }

// tossACoin();

// Example2: Should I Date Her
// var readlineSync = require('readline-sync');
// function shouldIDateHer() {
//     var answer = readlineSync.question('Wish to know your crush has a boyfriend or not. Please press \'Enter\' :');

//     var value = Math.random();
//     if( value < 0.5 ) {
//         console.log('Your crush is SINGLE! YES, you can date her');
//     }
//     else {
//         console.log('OMG, your crush has a boyfriend! STAY AWAYYYYY!!!!!!!!!');
//     }
// } 

// shouldIDateHer();

// Example3: Fake Bills

var bills = [
    { value : 100},
    { value : 50, fake : true },
    { value : 100},
    { value : 20}
]

function checkFakeBill(bills) {
    var total = 0;

    for ( var bill of bills) {
       // console.log(bill.value);
       if (!bill.fake) {
            total += bill.value;
       }
       else {
            console.log('Fake Bill', bill);
            break;
       }
    }

    return total;
}

var result = checkFakeBill(bills);
console.log(result);