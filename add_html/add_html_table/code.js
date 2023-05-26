"use strict";
var createTable = function (divName, dataHeader, dataContent) {
    var cell;
    var row;
    var table;
    var tbody;
    var text;
    var th;
    var thead;
    var div = document.getElementById(divName);
    if (div) {
        // delete previous content
        while (div.firstChild) {
            div.removeChild(div.firstChild);
        }
        table = document.createElement('table');
        thead = table.createTHead();
        row = thead.insertRow();
        dataHeader.forEach(function (header) {
            th = document.createElement('th');
            text = document.createTextNode(header);
            th.appendChild(text);
            row.appendChild(th);
        });
        tbody = document.createElement('tbody');
        dataContent.forEach(function (rowContent) {
            row = tbody.insertRow();
            rowContent.forEach(function (cellData) {
                cell = row.insertCell();
                cell.style.backgroundColor = 'rgb(255,229.5,127.5)';
                text = document.createTextNode(cellData);
                cell.appendChild(text);
                row.appendChild(cell);
            });
        });
        table.appendChild(tbody);
        div.appendChild(table);
    }
};
var dataHeader = ['header1', 'header2', 'header3'];
var dataContent = [
    ['alpha1', 'bravo1', 'charlie1'],
    ['alpha2', 'bravo2', 'charlie1'],
];
createTable('target', dataHeader, dataContent);
