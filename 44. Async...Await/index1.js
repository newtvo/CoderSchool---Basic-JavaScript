const axios = require('axios');

// Giải thích điểm khác nhau giữa 1 và 2:
// 1. Dùng vòng lặp for để lấy dữ liệu 1-1, không có Promise
async function fetchUrls(urls) {
  const results = [];
  for (const url of urls) {
    const res = await axios.get(url);
    results.push(res);
  }
  return results;
}

// 2. Dùng hàm map và Promise All, có thể chạy mà không cần theo thứ tự của url cần đọc
async function fetchUrlsParallel(urls) {
  const results = await Promise.all(
    urls.map(function(url) {
      return axios.get(url);
    })
  );
  return results;
}

// Chạy thử 2 hàm trên với đầu vào dưới đây và so sánh tốc độ
// fetchUrlsParallel chạy nhanh hơn vì có promise.all và hàm map
const urls = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://jsonplaceholder.typicode.com/todos/3'
];

fetchUrls(urls).then(() => console.log('Done'));
fetchUrlsParallel(urls).then(() => console.log('Done 2'));