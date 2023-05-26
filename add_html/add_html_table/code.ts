const createTable = (
  divName: string,
  dataHeader: Array<string>,
  dataContent: Array<Array<string>>,
) => {
  let cell: HTMLTableCellElement;
  let row: HTMLTableRowElement;
  let table: HTMLTableElement;
  let tbody: HTMLTableSectionElement;
  let text: Text;
  let th: HTMLElement;
  let thead: HTMLTableSectionElement;
  const div = document.getElementById(divName);
  if (div) {
    // delete previous content
    while (div.firstChild) {
      div.removeChild(div.firstChild);
    }
    table = document.createElement('table');
    thead = table.createTHead();
    row = thead.insertRow();
    dataHeader.forEach((header) => {
      th = document.createElement('th');
      text = document.createTextNode(header);
      th.appendChild(text);
      row.appendChild(th);
    });
    tbody = document.createElement('tbody');
    dataContent.forEach((rowContent) => {
      row = tbody.insertRow();
      rowContent.forEach((cellData) => {
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
const dataHeader: Array<string> = ['header1', 'header2', 'header3'];
const dataContent: Array<Array<string>> = [
  ['alpha1', 'bravo1', 'charlie1'],
  ['alpha2', 'bravo2', 'charlie1'],
];
createTable('target', dataHeader, dataContent);
