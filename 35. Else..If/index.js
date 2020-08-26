// Example: calculate bus ticket fee
// - if age < 15, discount 20%
// - if age > 60, discount 10%
// - otherwise 10000/ticket

function getTicketFee(person) {
    var basePrice = 10000; 
    if (person.age < 15) {
       // console.log(person.age);
        return basePrice * 0.8;
    }
    else if (person.age > 60) {
        return basePrice * 0.9;
    }
    else {
        return basePrice;
    }
}

var person = {
    age : 70
};

var fee = getTicketFee(person);
console.log(fee);