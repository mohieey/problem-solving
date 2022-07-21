/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function (s) {
  s = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

  let left = 0,
    right = s.length - 1;

  while (right > left) {
    if (s[left] !== s[right]) return false;

    left++;
    right--;
  }

  return true;
};
var isPalindrome = function (s) {
  s = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

  let left = 0,
    right = s.length - 1;

  while (right > left) {
    if (s[left] !== s[right]) return false;

    left++;
    right--;
  }

  return true;
};

var validPalindrome = function (s) {
  s = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  let sReversed = s.split("").reverse().join("");

  let p1 = 0,
    p2 = 0,
    removedAChar = false;

  while (p1 < s.length && p2 < sReversed.length) {
    if (s[p1] !== sReversed[p2]) {
      s = s.slice(0, p1) + s.slice(p1 + 1);
      sReversed = sReversed.slice(0, p2) + sReversed.slice(p2 + 1);
      return isPalindrome(s) || isPalindrome(sReversed);
      break;
    }
    p1++;
    p2++;
  }
  return true;
};

console.log(validPalindrome("abc"));
