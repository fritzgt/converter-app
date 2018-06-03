//Miles to KM converter

//Function 

function mEquation() {
	var miles = .62;
	var x = document.getElementById("mInput").value;
    var totalMiles = miles * x;
    document.getElementById("kInput").value = totalMiles;
}

function kEquation() {
	var kilometers = 1.60;
	var x = document.getElementById("kInput").value;
    var totalMiles = x * kilometers;
    var n = totalMiles.toFixed(2);
    document.getElementById("mInput").value = n;
}

function refreshFunc() {
    document.getElementById('mInput').value = '';
    document.getElementById('kInput').value = '';
}