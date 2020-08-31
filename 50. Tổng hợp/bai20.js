/*
Hãy viết một hàm để tìm giá trị lớn nhất có thể đạt được 
của hiệu 2 số bất kì trong dãy số

Input: là một dãy số.
Output: giá trị lớn nhất có thể đạt được của hiệu 2 số bất kì trong dãy số.

Ví dụ:

Input: [1, 2, 3, 8, 9]
Output: 8 (là hiệu của 9 và 1)

*/

function findmaxDiff(arr){
    // Viết code tại đây
    var newArr = [];
    var result = 0;
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0 + 1; j < arr.length; j++) {
        result = Math.abs(arr[i] - arr[j]);
        newArr.push(result);
      }
    }
    var max = newArr[0];
    
    for (var k = 0; k < newArr.length; k++) {
      if (max < newArr[k]) {
        max = newArr[k];
      }
    }
    return max;
  }