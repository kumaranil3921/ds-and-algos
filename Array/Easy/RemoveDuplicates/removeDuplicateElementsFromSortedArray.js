// Brute Force
function remove_duplicate(arr, n) {
  //code here
  //code here
  let uniqArr = [];
  let j = 0;
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] != arr[i + 1]) {
      uniqArr[j] = arr[i];
      j++;
    }
  }
  uniqArr[j++] = arr[n - 1];
  for (let i = 0; i < j; i++) {
    arr[i] = uniqArr[i];
  }
  return j;
}

// Best/optimal Approach
function remove_duplicate(arr, n) {
  //code here
  let i = 0;
  for (let j = 1; j < n; j++) {
    if (arr[i] != arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
