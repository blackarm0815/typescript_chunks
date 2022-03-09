const people = [{name:'Sarah', gender:'female', age:25}, {name:'Tom', gender:'male', age:18}, {name:'Kim', gender:'female', age:58}];
var max = Math.max(...people.map(thing => thing.age), 0);

console.log(people)
console.log(max)

// ... is a spread operator
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax