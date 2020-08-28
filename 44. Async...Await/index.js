var fs = require('fs');
var axios = require('axios');

// fs.readFile(
//   './data.json', 
//   { encoding: 'utf8'}, 
//   function(err, data) {
//     console.log('Data loaded from disk', data);

//     axios.get('https://jsonplaceholder.typicode.com/todos/1')
//       .then(function(res) {
//         console.log('Data downloaded from url', res.data);
//       });
//   }
// );

/**
 * Sử dụng async await kết hợp với Promise để viết lại đoạn code trên. Gợi ý: Viết lại 1 async function làm 2 việc trên và chạy thử
 */

var url = 'https://jsonplaceholder.typicode.com/todos/1';

// Create Promise & axios
function getDiskData() {
   return new Promise(function(resolve, reject) {
    fs.readFile('./data.json', { encoding : 'utf8'}, function(err, data) {
     // Returns a Promise object that is resolved with a given value
      return resolve(data);
    });
  })
}

function getUrlData() {
  return axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(function(res) {
    return res.data;
  });
}

async function run() {
 
  var diskData = await getDiskData();
  var urlData = await getUrlData();

  return  [diskData, urlData];
}

run().then(function(values){
  console.log(values);
}).catch(function(err) {
  console.log(err);
});
