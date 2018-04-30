// GENERELL FUNKSJON SOM HENTER JSON og SOM KAN BRUKES TIL ALLE DELENE SOM BRUKER JSON-DATA
var vis = [];		// oppdateres for å "sile ut" data som skal vises
for (j=0; j<1000; j++) { if (j%1==0) { vis[j]=true;} }

var url = "https://register.geonorge.no/api/subregister/sosi-kodelister/kartverket/kommunenummer-alle.json?";
var hentetData = hentOgVis(url);
console.log(hentetData);

function hentOgVis(url) {
	function lesTekst(fil, callback) {
		var input = new XMLHttpRequest();
		input.overrideMimeType("application/json");
		input.open("GET", fil, true);
		input.onreadystatechange = function() {
			if (input.readyState === 4 && input.status == "200") {
				callback(input.responseText);
			}		
		}
		input.send(null);
	}

	lesTekst(url, function(tekst){
		data = JSON.parse(tekst);
		for (i=0; i<data.containeditems.length; i++) {
			if (vis[i]==true) {		// siler ut de som er markert i global variabel vis[]
				document.getElementById("opplisting").innerHTML += data.containeditems[i].label+' '
				+data.containeditems[i].description+ '        '
				+"<a href="+data.containeditems[i].id+">link</a>"+"<br>";
			} // <a href="url">link</a>
		}
	});

} // slutt på hele hentOgVis-funksjonen