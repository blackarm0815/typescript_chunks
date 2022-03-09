var input = [30, 24, 16];
const output: number = input.reduce((total, next) => total + next, 0) / input.length;
console.log(input);
console.log(output);
