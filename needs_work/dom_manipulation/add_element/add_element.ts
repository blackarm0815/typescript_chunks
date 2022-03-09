// dropdown
var output = document.getElementById("output");
var select = document.createElement("select");
var optionList = [];
var optionElement;
optionList.push(["Power - Average","powerAverage",false]);
optionList.push(["Power - Maximum","powerMaximum",false]);
optionList.push(["Slot availability","slotAvailability",true]);
optionList.forEach(function(option){
	optionElement = document.createElement("option");
	optionElement.text = option[0];
	optionElement.value = option[1];
	optionElement.disabled = option[2];
	select.appendChild(optionElement);
});
output.appendChild(select);

// header
var output = document.getElementById("output");
var header = document.createElement("h1");
var text = document.createTextNode("hello world");
header.appendChild(text);
output.appendChild(header);

// hyperlink
var output = document.getElementById("output");
var anchor = document.createElement("a");
anchor.setAttribute("href","yourlink.htm");
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
// @ts-ignore
var output: HTMLElement;
var textNode: Text;
var linebreak: HTMLBRElement;
output = document.getElementById("output");
textNode = document.createTextNode("text here");
linebreak = document.createElement("br");
output.appendChild(textNode);
output.appendChild(linebreak);
