function doStuff() {

}

let targetDiv: HTMLElement | null;
targetDiv = document.getElementById('changeState');
if (targetDiv !== null) {
	targetDiv.addEventListener('change', doStuff, false);
}