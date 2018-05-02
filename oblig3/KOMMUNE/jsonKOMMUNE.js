// GENERELL FUNKSJON SOM HENTER JSON og SOM KAN BRUKES TIL ALLE DELENE SOM BRUKER JSON-DATA
var vis = [];		// oppdateres for å "sile ut" data som skal vises
for (j=0; j<1000; j++)  { vis[j]=true;}

var url = "https://register.geonorge.no/api/subregister/sosi-kodelister/kartverket/kommunenummer-alle.json?";
var sok = "";

function fritekst () {
  var tekst = prompt("Skriv inn deler av navn eller nummer: ");
  return tekst;
}

function sammenligne (sok, listeElement) {
	if (listeElement.toUpperCase().includes(sok.toUpperCase()))
		{ return true; }
	}

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
		for (var i=0; i<data.containeditems.length; i++) {
			// sammenligner søkeverdi med gjeldende element, og viser kun de som matcher
			if ((sammenligne(sok,data.containeditems[i].label)==true)||(sammenligne(sok,data.containeditems[i].description)==true)) {
				document.getElementById("opplisting").innerHTML += data.containeditems[i].label+' '
				+data.containeditems[i].description+ '        '
				+"<a href="+data.containeditems[i].id+">link</a>"+"<br>";
			} 
		}
		sok="";
		document.getElementById("soek").innerHTML = "<button class=\"link\" id =\"buttonId" + i + "\">" + "KLIKK HER FOR SØK" + "</button><br>";
		document.getElementById("soek").addEventListener("click", gjorSok);
		
		function gjorSok() {
			sok = fritekst();
			document.getElementById("opplisting").innerHTML = "";
			hentOgVis(url);
		}		
		
		
	});
	

} // slutt på hele hentOgVis-funksjonen