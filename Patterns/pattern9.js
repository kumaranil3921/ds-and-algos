function pattern7(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      process.stdout.write(` `);
    }
    for (let k = 0; k < 2 * i + 1; k++) {
      process.stdout.write(`*`);
    }
    for (let j = 0; j < n - i - 1; j++) {
      process.stdout.write(` `);
    }
    process.stdout.write(`\n`);
  }
}

function pattern8(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      process.stdout.write(` `);
    }
    for (let k = 0; k < 2 * n - (2 * i + 1); k++) {
      process.stdout.write(`*`);
    }
    for (let j = 0; j < i; j++) {
      process.stdout.write(` `);
    }
    process.stdout.write(`\n`);
  }
}

function pattern9(n) {
  pattern7(n);
  pattern8(n);
}

pattern9(5);
