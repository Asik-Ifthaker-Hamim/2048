function mergeSort(array) {
  if (array.length < 2) return array;
  let mid = Math.floor(array.length / 2);
  let leftArray = array.slice(0, mid);
  let rightArray = array.slice(mid, array.length);
  return merge(mergeSort(leftArray), mergeSort(rightArray));
}
function merge(leftArray, rightArray) {
  let ans = [];
  while (leftArray.length && rightArray.length) {
    if (leftArray[0].score > rightArray[0].score) {
      ans.push(leftArray.shift());
    } else {
      ans.push(rightArray.shift());
    }
  }
  return [...ans, ...leftArray, ...rightArray];
}
