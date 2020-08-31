/* Hãy viết một hàm để tìm một số có số lần lặp lại nhiều nhất trong một dãy các số nguyên.

Input: dãy số
Output: 1 dãy số bao gồm các số có số lần lặp lại nhiều nhất

ví dụ:
Input: [1,2,3,4,1,2,2,1]
Output: [1,2]*/

function findMostFrequent(arr) {
    var temp = [];
    var result = [];
    var newArr = [];
    var maxFreq = 0;
    for (var i = 0; i < arr.length; i++) {
      var currFreq = 1;
     
      for (var j = i + 1; j < arr.length; j++) {
        if (arr[j] === arr[i]) {
          currFreq = currFreq + 1;
        }
      }
      console.log(maxFreq, currFreq);
      if (maxFreq <= currFreq) {
        maxFreq = currFreq;
        temp.push(maxFreq);
        result.push(arr[i]);
      }
    }
    for(var k = 0; k < temp.length; k++) {
      if (temp[k] < temp[k+1]) {
         newArr.push(result[k+1]);
         return newArr;
      }
      else if (temp[k] === temp[k+1]) {
        return result;
      }
      else {
        return result;
      }
    }
    console.log(temp, result, newArr);
  }