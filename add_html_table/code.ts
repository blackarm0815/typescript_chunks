function createTable(divName: string, dataHeader: Array<string>, dataContent: Array<Array<string>>) {
  let cell: HTMLTableCellElement;
  var child: Element | null;
  var div: HTMLElement | null;
  let row: HTMLTableRowElement;
  let table: HTMLTableElement;
  let tbody: HTMLTableSectionElement;
  let text: Text;
  let th: HTMLElement;
  let thead: HTMLTableSectionElement;
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
    for (const header of dataHeader){
      th = document.createElement('th');
      text = document.createTextNode(header);
      th.appendChild(text);
      row.appendChild(th);
    }
    tbody = document.createElement('tbody');
    for (const rowContent of dataContent){
      row = tbody.insertRow();
      for (const cellData of rowContent){
        cell = row.insertCell();
        cell.style.backgroundColor = 'rgb(255,229.5,127.5)';
        text = document.createTextNode(cellData);
        cell.appendChild(text);
        row.appendChild(cell);
      }
    }
    table.appendChild(tbody);
    div.appendChild(table);
  }
}
var dataHeader: Array<string> = ['header1', 'header2', 'header3'];
var dataContent: Array<Array<string>> = [
  ['alpha1', 'bravo1', 'charlie1'],
  ['alpha2', 'bravo2', 'charlie1'],
];
createTable('target', dataHeader, dataContent);
