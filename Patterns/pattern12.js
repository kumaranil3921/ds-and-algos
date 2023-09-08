function pattern12(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j < i + 1; j++) {
      process.stdout.write(`${j}`);
    }
    for (let j = 0; j < 2 * n - 2 * i; j++) {
      process.stdout.write(` `);
    }
    for (let j = i; j >= 1; j--) {
      process.stdout.write(`${j}`);
    }
    process.stdout.write(`\n`);
  }
}
pattern12(5);
