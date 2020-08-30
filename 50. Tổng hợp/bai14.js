/* Viết hàm toNextChar dùng để thay thế mọi ký tự trong một chuỗi 
thành ký tự theo sau nó trong bảng chữ cái. Ví dụ: "Hello" chuyển thành "Ifmmp"
// Tham số:
// - String: chuỗi nhập vào ban đầu.
*/
function toNextChar(str) {
    // viết code ở đây.	
    var codes = [];
    var char = '';
    var split = str.split('');
    for (var i = 0; i < split.length; i++) {
       var charCode = split[i].charCodeAt() + 1;
       codes.push(charCode);
      
    }
    for (var code of codes) {
       char += String.fromCharCode(code);
    }
    return char;
  }
  
  toNextChar('Hello');