// GENERELL FUNKSJON SOM HENTER JSON og SOM KAN BRUKES TIL ALLE DELENE SOM BRUKER JSON-DATA
var vis = [];		// oppdateres for å "sile ut" data som skal vises
for (j=0; j<100; j++) { if ((j%1==0)&&(j!=0)) { vis[j]=true;} }
var map;
var url = "https://hotell.difi.no/api/json/bergen/lekeplasser?";	// URL for JSON-ressurs som skal brukes
var myLatLng = {lat: 60.4020, lng: 5.358}; // setter senter av kartet

	// Initiering av kartet
	function initMap() {
		map = new google.maps.Map(document.getElementById('map'), {
		zoom: 11.4,
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

	// setter en marker med valgt ikon på kartet (f.eks. favoritt eller senter)
	function setSpecialMarker(coordinate, ID, icon) {
		var lab = ID.toString();
		var marker = new google.maps.Marker({
		position: coordinate,
		map: map,
		label: lab,
		icon: icon,
		});
	}


	function sokOgMarker (data, sokeobjekt) {
	}

	function settForVisning () {
	}


	// funksjon som legger til visning av ett element i listen
	function visListe(ID, navn) {
		document.getElementById("liste").innerHTML += "<button onclick=\"leggTilFavoritt(" + ID + ")\"class=\"link\" id =\"buttonId" + i + "\">" + ID + ' ' + navn;
    this["button"+i] = document.getElementById("buttonId" + i);

	}

	function leggTilFavoritt(id) {
		var navn;
		for (i = 0; i < data.entries.length; i++) {
			if (data.entries[i].id == id) {
				navn = data.entries[i+1].navn;
			}
		}

		document.getElementById("favorittlekeplass").innerHTML = "Din favorittlekeplass er: <br><br> "+ navn;
	}


	// Finner avstand mellom to koordinater i kilometer, parametre: lat+long, returnerer avstand med 1 desimal
	function distance(latitude1, longitude1, latitude2, longitude2) {
	var radlat1 = Math.PI * latitude1/180
	var radlat2 = Math.PI * latitude2/180
	var theta = longitude1-longitude2;
	var radtheta = Math.PI * theta/180
	var avstand = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
	avstand = Math.acos(avstand);
	avstand = avstand * 180/Math.PI;
	avstand = avstand * 60 * 1.1515;
	avstand = avstand * 1.609344;
	return avstand;
}

function lagSokeObjekt(sokestreng) {
    var obj = "{<br>"; // setter START av objekt
    var res = sokestreng.split(" ");
    for (i=0; i<res.length; i++) {
		if (res[i].includes(":")) {
			obj += res[i]+",<br>";
		}
		else {
			obj +="fritekst:" +res[i]+",<br>"
		}
	}
	obj += "}"; // setter SLUTT AV objekt
	return obj;
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
	// funksjon som får tekst hentet fra nett til JSON-objekt og går igjennom denne
	// og viser på listen ved bruk av egne funksjoner (visListe) og på kart (setMarker)
	lesTekst(url, function(tekst){
		if (IsJsonString(tekst)) {
			data = JSON.parse(tekst);
			var teller = 1;
			setSpecialMarker(myLatLng, "", "media/user_location.png");
			for (i=0; i<data.entries.length; i++) {
				if (vis[i]==true) {
					var longit = Number(data.entries[i].longitude);
					var latit = Number(data.entries[i].latitude);
					var coordinate = {lat: latit, lng: longit};
					var avstandTilSenter = distance(60.4020, 5.358, latit, longit, "K");
					setMarker(coordinate, teller);
					visListe(teller, data.entries[i].navn);
					teller++;
				}
			}
		}
		else {	// NOT JSON
		}
	});
} // **** Hovedfunksjon SLUTT ****
