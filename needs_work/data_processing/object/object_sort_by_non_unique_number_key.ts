let groupedByNumber: Record<string, Array<string>> = {};
let numberString: string;
let sortedArrayOfNumbers: Array<string> = [];
let sortedKeys: Array<string> = [];
const input: Record<string,string> = {
	'key00001' : '1',
	'key00002' : '1',
	'key00003' : '2',
	'key00004' : '1',
	'key00005' : '4',
	'key00006' : '1',
	'key00007' : '3',
	'key00008' : '2',
	'key00009' : '1'
}
for (const key in input) {
	numberString = input[key];
	if (!groupedByNumber.hasOwnProperty(numberString)) {
		groupedByNumber[numberString] = [];
	}
	groupedByNumber[numberString].push(key);
}
sortedArrayOfNumbers = Object.keys(groupedByNumber);
sortedArrayOfNumbers = sortedArrayOfNumbers.sort(function(a, b){return parseInt(a) - parseInt(b)});
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
for (const sortedNumber of sortedArrayOfNumbers) {
	console.log(sortedNumber);
	sortedKeys = groupedByNumber[sortedNumber];
	sortedKeys = sortedKeys.sort();
	for (const key of sortedKeys) {
		console.log('  - ' + key);
	}
}
console.log('');