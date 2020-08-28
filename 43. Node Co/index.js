/**
 * Sử dụng node co + axios để tải về các đường link sau theo 2 cách:
 */
var axios = require('axios');
var co = require('co');
var urls = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://jsonplaceholder.typicode.com/todos/3',
  'https://jsonplaceholder.typicode.com/todos/4',
  'https://jsonplaceholder.typicode.com/todos/5'
];
// Cách 1: Sử dụng vòng lặp for


// Create Promoise
function getData(path) {
  return new Promise(function(resolve, reject) {
    for(var url of path){
     axios.get(url)
      .then(function(response){
        console.log(response.data);
      }).catch(function(err) {
        console.log(err);
      });
    }
   })
}


var readUrl = co.wrap(function* (urls) {
  var values = yield getData(urls);
  return values;
})


// Cách 2: Sử dụng array.map
//Gợi ý: Có thể yield 1 array các Promise
var readUrl = co.wrap(function* (urls) {
  var values = yield urls.map(function(url) {
    return axios.get(url)
              .then(function(response) {
                return response.data;
              });
  })
  return values;
})

readUrl(urls)
  .then(function(values) {
    console.log(values);
  })
  .catch(function(error) {
    console.log(error);
  })
