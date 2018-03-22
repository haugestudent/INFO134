//object.addEventListener("load", foo());


var text = '{"entries":[' +
'{"Id":1,"plassering":"Nonneseter Sør","place":"Nonneseter South","adresse":"Lungegårdskaien","pris": 12,"tid_hverdag":"07:00-23:15","tid_lørdag":"07:00-23:15","tid_søndag":"07:00-23:15", "rullestol": "Ja" , "stellerom": "Nei" , "pissOnly": "Nei","lat": 60.388076, "long": 5.334937 },' +
'{"Id":2,"plassering":"Nonneseter Nord","place":"Nonneseter North","adresse":"Østre Strømkai","pris": 12,"tid_hverdag":"05:30-23:50","tid_lørdag":"07:00-23:15","tid_søndag":"Stengt", "rullestol": "Ja" , "stellerom": "Nei" , "pissOnly": "Nei","lat": 60.3884988, "long": 5.334079 },' +
'{"Id":3,"plassering":"Skyss Kundesenter","place":"Skyss Customer Service","adresse":"Østre Strømkai","pris": 12,"tid_hverdag":"09:00-17:00","tid_lørdag":"09:00-15:00","tid_søndag":"Stengt", "rullestol": "Ja" , "stellerom": "Nei" , "pissOnly": "Nei","lat": 60.388868, "long": 5.334079 },' +
'{"Id":4,"plassering":"Jernbanestasjonen","place":"Railway Station","adresse":"Strømgaten 4","pris": 10,"tid_hverdag":"07:00-23:00","tid_lørdag":"07:00-23:00","tid_søndag":"07:00-23:00", "rullestol": "Nei" , "stellerom": "Nei" , "pissOnly": "Nei","lat": 60.39041, "long": 5.332995 },' +
'{"Id":5,"plassering":"Mathallen","place":"Fish marked","adresse":"Strandkaien 3","pris": 10,"tid_hverdag":"09:00-23:00","tid_lørdag":"08:30-22:00","tid_søndag":"08:30-22:00", "rullestol": "Ja" , "stellerom": "Ja" , "pissOnly": "Nei","lat": 60.39041, "long": 5.324099 },' +
'{"Id":6,"plassering":"Strandkaiterminalen","place":"Strandkai boat terminal","adresse":"Strandkaien","pris": 10,"tid_hverdag":"08:00-18:00","tid_lørdag":"08:00-18:00","tid_søndag":"08:00-18:00", "rullestol": "Ja" , "stellerom": "Nei" , "pissOnly": "Nei","lat": 60.395432, "long": 5.321034 },' +
'{"Id":7,"plassering":"Bergen Kommune, Innbyggerservice","place":"Citizen Service Sentre","adresse":"Kaigaten 4","pris": 0,"tid_hverdag":"08:00-15:00","tid_lørdag":"Stengt","tid_søndag":"Stengt", "rullestol": "Ja" , "stellerom": "Nei" , "pissOnly": "Nei","lat": 60.3913929, "long": 5.326855 },' +
'{"Id":8,"plassering":"Bergen Storsenter","place":"Bergen Storsenter","adresse":"Strømgaten 8","pris": 10,"tid_hverdag":"09:00-21:00","tid_lørdag":"09:00-18:00","tid_søndag":"Stengt", "rullestol": "Ja" , "stellerom": "Ja" , "pissOnly": "Nei","lat": 60.3891794, "long": 5.3305793 },' +
'{"Id":9,"plassering":"Sundt Motehus","place":"Sundt Fashion House","adresse":"Torgalmenningen 14","pris": 10,"tid_hverdag":"09:00-21:00","tid_lørdag":"09:00-18:00","tid_søndag":"Stengt", "rullestol": "Ja" , "stellerom": "Ja" , "pissOnly": "Nei","lat": 60.392209, "long": 5.324011 },' +
'{"Id":10,"plassering":"Xhibition","place":"Xhibition","adresse":"Småstrandgaten 3","pris": 10,"tid_hverdag":"09:00-20:00","tid_lørdag":"09:00-18:00","tid_søndag":"Stengt", "rullestol": "Ja" , "stellerom": "Ja" , "pissOnly": "Nei","lat": 60.3928444, "long": 5.3239541 },' +
'{"Id":11,"plassering":"Galleriet","place":"Galleriet","adresse":"Torgalmenningen 8","pris": 10,"tid_hverdag":"09:00-21:00","tid_lørdag":"09:00-18:00","tid_søndag":"Stengt", "rullestol": "Ja" , "stellerom": "Ja" , "pissOnly": "Nei","lat": 60.3947371, "long": 5.3243561 },' +
'{"Id":12,"plassering":"Kløverhuset","place":"Kløverhuset","adresse":"Strandgaten 13-15","pris": 10,"tid_hverdag":"10:00-20:00","tid_lørdag":"10:00-18:00","tid_søndag":"Stengt", "rullestol": "Ja" , "stellerom": "Ja" , "pissOnly": "Nei","lat": 60.3944194, "long": 5.3205649 },' +
'{"Id":13,"plassering":"Bryggen Besøkssenter","place":"Bryggen Visitor Centre","adresse":"Jacobsfjorden Bryggen","pris": 0,"tid_hverdag":"09:00-18:00","tid_lørdag":"09:00-18:00","tid_søndag":"Stengt", "rullestol": "Ja" , "stellerom": "Nei" , "pissOnly": "Nei","lat": 60.3974108, "long": 5.313963 },' +
'{"Id":14,"plassering":"C. Sundtsgt","place":"C. Sundtsgt","adresse":"C. Sundtsgt","pris": 0,"tid_hverdag":"Hele døgnet","tid_lørdag":"Hele døgnet","tid_søndag":"Hele døgnet", "rullestol": "Nei" , "stellerom": "Nei" , "pissOnly": "Ja","lat": 60.397359, "long": 5.313963 },' +
'{"Id":15,"plassering":"Nordnes Skole","place":"Nordnes Skole","adresse":"Nordnesparken 3","pris": 0,"tid_hverdag":"Hele døgnet","tid_lørdag":"Hele døgnet","tid_søndag":"Hele døgnet", "rullestol":"Nei" , "stellerom": "Nei" , "pissOnly": "Ja", "lat": 60.397557, "long": 5.307858 }]}';


