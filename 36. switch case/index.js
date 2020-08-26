// bronze, silver, gold, diamond
// discount: 
// bronze: 2%
// silver: 5%
// gold: 8%
// // diamond: 10%

// var memberCard = {
//     tier : 'diamond'
// }

// function getTotalPrice(price, membership) {
//     var discountRate = 0;
//     switch (membership.tier) {
//         case 'bronze':
//             discountRate = 0.02;
//             break;
//         case 'silver':
//             discountRate = 0.05;
//             break;
//         case 'gold':
//             discountRate = 0.08;
//             break;
//         default:
//             discountRate = 0.1;
//             break;
//     }

//     return price * (1 - discountRate);
// }

// var total = getTotalPrice(50000, memberCard);
// console.log(total);

var trafficLight = 'yellow';

function trafficControl (light) {
    switch (light) {
        case 'green':
            return 'GO';
        case 'yellow':
            return 'SLOW DOWN - IF MORE THAN HALFWAY -->> CAN CROSS';
        case 'red':
            return 'STOP';
    }   
}

var log = trafficControl(trafficLight);
console.log(log);



