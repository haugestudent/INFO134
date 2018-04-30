// GENERELL FUNKSJON SOM HENTER JSON og SOM KAN BRUKES TIL ALLE DELENE SOM BRUKER JSON-DATA
var vis = [];		// oppdateres for å "sile ut" data som skal vises
for (j=0; j<100; j++) { vis[j]=true; } // setter initiell verdi for å vise alle elementer
var map;
var url = "https://hotell.difi.no/api/json/bergen/dokart?";	// URL for JSON-ressurs som skal brukes
var myLatLng = {lat: 60.3932950, lng: 5.325000}; // setter senter av kartet
	
	// Initiering av kartet
	function initMap() {
		map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		center: myLatLng
		});
	}
    
	// setter en Marker på kartet. @parametre: coordinate og ID (for label)
	function setMarker(coordinate, ID) {
		var lab = ID.toString();
		var marker = new google.maps.Marker({
		position: coordinate,
		map: map,
		label: lab,
		});
	}
	
	// funksjon som legger til visning av ett element i listen
	function visListe(ID, navn) {
		document.getElementById("liste").innerHTML += ID + ' ' + navn+"<br>";
	}

	function IsJsonString(str) {
		try {
			JSON.parse(str);
		} catch (e) {
			return false;
		}
		return true;
	}

	// *** Hovedfunksjon *** for henting av data og visning; kaller både visListe() og setMarker()
	function hentOgVis(url) {
		// egen funksjon som leser JSON fra nett
		function lesTekst(fil, callback) {
			var input = new XMLHttpRequest();
			input.overrideMimeType("application/json");
			input.open("GET", fil, true);
				input.onreadystatechange = function() {
					if (input.readyState === 4 && input.status == "200") {
						callback(input.responseText);
					}		
				}
			input.send();
	}
	// funksjon som gjør tekst hentet fra nett til JSON-objekt og går igjennom denne
	// og viser på listen ved bruk av egne funksjoner (visListe) og på kart (setMarker)
	lesTekst(url, function(tekst){
		if (IsJsonString(tekst)) { 	
			data = JSON.parse(tekst);
			var teller = 1;
			for (i=0; i<data.entries.length; i++) {
				if (vis[i]==true) {	
					var longit = Number(data.entries[i].longitude);
					var latit = Number(data.entries[i].latitude);
					var coordinate = {lat: latit, lng: longit};
					setMarker(coordinate, teller);
					visListe(teller, data.entries[i].plassering);
					teller++;
				}
			}
		}
		else {	// NOT JSON MELDING
		}
	});
} // **** Hovedfunksjon SLUTT ****