function pageResizeDivs(delay: number) {
	let divElement: HTMLElement | null;
	let mainHeight: number;
	let mainWidth: number;
	let topDivBottom: number;
	let topDivLeft: number;
	setTimeout(function() {
		// find the height of the top div
		divElement = <HTMLElement>document.getElementById('top');
		if (divElement) {
			// calculate the max width of all divs
			mainWidth = window.innerWidth - 20;
			// resize width of top div
			divElement.style.width = mainWidth + 'px';
			// find the bottom edge of the top div
			topDivBottom = divElement.offsetTop + divElement.getBoundingClientRect().height;
			// find the left hand edge of the top div
			topDivLeft = divElement.offsetLeft;
			// calculate the height of the main div
			mainHeight = window.innerHeight - topDivBottom - 10;
			// resize main div
			divElement = document.getElementById('main');
			if (divElement) {
				divElement.style.top = topDivBottom + 'px';
				divElement.style.left = topDivLeft + 'px';
				divElement.style.width = mainWidth + 'px';
				divElement.style.height = mainHeight + 'px';
			}
		}
	}, delay);
}
function pageResize() {
	pageResizeDivs(100);
}

pageResizeDivs(100);
window.addEventListener('resize', pageResize)