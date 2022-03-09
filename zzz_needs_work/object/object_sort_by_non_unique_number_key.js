var groupedByNumber = {};
var numberString;
var sortedArrayOfNumbers = [];
var sortedKeys = [];
var input = {
    'key00001': '1',
    'key00002': '1',
    'key00003': '2',
    'key00004': '1',
    'key00005': '4',
    'key00006': '1',
    'key00007': '3',
    'key00008': '2',
    'key00009': '1'
};
for (var key in input) {
    numberString = input[key];
    if (!groupedByNumber.hasOwnProperty(numberString)) {
        groupedByNumber[numberString] = [];
    }
    groupedByNumber[numberString].push(key);
}
sortedArrayOfNumbers = Object.keys(groupedByNumber);
sortedArrayOfNumbers = sortedArrayOfNumbers.sort(function (a, b) { return parseInt(a) - parseInt(b); });
//
console.log('');
console.log('input');
console.log(input);
console.log('');
console.log('groupedByNumber');
console.log(groupedByNumber);
console.log('');
console.log('sortedArrayOfNumbers');
console.log(sortedArrayOfNumbers);
console.log('');
console.log('result');
console.log('');
//
for (var _i = 0, sortedArrayOfNumbers_1 = sortedArrayOfNumbers; _i < sortedArrayOfNumbers_1.length; _i++) {
    var sortedNumber = sortedArrayOfNumbers_1[_i];
    console.log(sortedNumber);
    sortedKeys = groupedByNumber[sortedNumber];
    sortedKeys = sortedKeys.sort();
    for (var _a = 0, sortedKeys_1 = sortedKeys; _a < sortedKeys_1.length; _a++) {
        var key = sortedKeys_1[_a];
        console.log('  - ' + key);
    }
}
console.log('');
