var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var people = [{ name: 'Sarah', gender: 'female', age: 25 }, { name: 'Tom', gender: 'male', age: 18 }, { name: 'Kim', gender: 'female', age: 58 }];
var max = Math.max.apply(Math, __spreadArrays(people.map(function (thing) { return thing.age; }), [0]));
console.log(people);
console.log(max);
// ... is a spread operator
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
