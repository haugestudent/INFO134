// GENERELL FUNKSJON SOM HENTER JSON og SOM KAN BRUKES TIL ALLE DELENE SOM BRUKER JSON-DATA
var vis = [];							// oppdateres for å "sile ut" data som skal vises
for (j=0; j<100; j++) {vis[j]=true;}	// setter initiell verdi for å vise alle elementer
var map;
var url = "https://hotell.difi.no/api/json/bergen/dokart?";	// URL for JSON-ressurs som skal brukes
var myLatLng = {lat: 60.3932950, lng: 5.325000}; // setter senter av kartet
var sokeObjekt = { fritekst1:"", fritekst2:"", herre:"", dame:"", rullestol:"", aapenNaa:"", stellerom:"", pris:"" };
	
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
	
	// funksjon som validerer JSON
	function IsJsonString(str) {
		try {
			JSON.parse(str);
		} catch (e) {
			return null;
		}
		return true;
	}
	
	// denne trenger ny funksjonalitet for å sette inn verdier i de ulike feltene i det definerte søkeobjektet
	function oppdaterSokeObjekt(sokestreng) {
		var del = sokestreng.split(" ");
		for (i=0; i<del.length; i++) {
			if (del[i].includes(":")) {
				var dataFelt = del[i].split(":");
				// hvis feltet er gyldig, sette inn verdien der
				console.log(dataFelt[0]);
				console.log(dataFelt[1]);
				console.log(sokeObjekt.hasOwnProperty(dataFelt[0]));
				if (sokeObjekt.hasOwnProperty(dataFelt[0])) {
				sokeObjekt[dataFelt[0]]=dataFelt[1];
				console.log(sokeObjekt.herre);
				}
			}
			else {
				// hvis det er et ledig fritekstfelt, sette inn verdien der
				if (sokeObjekt.fritekst1=="") {sokeObjekt.fritekst1=del[i];}
				else if (sokeObjekt.fritekst2=="") {sokeObjekt.fritekst2=del[i];}
			}
		}
		return sokeObjekt;
	}
	
	// SJEKKER OG MARKERER OBJEKTENE SOM SKAL VISES I HENHOLD TIL SOKEOBJEKTET
	function sokOgMarker(sokeObjekt, elementer) {
		// iterere alle elementene, og sammenligne alle felt i søkeobjektet, og oppdatere vis[]
		for (i=0; i<elementer.entries.length; i++) {
			// SAMMENLIGNER FRITEKST
			if ((elementer.entries[i].plassering.toUpperCase().includes(sokeObjekt.fritekst1.toUpperCase()))||
			(elementer.entries[i].adresse.toUpperCase().includes(sokeObjekt.fritekst1.toUpperCase()))) {
				vis[i]=true;
			}
			else if ((elementer.entries[i].plassering.toUpperCase().includes(sokeObjekt.fritekst2.toUpperCase()))||
			(elementer.entries[i].adresse.toUpperCase().includes(sokeObjekt.fritekst2.toUpperCase()))) {
				vis[i]=true;
			}
			else {
				vis[i]=false;
			}
			
		}
	}
	
	function avansertSok(JSONobjekt) {
		var sok = prompt("Skriv inn hurtigsøk med fritekst og/eller på format 'felt:data'", "");
		sokOgMarker(oppdaterSokeObjekt(sok),JSONobjekt); // oppdaterer søkeobjekt fra egen funksjon, og bruker dette i sokOgMarker-funksjonen
	
	}
	
	function vanligSok() {
		
	}
	
	function nullStill() {
		sokeObjekt = { fritekst1:"", fritekst2:"", herre:"", dame:"", rullestol:"", aapenNaa:"", stellerom:"", pris:"" };
		for (i=0; i<15; i++) {
			vis[i]=true;
		}
		
	}
	
	// *** Hovedfunksjon *** for henting av data og visning; kaller både visListe(), setMarker(), sokOgMarker() 
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
	
	function visUtvalg() {
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
	// funksjon som gjør tekst hentet fra nett til JSON-objekt og går igjennom denne
	// og viser på listen ved bruk av egne funksjoner (visListe) og på kart (setMarker)
	lesTekst(url, function(tekst){
		if (IsJsonString(tekst)) { 	
			data = JSON.parse(tekst);
			visUtvalg();
		}
			// FUNKSJON for AVANSERT SØK, onclick for en egen knapp
			avansertSok(data);
			document.getElementById("liste").innerHTML ="";
			
			initMap();
			visUtvalg();
		
		// FUNKSJON for "vanlig" SØK, onclick for en egen knapp
	
		// FUNKSJON for å nullstille søk, og vise alt (vis[]=true), med egen knapp
		// nullStill();
		
	});
	
	
	
} // **** Hovedfunksjon SLUTT ****