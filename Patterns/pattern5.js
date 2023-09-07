function pattern5(n) {
  for (let i = n; i > 0; i--) {
    for (let j = i; j > 0; j--) {
      process.stdout.write(`*`);
    }
    process.stdout.write(`\n`);
  }
}

pattern5(5);
