//npm - node package manager
var readlineSync = require('readline-sync');

// var userName = readlineSync.question('May I have your name? ');
// console.log('Hi ' + userName + '!');

// var languages = [];

// var language = readlineSync.question('What is your mother? ');
// languages.push(language)
// console.log(languages);

// var pet = {};

// var name = readlineSync.question('Your pet name: ');
// var gender = readlineSync.question('Pet gender (Male/Female): ');
// var weight = readlineSync.question('Weight?: ');

// pet.name = name;
// pet.gender = gender;
// pet.weight = weight;

// console.log(pet);


// var answer = readlineSync.question('Ai yêu pé Ni nhất ó? ');
// console.log( answer + ' chứ ai!!!!!!');

/**
 * 1. Check file package.json bạn sẽ thấy module password-generator nằm trong danh sách dependencies
 * 2. Đọc cách dùng module này dưới đây
 * https://www.npmjs.com/package/password-generator
 * 3. Tìm hiểu cách require một 3rd-party module trên repl.it: https://repl.it/site/blog/npm
 * 4. Require module này và tạo ra 1 password ngẫu nhiên có 8 ký tự, dạng dễ nhớ
 */

var passwordGenerator = require('password-generator');

var password = passwordGenerator(8, false, /[\w\d]/);

console.log(password);


