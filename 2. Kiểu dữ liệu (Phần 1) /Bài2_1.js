/**
 * Sử dụng các kiến thức đã học trong bài khai báo các biến mô tả một người, vật nào đó mà bạn thích
 * Ví dụ dưới đây mô tả thời tiết ngày hôm nay
 *  var today = 'Sunday';
 *  var isCloudy = true;
 *  var currentTemperature = 30;
 *
 * fullName có kiểu dữ liệu là string;
 * age có kiểu dữ liệu là number;
 * isMale có kiểu dữ liệu là boolean;
 */
 
// viết code ở đây
var fullName = "Newt Vo ";
var age = 23; 
var isMale = true;

///// Bài giải trong chương trình học
var orders = [
    { name: 'A', quantity: 2, unitPrice: 100},
  { name: 'B', quantity: 1, unitPrice: 400},
  { name: 'C', quantity: 5, unitPrice: 15},
];

orders.reduce(function(x,y) {
 // console.log(x.quantity, y.unitPrice);
 //console.log(x.quantity,y.quantity);
  return {quantity: x.quantity + y.quantity, unitPrice: x.unitPrice + y.unitPrice};
});

//============================================================
var products = [
  {name: 'A', unitPrice: 100, quantity: 10, category: 'Electric Goods'},
  {name: 'B', unitPrice: 200, quantity: 15, category: 'Farmer Goods'},
  {name: 'C', unitPrice: 100, quantity: 10, category: 'Electric Goods'}
  ];
 
//1. Filter các sản phẩm nằm trong 1 category nào đó
function filteredItem(string) {
   var filteredCategory = products.filter(function(item) {
    //console.log(item.category);
    return item.category === string;
 });
 return filteredCategory;
}
 
 filteredItem('Electric Goods');

//2. TÍnh tổng số  tiền hàng còn trong kho
function totalCost(){
    var inputCost = products.map(function(item) {
        return item.unitPrice;
      })

    var inputQuantity = products.map(function(item) {
        return item.quantity;
      })

    var totalInputCost = inputCost.reduce(function(x,y){
      return x + y;
    })

    var totalInputQuantity = inputQuantity.reduce(function(x,y) {
      return x + y;
    })
    return totalInputCost * totalInputQuantity;
}

 totalCost();

//3. Chọn ra các sản phẩm có tiền hàng tồn lớn (tổng trên 500)


//===========================================

function round100(n) {

  if ((n % 100) < 50) {
   return  Math.floor(n/100)*100;
   }
  else {
   return Math.ceil(n/100)*100;
  }
 }
 
 round100(49.999)
 
 round100(50)
 
 round100(349)
 
 round100(350) 
 
 round100(4649)
 
 round100(4650)

 