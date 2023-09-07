function pattern3(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write(`${j + 1}`);
    }
    process.stdout.write(`\n`);
  }
}

pattern3(5);
