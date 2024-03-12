/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

var map = function(arr, fn) {
  for(let i=0; i<arr.length; i++){
      arr[i]=fn(arr[i], i);
  }

  return arr;
};

// -----------------
// Faster solution:
// var map = function(arr, fn) {
//   const result = [];

//   for (const i in arr) {
//     result.push(fn(arr[i], Number(i)));
//   }
//   return result;
// };
