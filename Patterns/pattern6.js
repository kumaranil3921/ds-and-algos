function pattern6(n) {
  for (let i = n; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      process.stdout.write(`${j + 1}`);
    }
    process.stdout.write(`\n`);
  }
}

pattern6(5);
