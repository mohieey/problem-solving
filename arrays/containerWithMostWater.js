/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let leftPointer = 0;
  let rightPointer = height.length - 1;
  let maxArea = 0;
  while (rightPointer - leftPointer > 0) {
    let leftHeight = height[leftPointer];
    let rightHeight = height[rightPointer];

    h = Math.min(leftHeight, rightHeight);
    w = rightPointer - leftPointer;
    let area = h * w;

    maxArea = Math.max(maxArea, area);

    if (leftHeight < rightHeight) {
      leftPointer++;
    } else {
      rightPointer--;
    }
  }

  return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
console.log(maxArea([1]));
console.log(maxArea([]));