obj = JSON.parse(text);

function finnAlleToalett() {
  document.getElementById("toalett").innerHTML = "";

  // Lager en button for hver rad i entries
  for (i = 0; i < obj.entries.length; i++) {
    document.getElementById("toalett").innerHTML += obj.entries[i].Id + " " +  "<button class=\"link\" id =\"buttonId" + i + "\">" + obj.entries[i].plassering + "</button><br>";
  }
  for (var i = 0; i < obj.entries.length; ++i) {
      this["button"+i] = document.getElementById("buttonId" + i);
	  
  }
  visAlleDetaljer();
}

function finnStellerom() {
  document.getElementById("toalett").innerHTML = "";
	initMap();
  // Lager en button for hver rad i entries
  for (i = 0; i < obj.entries.length; i++) {
    if (obj.entries[i].stellerom=="Ja") {
    document.getElementById("toalett").innerHTML += obj.entries[i].Id + " " +  "<button class=\"link\" id =\"buttonId" + i + "\">" + obj.entries[i].plassering + "</button><br>";
   }
  }
  for (var i = 0; i < obj.entries.length; ++i) {
    if (obj.entries[i].stellerom=="Ja") {
      this["button"+i] = document.getElementById("buttonId" + i);
   }
  }
  for (i = 0; i < obj.entries.length; i++) {
    
	if (obj.entries[i].stellerom=="Ja") {
      visDetaljer(i);
	}
	else {
		pos[i].setMap(null);
	}
  }}

function finnRullestol() {
  document.getElementById("toalett").innerHTML = "";
initMap();
  // Lager en button for hver rad i entries
  for (i = 0; i < obj.entries.length; i++) {
    if (obj.entries[i].rullestol=="Ja") {
    document.getElementById("toalett").innerHTML += obj.entries[i].Id + " " +  "<button class=\"link\" id =\"buttonId" + i + "\">" + obj.entries[i].plassering + "</button><br>";
   }
  }
  for (var i = 0; i < obj.entries.length; ++i) {
    if (obj.entries[i].rullestol=="Ja") {
      this["button"+i] = document.getElementById("buttonId" + i);
   }
  }
  for (i = 0; i < obj.entries.length; i++) {
    if (obj.entries[i].rullestol=="Ja") {
      visDetaljer(i);
    }
	else {
		pos[i].setMap(null);
	}
  }
}

function finnPissoir() {
  document.getElementById("toalett").innerHTML = "";
initMap();
  // Lager en button for hver rad i entries
  for (i = 0; i < obj.entries.length; i++) {
    if (obj.entries[i].pissOnly=="Ja") {
    document.getElementById("toalett").innerHTML += obj.entries[i].Id + " " +  "<button class=\"link\" id =\"buttonId" + i + "\">" + obj.entries[i].plassering + "</button><br>";
   }
  }
  for (var i = 0; i < obj.entries.length; ++i) {
    if (obj.entries[i].pissOnly=="Ja") {
      this["button"+i] = document.getElementById("buttonId" + i);
   }
  }
  for (i = 0; i < obj.entries.length; i++) {
    if (obj.entries[i].pissOnly=="Ja") {
      visDetaljer(i);
    }
	else {
		pos[i].setMap(null);
	}
  }
}



function visKlokke() {
var d = new Date();
var h = d.getHours();
var m = (d.getMinutes()<10?'0':'') + d.getMinutes();
var s = (d.getSeconds()<10?'0':'') + d.getSeconds();
var t = setTimeout(visKlokke, 500);

document.getElementById("klokke").innerHTML = "Klokken er nå: " + h + ":" + m + ":" + s;

}


// Viser detaljer til element 'u'
function visDetaljer(u) {
  this["button"+u].onclick = function() {
    document.getElementById("detaljer").innerHTML = "<div id=\"storSkrift\">" + obj.entries[u].plassering + "<br><br></div>Adresse: " 
	+ obj.entries[u].adresse + "<br><br>Pris: " + obj.entries[u].pris + "<br><br> <b>Åpningstider:</b> <hr>Hverdager: " + obj.entries[u].tid_hverdag 
	+ "<br>Lørdager " + obj.entries[u].tid_lørdag + "<br>Søndager:  " + obj.entries[u].tid_søndag + "<hr>Egnet for rullestol: " + obj.entries[u].rullestol 
	+ "<br>Stellerom: " + obj.entries[u].stellerom + "<br> Kun pissoir: " + obj.entries[u].pissOnly;

  };
}
function visAlleDetaljer() {
//Vis detaljer på alle elementene
for ( var i = 0; i < obj.entries.length; i++ ) {
  visDetaljer(i);
  initMap();
}
}


function foo() {
  alert("bar");
}

function visSok() {
	var sokeStreng = window.location.href;
	var sok = "html?";
	var treff = sokeStreng.search("html?");
	var res = sokeStreng.substring(treff+5);
	var separat = res.split('&'); 
	console.log(separat[0]);
	console.log(separat[1]);
	console.log(separat[2]);
	console.log(separat[3]);
	console.log(separat[4]);
	
}
