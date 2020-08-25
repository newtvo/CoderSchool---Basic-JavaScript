var items = ['Tom', 'Bill', 'Kim'];

// Solution 1
var display = items.reduce(function(currentStr, item) {
  return (currentStr + '<' + item + '>' );
}, '');

// Solution 2
var result = items.map(items => '<'+items +'>');
var display = result.join('');

display;