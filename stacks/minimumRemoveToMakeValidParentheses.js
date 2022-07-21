/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  s = s.split("");
  const left = [];

  for (let i in s) {
    if (s[i] === "(") left.push(i);
    else if (s[i] === ")" && left.length) left.pop();
    else if (s[i] === ")") s[i] = "";
  }

  left.forEach((i) => {
    s[i] = "";
  });

  return s.join("");
};

console.log(minRemoveToMakeValid("abc)(dd)(dfj)"));
