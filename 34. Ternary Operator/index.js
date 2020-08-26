function tossCoin() {
    var value = Math.random();

    var result = (value < 0.5) ? 'Tail!' : 'Head!';

    console.log(result);
}

tossCoin();