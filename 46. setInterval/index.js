// Write a function count from 1 to 10
// return a promise



function countFrom(a, b) {
    return new Promise(function(resolve, reject) {
       var intervalId = setInterval(function(data) {
        console.log(a);
        a++;
        if (a > b) {
            clearInterval(intervalId);
            resolve(data);
        }
        }, 1000)
         
    })
}

countFrom(1, 10).then(function() {
    console.log('Done');
})

// printValue(1, 5); 