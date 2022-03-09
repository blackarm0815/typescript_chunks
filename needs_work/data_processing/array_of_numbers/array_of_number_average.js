var input = [30, 24, 16];
var output = input.reduce(function (total, next) { return total + next; }, 0) / input.length;
console.log(input);
console.log(output);
