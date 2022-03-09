function hslToRgb(hue, saturation, light) {
	var red: number;
	var green: number;
	var blue: number;
	var p: number;
	var q: number;
	if (saturation == 0) {
		red = green = blue = light;
	}
	else {
		function hue2rgb(p, q, t) {
			if (t < 0) t += 1;
			if (t > 1) t -= 1;
			if (t < 1/6) return p + (q - p) * 6 * t;
			if (t < 1/2) return q;
			if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
			return p;
		}
		q = light < 0.5 ? light * (1 + saturation) : light + saturation - light * saturation;
		p = 2 * light - q;
		red = hue2rgb(p, q, hue + 1/3);
		green = hue2rgb(p, q, hue);
		blue = hue2rgb(p, q, hue - 1/3);
	}
	return [ red * 255, green * 255, blue * 255 ];
}
function createImage() {
	var canvas = <HTMLCanvasElement>document.getElementById("viewport");
	let colors: Array<number> = [];
	let colorVal: number;
	let blackToWhite: number;
	if (canvas !== null) {
		var context = canvas.getContext("2d");
		var width = canvas.width;
		var height = canvas.height;
		var imagedata = context.createImageData(width, height);
		for (var x = 0; x < width; x ++) {
			for (var y = 0; y < height; y ++) {
				colorVal = x / width;
				blackToWhite = (y / height);
				colors = hslToRgb(colorVal, 1.0, blackToWhite);
				var pixelindex = (y * width + x) * 4;
				imagedata.data[pixelindex] = colors[0];
				imagedata.data[pixelindex+1] = colors[1];
				imagedata.data[pixelindex+2] = colors[2];
				imagedata.data[pixelindex+3] = 255;
			}
		}
		context.putImageData(imagedata, 0, 0);
	}
}
function pageDivDimensions() {
	let divElement: HTMLElement | null;
	let pageWidth: number;
	let pageHeight: number;
	pageWidth = window.innerWidth;
	pageHeight = window.innerHeight;
	divElement = document.getElementById("viewport");
	if (divElement) {
		divElement.style.left = (0) + "px";
		divElement.style.top = (0) + "px";
		divElement.style.width = (pageWidth - 20) + "px";
		divElement.style.height = (pageHeight - 20) + "px";
	}
}

window.onload = function() {
	window.addEventListener("resize", pageDivDimensions);
	pageDivDimensions();
	createImage();
}

