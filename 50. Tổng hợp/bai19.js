/*
Hãy viết một hàm để kiểm tra xem có thể sắp xếp các kí tự 
của 1 chuỗi String cho trước thành 1 chuỗi String cho trước khác không?

Input: 2 chuỗi String
Output: True hoặc False

ví dụ:

Input: abc cba
Output: True

Input: abx abb
Output: False
*/

function rearrangeChar(str1, str2) {
    // Viết code tại đây!
        var split1 = str1.split('');
        //console.log(split1);
        var split2 = str2.split('');
        var newStr1 = [];
         if(str1 === str2) {
            return true;
          }
          else {
            for (var i = 0; i <= split2.length; i++) {
              console.log(newStr1, i);
              for (var j = 0; j < split1.length; j++) {
                  if (split1[j] === split2[i]) {
                    newStr1.push(split1[j]);
                   }
              }
            }
            var rearrangeStr1 = '';
            for (var char of newStr1) {
               rearrangeStr1 += char;
            }
           
            console.log(rearrangeStr1);
            if (rearrangeStr1 === str2) {
              return true;
            }
            return false;
       }
    }
    
    
    //rearrangeChar('afaw','afaw');
    rearrangeChar('yhnbgt','hybtgn');
    
    
    
    
    