/* Write a function return maximum possible sum of some of its k consecutive numbers 
(numbers that follow each other in order.) of a given array of positive integers
*/

/*
 Hardest Question ---> Need to understand how it works
*/
function maxOfSumChain(arr,k){
    // write code here.
    let result = 0;
    let tempSum = 0;
    var i = 0;
  
    while( i < k - 1) {
      tempSum += arr[i];
      i++;
    }
    i = k - 1;
  
    while( i < arr.length ) {
      tempSum += arr[i];
      if(tempSum > result) {
        result = tempSum;
      }
      tempSum -= arr[i - k + 1];
      i++;
    }
    return result;
  }