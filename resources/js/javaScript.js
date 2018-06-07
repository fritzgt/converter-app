//Function KM to Miles
function mEquation() {
	var miles = .62;
	var k = document.getElementById("kInput").value;
    var totalMiles = miles * k;
    var m = totalMiles.toFixed(1); //Result shows only one decimal
    document.getElementById("mInput").value = m;
}

//Function Miles to KM 
function kEquation() {
	var kilometers = 1.60;
	var m = document.getElementById("mInput").value;
    var totalKm = m * kilometers; 
    var km = totalKm.toFixed(1); //Result shows only one decimal
    document.getElementById("kInput").value = km;
}

//Function Celsius to Fahrenheit
function fEquation() {
	var f = document.getElementById("mInput").value;
    var totalC = (f - 32) * 5/9;
    var c = totalC.toFixed(1); //Result shows only one decimal
    document.getElementById("kInput").value = c;
}

//Function Fahrenheit to Celsius
function cEquation() {
	var i = document.getElementById("kInput").value;
    var totalF = i * 9/5 + 32; 
    var f = totalF.toFixed(1); //Result shows only one decimal
    document.getElementById("mInput").value = f;
}

//Function liters to Gallons
function galEquation() {
	var gallon =  0.2641720524;
	var l = document.getElementById("kInput").value;
    var totalG = l * gallon;
    var g = totalG.toFixed(3); //Result shows only one decimal
    document.getElementById("mInput").value = g;
}

//Function Gallons to Liters
function litEquation() {
	var liter = 3.785411784; 
	var g = document.getElementById("mInput").value;
    var totalL = liter * g; 
    var l = totalL.toFixed(3); //Result shows only one decimal
    document.getElementById("kInput").value = l;

}

//Function kg to lb
function lbEquation() {
	var lb =  2.2046226218;
	var kg = document.getElementById("kInput").value;
    var totalLb = kg * lb;
    var l = totalLb.toFixed(3); //Result shows only one decimal
    document.getElementById("mInput").value = l;
}

//Function lb to kg
function kgEquation() {
	var kg = 0.45359237; 
	var lb = document.getElementById("mInput").value;
    var totalKg = lb * kg; 
    var k = totalKg.toFixed(3); //Result shows only one decimal
    document.getElementById("kInput").value = k;
}


//Function meter to feet
function feetEquation() {
	var feet =  3.28084;
	var meter = document.getElementById("kInput").value;
    var totalfeet = meter * feet;
    var f = totalfeet.toFixed(2); //Result shows only one decimal
    document.getElementById("mInput").value = f;
}

//Function feet to meter
function meterEquation() {
	var meter = 0.3048; 
	var feet = document.getElementById("mInput").value;
    var totalmeter = feet * meter; 
    var m = totalmeter.toFixed(2); //Result shows only one decimal
    document.getElementById("kInput").value = m;
}



//Clear input fields
function refreshFunc() {
    document.getElementById('mInput').value = '';
    document.getElementById('kInput').value = '';
}

// iOS webapp links

$(document).ready(function(){
    if (("standalone" in window.navigator) && window.navigator.standalone) {
      // For iOS Apps
      $('a').on('click', function(e){
        e.preventDefault();
        var new_location = $(this).attr('href');
        if (new_location != undefined && new_location.substr(0, 1) != '#' && $(this).attr('data-method') == undefined){
          window.location = new_location;
        }
      });
    }
  });



//Currency converter API


// set endpoint and your access key

// endpoint = 'live'
// access_key = 'ed2bc073eb4d6c41c090bd53da71e8ab';

// var from = $('#kInput').val();
// var to = $('#mInput').val();
// var combine = from+to;

// $.ajax({
//     url: 'http://apilayer.net/api/' + endpoint + '?access_key=' + access_key,   
//     dataType: 'jsonp',
//     success: function(json) {

//         // exchange rata data is stored in json.quotes
//         alert(json.quotes.USDGBP);
        
//         // source currency is stored in json.source
//         alert(json.source);
        
//         // timestamp can be accessed in json.timestamp
//         alert(json.timestamp);
        
//     }
// });

//http://apilayer.net/api/live?access_key=ed2bc073eb4d6c41c090bd53da71e8ab&currencies=EUR&format=1




