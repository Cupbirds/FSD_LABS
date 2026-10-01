function abs(...args) {
  if (args.length === 0) {
    return 0;
  }
  if (args.length === 1) {
    return Math.abs(args[0]);
  }
  let result = [];
  for (let i = 0; i < args.length; i++) {
    result.push(Math.abs(args[i]));
  }
  return result;
}

function ceil(...args) {
  if (args.length === 0) {
    return 0;
  }
  if (args.length === 1) {
    return Math.ceil(args[0]);
  }
  let result = [];
  for (let i = 0; i < args.length; i++) {
    result.push(Math.ceil(args[i]));
  }
  return result;
}

function floor(...args) {
  if (args.length === 0) {
    return 0;
  }
  if (args.length === 1) {
    return Math.floor(args[0]);
  }
  let result = [];
  for (let i = 0; i < args.length; i++) {
    result.push(Math.floor(args[i]));
  }
  return result;
}

console.log(abs(-5.5));          // 5.5
console.log(abs(-3, 4, -7));     // [3, 4, 7]
console.log(ceil(4.1));          // 5
console.log(ceil(4.1, 7.9));     // [5, 8]
console.log(floor(4.9));         // 4
console.log(floor(4.9, 7.2));    // [4, 7]
console.log(floor());            // 0