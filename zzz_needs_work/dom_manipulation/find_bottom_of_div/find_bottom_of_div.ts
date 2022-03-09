
let divElement: HTMLElement | null;
let topDivUnder: number;
divElement = <HTMLElement>document.getElementById('top');
topDivUnder = 0;
if (divElement) {
	topDivUnder = divElement.offsetTop + divElement.getBoundingClientRect().height;
}