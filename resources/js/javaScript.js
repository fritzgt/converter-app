//Miles to KM converter

//Questions
var question = document.getElementById(type);

var myInput =  document.getElementById(ammount);



//Loop

// function mainFunc(yesNo) {

// 	var x = document.getElementById("mySelect").value;

// if (x === "miles"){

// alert("miles");
// mEquation();

// } else (x === "km"){

// alert("KM");
// kEquation();

// };

//Function 

function mEquation() {
	var miles = .62;
	var x = document.getElementById("mInput").value;
    var totalMiles = miles * x;
    document.getElementById("resultkm").innerHTML = totalMiles;
}

function kEquation() {
	var kilometers = 1.60;
	var x = document.getElementById("kInput").value;
    var totalMiles = x * kilometers;
    document.getElementById("resultMiles").innerHTML = totalMiles;
}