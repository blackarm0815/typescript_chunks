interface InputData {
  name: string;
  score: number;
}
const input: Record<string, InputData> = {
  sdlkfjsd: {
    name: 'alpha',
    score: 20,
  },
  ewrwerwe: {
    name: 'bravo',
    score: 10,
  },
};
console.log('input');
console.log(input);
console.log('');
//
const keyAndName = Object.keys(input).map((key) => [key, input[key].name]);
console.log('keyAndName');
console.log(keyAndName);
console.log('');
//
const sortedNameForwards = keyAndName.sort((curr, next) => (curr[1] < next[1] ? -1 : 1));
console.log('sortedNameForwards');
console.log(sortedNameForwards);
console.log('');
//
const sortedNameBackwards = keyAndName.sort((curr, next) => (curr[1] > next[1] ? -1 : 1));
console.log('sortedNameBackwards');
console.log(sortedNameBackwards);
console.log('');
//
const keyAndNumber = Object.keys(input).map((key) => [key, input[key].score]);
console.log('keyAndNumber');
console.log(keyAndNumber);
console.log('');
//
const sortedNumberForward = keyAndNumber.sort((curr, next) => <number>curr[1] - <number>next[1]);
console.log('sortedNumberForward');
console.log(sortedNumberForward);
console.log('');
//
const sortedNumberBackwards = keyAndNumber.sort((curr, next) => <number>next[1] - <number>curr[1]);
console.log('sortedNumberBackwards');
console.log(sortedNumberBackwards);
console.log('');
