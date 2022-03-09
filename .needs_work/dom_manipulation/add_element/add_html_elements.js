var optionElement;
var optionList = [];
var output;
var select;
output = document.getElementById("output");
if (output !== null) {
	select = document.createElement("select");
	optionList.push({
		displayText: "Power - Average",
		valueText: "powerAverage",
		disabled: false
	});
	optionList.push({
		displayText: "Power - Maximum",
		valueText: "powerMaximum",
		disabled: false
	});
	for (var _i = 0, optionList_1 = optionList; _i < optionList_1.length; _i++) {
		var option = optionList_1[_i];
		optionElement = document.createElement("option");
		optionElement.text = option['displayText'];
		optionElement.value = option['valueText'];
		optionElement.disabled = option['disabled'];
		select.appendChild(optionElement);
	}
	output.appendChild(select);
}
// header
var output = document.getElementById("output");
var header = document.createElement("h1");
var text = document.createTextNode("hello world");
header.appendChild(text);
output.appendChild(header);
// hyperlink
var output = document.getElementById("output");
var anchor = document.createElement("a");
anchor.setAttribute("href", "yourlink.htm");
anchor.innerText = "link text";
output.appendChild(anchor);
// pre
var output = document.getElementById("output");
var output = document.createElement("PRE");
var linebreak = document.createElement("br");
var textNode = document.createTextNode(JSON.stringify(['test'], null, 2));
output.appendChild(textNode);
output.appendChild(output);
// text
var output = document.getElementById("output");
var textNode = document.createTextNode('pretty');
var linebreak = document.createElement("br");
output.appendChild(textNode);
output.appendChild(linebreak);
