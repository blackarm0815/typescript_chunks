
try {

} 
catch (err) {
	// @ts-ignore
	gs.addErrorMessage('Error encountered in function getData. ', err );
	// @ts-ignore
	gs.error('Error - function getData failed for ' + gs.getUserName(), 'rack_view');
}