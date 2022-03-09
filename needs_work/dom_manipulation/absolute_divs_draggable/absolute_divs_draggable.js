function pageDivDimensions() {
	var border = 5;
	var divElement;
	var lineThickness = 3;
	var pageHeight;
	var pageWidth;
	var topElement;
	var topDivUnder;
	var rect;
	pageWidth = window.innerWidth;
	pageHeight = window.innerHeight;
	topElement = document.getElementById("top");
	topDivUnder = 0;
	if (topElement) {
		rect = topElement.getBoundingClientRect();
		topDivUnder = rect.top + rect.height + border;
	}
	// alpha
	divElement = document.getElementById("alpha");
	if (divElement) {
		divElement.style.left = border + "px";
		divElement.style.top = topDivUnder + "px";
		divElement.style.width = (dragHorizontalPosition - (lineThickness * 0.5) - (border * 2)) + "px";
		divElement.style.height = (pageHeight - topDivUnder - (border * 2)) + "px";
	}
	// bravo
	divElement = document.getElementById("bravo");
	if (divElement) {
		divElement.style.left = (dragHorizontalPosition + border + (lineThickness * 0.5)) + "px";
		divElement.style.top = topDivUnder + "px";
		divElement.style.width = (pageWidth - dragHorizontalPosition - (border * 2) - (lineThickness * 0.5)) + "px";
		divElement.style.height = (pageHeight - topDivUnder - (border * 2)) + "px";
	}
	// horizontalDrag
	divElement = document.getElementById("horizontalDrag");
	if (divElement) {
		divElement.style.left = (dragHorizontalPosition - (lineThickness * 0.5)) + "px";
		divElement.style.top = topDivUnder + "px";
		divElement.style.width = lineThickness + "px";
		divElement.style.height = (pageHeight - topDivUnder - (border * 2)) + "px";
	}
}
function dragSetup() {
	var dragHorizontal;
	dragHorizontal = document.getElementById("horizontalDrag");
	if (dragHorizontal) {
		dragHorizontal.addEventListener("mousedown", function (e) {
			document.addEventListener("mousemove", repositionDrag, false);
		}, false);
	}
	// deactivating drag actions when mouse button is released
	document.addEventListener("mouseup", function () {
		document.removeEventListener("mousemove", repositionDrag, false);
	}, false);
}
function repositionDrag(e) {
	dragHorizontalPosition = e.x;
	pageDivDimensions();
}
var dragHorizontalPosition = 200;
dragSetup();
window.addEventListener("resize", pageDivDimensions);
pageDivDimensions();
