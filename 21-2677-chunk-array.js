/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
let chunk = function(arr, size) {
  const result = [];

  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};
