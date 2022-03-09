// dropdown
interface dropdownElement {
	displayText: string;
	valueText: string;
	disabled: boolean;
}
var optionElement: HTMLOptionElement;
var optionList: Array<dropdownElement> = [];
var output: HTMLElement | null;
var select: HTMLSelectElement;
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
	for (const option of optionList) {
	  optionElement = document.createElement("option");
	  optionElement.text = option['displayText'];
	  optionElement.value = option['valueText'];
	  optionElement.disabled = option['disabled'];
	  select.appendChild(optionElement);
	}
	output.appendChild(select);
}