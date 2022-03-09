var input: Array<string> = ["apple","apricot","banana"];
var regex: RegExp = new RegExp('^ap');
for (const testString of input) {
	if (regex.test(testString)) {
		console.log(testString + ' matches');
	}
	else {
		console.log(testString + ' does not match');
	}
}
