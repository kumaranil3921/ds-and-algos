function pattern12(n) {
  let c = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(`${c} `);
      c++;
    }
    process.stdout.write(`\n`);
  }
}
pattern12(5);
