let n = 3;

function PrimeOrNot(n) {
  if (n <= 1) {
    return "Not Prime";
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return "Not Prime";
    }
  }
  return "Prime";
}

let PrimeCheck = PrimeOrNot(n);

console.log(`${n} is ${PrimeCheck}`);
