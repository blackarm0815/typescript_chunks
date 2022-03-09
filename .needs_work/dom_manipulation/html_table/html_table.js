function createTable(divName, dataHeader, dataContent) {
    var cell;
    var child;
    var div;
    var row;
    var table;
    var tbody;
    var text;
    var th;
    var thead;
    div = document.getElementById(divName);
    if (div) {
        child = div.lastElementChild;
        while (child) {
            div.removeChild(child);
            child = div.lastElementChild;
        }
        table = document.createElement('table');
        thead = table.createTHead();
        row = thead.insertRow();
        for (var _i = 0, dataHeader_1 = dataHeader; _i < dataHeader_1.length; _i++) {
            var header = dataHeader_1[_i];
            th = document.createElement("th");
            text = document.createTextNode(header);
            th.appendChild(text);
            row.appendChild(th);
        }
        tbody = document.createElement("tbody");
        for (var _a = 0, dataContent_1 = dataContent; _a < dataContent_1.length; _a++) {
            var rowContent = dataContent_1[_a];
            row = tbody.insertRow();
            for (var _b = 0, rowContent_1 = rowContent; _b < rowContent_1.length; _b++) {
                var cellData = rowContent_1[_b];
                cell = row.insertCell();
                cell.style.backgroundColor = "rgb(255,229.5,127.5)";
                text = document.createTextNode(cellData);
                cell.appendChild(text);
                row.appendChild(cell);
            }
        }
        table.appendChild(tbody);
        div.appendChild(table);
    }
}
var dataHeader = ["header1", "header2", "header3"];
var dataContent = [
    ["alpha1", "bravo1", "charlie1"],
    ["alpha2", "bravo2", "charlie1"]
];
createTable("target", dataHeader, dataContent);
