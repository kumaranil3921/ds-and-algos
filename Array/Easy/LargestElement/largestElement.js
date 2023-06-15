function printLargest(arr, n) {
  let largest = arr[0];
  for (let i = 1; i < n; i++) {
    if (largest < arr[i]) {
      largest = arr[i];
    }
  }
  return largest;
}
