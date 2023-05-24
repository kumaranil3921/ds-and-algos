function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  const last = fibonacci(n - 1);
  const slast = fibonacci(n - 2);
  return last + slast;
}
console.log(fibonacci(4));
