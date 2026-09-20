const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a: ", (a) => {
  rl.question("Enter b: ", (b) => {
    function product(a, b) {
      return a * b;
    }

    console.log("Product =", product(Number(a), Number(b)));

    rl.close();
  });
});
