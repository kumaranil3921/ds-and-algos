function pattern14(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      process.stdout.write(`${String.fromCharCode("A".charCodeAt(0) + j)}`);
    }
    process.stdout.write(`\n`);
  }
}
pattern14(5);
