
interface Color {
	red: number;
	green: number;
	blue: number;
}
function spectrumGreenRed(numerator: number, denominator: number) {
	let decimalBlue: number;
	let decimalGreen: number;
	let decimalRed: number;
	let color: Color = {
		red: 1,
		green: 1,
		blue: 1
	}
	let decimal: number;
	let saturation: number;
	decimalBlue = 1;
	decimalGreen = 0;
	decimalRed = 0;
	saturation = 0.5;
	decimal = numerator / denominator;
	if (denominator == 0){
		decimal = 1;
	}
	if (decimal < 0) {
		decimal = 0;
	}
	if (decimal > 1) {
		decimal = 1;
	}
	// green to yellow
	if (decimal < 0.5) {
		decimalBlue = (1 - saturation);
		decimalGreen = 1;
		decimalRed = (1 - saturation) + (decimal / 0.5 * saturation);
	}
	// yellow to red
	if (decimal >= 0.5) {
		decimalBlue = (1 - saturation);
		decimalGreen = (1 - saturation) + (saturation - ((decimal - 0.5) / 0.5) * saturation);
		decimalRed = 1;
	}
	// max or over, hard red
	if (decimal >= 1.0) {
		decimalBlue = 0;
		decimalGreen = 0;
		decimalRed = 1;
	}
	color = {
		blue: Math.ceil(decimalBlue * 255),
		green: Math.ceil(decimalGreen * 255),
		red: Math.ceil(decimalRed * 255)
	}
	return(color);
}
function colorObjectToString(colorObject: Color){
	let colorString: string;
	colorString = 'rgb(' + colorObject['red'] + ',' + colorObject['green'] + ',' + colorObject['blue'] + ')';
	return(colorString);
}
