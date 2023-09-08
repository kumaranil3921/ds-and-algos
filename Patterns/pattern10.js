function pattern1(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write(`*`);
    }
    process.stdout.write(`\n`);
  }
}
function pattern2(n) {
  for (let i = n - 1; i > 0; i--) {
    for (let j = i; j > 0; j--) {
      process.stdout.write(`*`);
    }
    process.stdout.write(`\n`);
  }
}
function pattern10_v1(n) {
  pattern1(n);
  pattern2(n);
}
pattern10_v1(5);

function pattern10_v2(n) {
  for (let i = 0; i < 2 * n; i++) {
    let stars = i;
    if (i > n) {
      stars = 2 * n - i;
    }
    for (let j = 0; j < stars; j++) {
      process.stdout.write(`*`);
    }
    process.stdout.write(`\n`);
  }
}
pattern10_v2(5);
