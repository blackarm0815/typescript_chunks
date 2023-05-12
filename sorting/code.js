"use strict";
var input = {
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
var keyAndName = Object.keys(input).map(function (key) { return [key, input[key].name]; });
console.log('keyAndName');
console.log(keyAndName);
console.log('');
//
var sortedNameForwards = keyAndName.sort(function (curr, next) { return (curr[1] < next[1] ? -1 : 1); });
console.log('sortedNameForwards');
console.log(sortedNameForwards);
console.log('');
//
var sortedNameBackwards = keyAndName.sort(function (curr, next) { return (curr[1] > next[1] ? -1 : 1); });
console.log('sortedNameBackwards');
console.log(sortedNameBackwards);
console.log('');
//
var keyAndNumber = Object.keys(input).map(function (key) { return [key, input[key].score]; });
console.log('keyAndNumber');
console.log(keyAndNumber);
console.log('');
//
var sortedNumberForward = keyAndNumber.sort(function (curr, next) { return curr[1] - next[1]; });
console.log('sortedNumberForward');
console.log(sortedNumberForward);
console.log('');
//
var sortedNumberBackwards = keyAndNumber.sort(function (curr, next) { return next[1] - curr[1]; });
console.log('sortedNumberBackwards');
console.log(sortedNumberBackwards);
console.log('');
