
var pos = [];
var senter = {lat: 60.394, lng: 5.322};
var sted = [];
var info = [];
var markert = [];
for (i=0; i<obj.entries.length; i++) {
	markert[i]=1;
}
	function initMap() {
	var kart = new google.maps.Map(document.getElementById('map'), {
          zoom: 14.3,
          center: senter
        });

		for (i=0; i<obj.entries.length; i++) {
			if (markert[i]==1) {
				putOnMap(i);
			}
		}
	
	function putOnMap(i) {
		
		sted[i] = {lat: obj.entries[i].lat, lng: obj.entries[i].long};	// legger koord i variabel så de kan benyttes senere også ved søk
		pos[i] = new google.maps.Marker({
											position: sted[i],
											label: obj.entries[i].Id.toString() ,
											map: kart,
											title: obj.entries[i].plassering + " / " + obj.entries[i].place	
											// setter tittel tilsvarende verdi i Id, vises ved mouseover
										}); // slutt på marker-objektet
	//	pos[i].setMap(map);
		if ((i<4)||(i>8)) {pos[i].setMap(null);}	// test for å fjerne markers fra kartet ##funker herfra, men ikke fra HTML eller separat.js
	}
}
