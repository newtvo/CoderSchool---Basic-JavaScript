/**
 * Sử dụng Promise.all + axios để tải về 3 đường link sau cùng lúc và hiển thị ra kết quả:
 * https://jsonplaceholder.typicode.com/todos/1
 * https://jsonplaceholder.typicode.com/todos/2
 * https://jsonplaceholder.typicode.com/todos/3
 */

var axios = require('axios');

var url1 = 'https://jsonplaceholder.typicode.com/todos/1';
var url2 = 'https://jsonplaceholder.typicode.com/todos/2';
var url3 = 'https://jsonplaceholder.typicode.com/todos/3';

function getData(path) {
  return new Promise(function(resolve, reject) {
     axios.get(path)
      .then(function(response){
        console.log(response.data);
      }).catch(function(err) {
        console.log(err);
      });
   })
  // axios.get(url1).then(function(response) {
  //     console.log(response.data);
  //   }).catch(function(err) {
  //     console.log(err);
  //   });
}



Promise.all([
  getData(url1),
  getData(url2),
  getData(url3)
]).then(function(values) {
  console.log(values);
}).catch(function(error) {
  console.log(error);
})