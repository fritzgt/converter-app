//Miles to KM converter

//Function 

function mEquation() {
	var miles = .62;
	var x = document.getElementById("mInput").value;
    var totalMiles = miles * x;
    document.getElementById("kInput").placeholder = totalMiles;
}

function kEquation() {
	var kilometers = 1.60;
	var x = document.getElementById("kInput").value;
    var totalMiles = x * kilometers;
    document.getElementById("mInput").placeholder = totalMiles;
}

function refreshFunc() {
    document.getElementById('mInput').value = '';
    document.getElementById('kInput').value = '';
    document.getElementById('mInput').placeholder = 'Enter Miles';
    document.getElementById('kInput').placeholder = 'Enter KM';
}