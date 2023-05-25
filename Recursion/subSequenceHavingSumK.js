function printS(i, arr, output, s, sum) {
  if (i == arr.length) {
    if (s === sum) {
      console.log(output);
    }
    return;
  }
  output.push(arr[i]);
  s += arr[i];
  printS(i + 1, arr, output, s, sum);
  output.pop();
  s -= arr[i];
  printS(i + 1, arr, output, s, sum);
}
