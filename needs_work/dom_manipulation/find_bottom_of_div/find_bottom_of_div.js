var divElement;
var topDivUnder;
divElement = document.getElementById('top');
topDivUnder = 0;
if (divElement) {
    topDivUnder = divElement.offsetTop + divElement.getBoundingClientRect().height;
}
