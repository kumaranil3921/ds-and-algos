function pattern11(n) {
  let x = 1;
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      x = 1;
    } else {
      x = 0;
    }
    for (let j = 0; j <= i; j++) {
      process.stdout.write(`${x}`);
      x = 1 - x;
    }
    process.stdout.write(`\n`);
  }
}
pattern11(5);
