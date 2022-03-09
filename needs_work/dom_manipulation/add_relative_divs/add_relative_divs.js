var colorString;
var divMain;
var divOuter;
var divInner;
var red;
var green;
divMain = document.getElementById('main');
for (var countOuter = 0; countOuter < 20; countOuter += 1) {
    divOuter = document.createElement('div');
    divOuter.id = 'outer' + countOuter;
    divOuter.className = 'outer';
    divMain.appendChild(divOuter);
    for (var x = 0; x < 11; x += 1) {
        for (var y = 0; y < 11; y += 1) {
            red = 150 + (105 / 8 * x);
            green = 150 + (105 / 8 * y);
            colorString = 'rgb(' + red + ',' + green + ',255)';
            divInner = document.createElement('div');
            divInner.id = countOuter + '_' + x + '_' + y;
            divInner.className = 'inner';
            divInner.style.position = 'absolute';
            divInner.style.left = (30 * (x + 1)) + 'px';
            divInner.style.top = (30 * (y + 1)) + 'px';
            divInner.style.width = '20px';
            divInner.style.height = '20px';
            divInner.style.backgroundColor = colorString;
            divOuter.appendChild(divInner);
        }
    }
}
