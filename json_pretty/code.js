"use strict";
var data = { alpha: 0, bravo: 1 };
var pretty = JSON.stringify(data, null, 2);
var preformat = document.getElementById('preformat');
if (preformat !== null) {
    preformat.innerHTML = pretty;
}
