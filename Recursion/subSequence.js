function printSubSequences(i, arr, output) {
  if (i >= arr.length) {
    console.log(output);
    return;
  }
  output.push(arr[i]);
  printSubSequences(i + 1, arr, output);
  output.pop(arr[i]);
  printSubSequences(i + 1, arr, output);
}
// time complexity : 2<sup>n</sup> * n
// space complexity = O(n)
