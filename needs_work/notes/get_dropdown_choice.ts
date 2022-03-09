let reportChosen: string;
let reportDropdown: HTMLSelectElement | null;
reportDropdown = <HTMLSelectElement>document.getElementById('reports');
if (reportDropdown !== null) {
	reportChosen = reportDropdown.value;
	if (reportChosen == 'blah'){
		//doStuff();
	}
	// reset to first option selected
	reportDropdown.selectedIndex = 0;
}