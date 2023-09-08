function pattern14(n) {
  for (let i = 0; i < n; i++) {
    let c = "A";
    for (let j = 0; j <= i; j++) {
      process.stdout.write(`${c}`);
      c = String.fromCharCode(c.charCodeAt(0) + 1);
    }
    process.stdout.write(`\n`);
  }
}
pattern14(5);
