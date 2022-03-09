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
	optionList.push({
		displayText: "You can't click this",
		valueText: "cantClick",
		disabled: true
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
