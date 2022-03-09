var people = [
    {
        name: 'Sarah',
        gender: 'female',
        age: 25
    },
    {
        name: 'Tom',
        gender: 'male',
        age: 18
    },
    {
        name: 'Tim',
        gender: 'male',
        age: 65
    },
    {
        name: 'Kim',
        gender: 'female',
        age: 58
    }
];
var average = people.reduce(function (total, next) { return total + next.age; }, 0) / people.length;
console.log(average);
