// Average
function print2largest(arr, n) {
  //code here
  let largest = arr[0];
  for (let i = 1; i < n; i++) {
    if (largest < arr[i]) {
      largest = arr[i];
    }
  }
  let sLargest = -1;
  for (let j = 0; j < n; j++) {
    if (arr[j] > sLargest && arr[j] < largest) {
      sLargest = arr[j];
    }
  }
  return sLargest;
}
// Optimal/Best solution

function print2largest(arr, n) {
  //code here
  let largest = arr[0];
  let sLargest = -1;
  for (let i = 1; i < n; i++) {
    if (arr[i] > largest) {
      sLargest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > sLargest) {
      sLargest = arr[i];
    }
  }
  return sLargest;
}
