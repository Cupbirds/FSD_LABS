function roundMe(...args) {
  if (args.length === 0) {
    return 0;
  }
  if (args.length === 1) {
    return Math.round(args[0]);
  }
  let result = [];
  for (let i = 0; i < args.length; i++) {
    result.push(Math.round(args[i]));
  }
  return result;
}

console.log(roundMe());          // 0
console.log(roundMe(4.7));       // 5
console.log(roundMe(4.7, 4.4));  // [5, 4]
