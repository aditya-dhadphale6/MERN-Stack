let n = 100;

function PrimesInRange(n) {
  for (let r = 1; r <= n; r++) {
    if (r <= 1) {
      console.log(`${r} is not prime`);
      continue;
    }

    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(r); i++) {
      if (r % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log(`${r} is prime`);
    } else {
      console.log(`${r} is not prime`);
    }
  }
}

PrimesInRange(n);
