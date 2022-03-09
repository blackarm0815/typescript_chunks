let changeElement: HTMLElement;
let elementArray: Array<HTMLElement> = [];
elementArray = Array.prototype.slice.call(document.getElementsByClassName("delta"));
for (changeElement of elementArray){
	changeElement.style.fontSize = "20px"
}