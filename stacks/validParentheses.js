/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s === "" || s.length % 2 !== 0) return false;
  const left = "[{(",
    right = "]})",
    stack = [];

  for (const i in s) {
    if (left.includes(s[i])) stack.push(s[i]);
    else {
      if (left.indexOf(stack.pop()) !== right.indexOf(s[i])) return false;
    }
  }
  return stack.length ? true : false;
};

let s = "(]";
console.log(isValid(s));
