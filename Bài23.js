//1. Define an array of products (name, price, stock)
//2. Sort by price from more expensive to less expensive
//3. Sort by in stock value from more expensive to less expensive

var products = [{name: 'A', price: 10, stock: 5},
                {name: 'B', price: 100, stock: 2},
                {name: 'C', price: 400, stock: 50},];

console.log(products);
var sortedPrice = products.sort(function(a, b) {
  // assume: a = 50, b = 80;
  //console.log('a: ' + a.price + ' b: ' + b.price);
  return a.price - b.price; // > 0 
})

//sortedPrice;

var sortedStockPrice = products.sort(function(a, b) {
  return b.stock*b.price - a.stock*a.price;
})

sortedStockPrice;