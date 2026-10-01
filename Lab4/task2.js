// ================= TASK 2 =================

// Next prime after a given prime number
let givenPrime = 15;   // hardcoded, change to test other primes

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

let next = givenPrime + 1;
while (!isPrime(next)) {
  next++;
}

console.log("\n----- Next Prime -----");
console.log("Given prime: " + givenPrime);
console.log("Next prime: " + next);