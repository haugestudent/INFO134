//xmlhttp = new XMLHttpRequest();
//xmlhttp.open("GET",toalett.txt,false);
//xmlhttp.send();
//var text2 = xmlhttp.responseText;


var pos = [];
var senter = {lat: 60.394, lng: 5.321};
var sted = [];
var obj = JSON.parse(text);
var info = [];

function initMap() {
   var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13.8,
          center: senter
        });

		for (i=0; i<obj.entries.length; i++) {
			info[i] = "pris: " + obj.entries[i].pris.toString(),			// legger pris som en infoverdi, f.eks. for museklikk
			sted[i] = {lat: obj.entries[i].lat, lng: obj.entries[i].long};	// legger koord i variabel så de kan benyttes senere også ved søk
			pos [i] = new google.maps.Marker({
			position: sted[i],
			label: obj.entries[i].Id.toString() ,
			map: map,
			title: obj.entries[i].plassering + " / " + obj.entries[i].place	+ " (" +obj.entries[i].Adresse + ")" // setter tittel tilsvarende verdi i Id, vises ved mouseover
			});
	}
}

function visTid() {
    var ukedag = ["ingen", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag", "Søndag"];
	var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
	var d = today.getDay();
    m = sjekkTid(m);
    s = sjekkTid(s);
    document.getElementById('klokke').innerHTML =
    "Klokken er nå: " + h + ":" + m + ":" + s + " " + ukedag[d];
    var t = setTimeout(visTid, 500);
}
function sjekkTid(i) {
    if (i < 10) {i = "0" + i};  // legger 0 foran alle enkeltsiffer
    return i;
}
