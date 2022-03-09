function divCircle(parentDiv: HTMLElement, xPos: number, yPos: number, radius: number) {
	let left: number = xPos - radius;
	let top: number = yPos - radius;
	let diameter: number = radius * 2;
	let newDiv: HTMLElement;
	newDiv = document.createElement('div');
	newDiv.style.position = "absolute";
	newDiv.style.top = top.toString() + "px";
	newDiv.style.left = left.toString() + "px";
	newDiv.style.width = diameter.toString() + "px";
	newDiv.style.height = diameter.toString() + "px";
	newDiv.style.borderRadius = radius.toString() + "px";
	parentDiv.appendChild(newDiv);
	return newDiv;
}

let parentDiv: HTMLElement;
let circleDiv: HTMLElement;
parentDiv = document.getElementById('main');
if (parentDiv !== null) {
	circleDiv = divCircle(parentDiv, 200, 200, 150);
	circleDiv.style.backgroundColor = "rgb(255,100,0)";
}

