/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {

  function toBe(otherVal) {
      if (val !== otherVal) {
          throw new Error("Not Equal");
      }
      return true;
  }

  function notToBe(otherVal) {
      if (val === otherVal) {
          throw new Error("Equal");
      }
      return true;
  }

  return {
      toBe: toBe,
      notToBe: notToBe
  }
};

/**
* expect(5).toBe(5); // true
* expect(5).notToBe(5); // throws "Equal"
*/
