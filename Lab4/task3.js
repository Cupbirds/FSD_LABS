/**
 * Function takes array of numbers and returns
 * @param {array of numbers} numbers
 * @returns string in following format: "(123) 456-7890"
 */
function createPhoneNumber(numbers) {
  let area = "" + numbers[0] + numbers[1] + numbers[2];
  let prefix = "" + numbers[3] + numbers[4] + numbers[5];
  let line = "" + numbers[6] + numbers[7] + numbers[8] + numbers[9];

  return "(" + area + ") " + prefix + "-" + line;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
// => "(123) 456-7890"