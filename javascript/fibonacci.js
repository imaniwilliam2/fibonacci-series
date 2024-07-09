function fibonacci(num) {
  if (num === 0) {
    return 0;
  }

  if (num === 1) {
    return 1;
  }

  let a = 0;
  let b = 1;

  for (let i = 2; i <= num; i++) {
    let c = a + b;
    a = b;
    b = c;
  }

  return b;
}

// Tests
if (require.main === module) {
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;
