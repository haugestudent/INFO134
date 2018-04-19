// GENERELL FUNKSJON SOM HENTER JSON og SOM KAN BRUKES TIL ALLE DELENE SOM BRUKER JSON-DATA

var vis = [];		// De ulike søkene kan oppdatere denne for å "sile ut" data som skal vises
					// og kan da brukes både for det som skal vises på kart og på listen
for (j=0; j<100; j++) {
	if (j%1==0) {
		vis[j]=1;
	}
}
var navn = [];
var latitude = [];
var longitude = [];
var url = "https://hotell.difi.no/api/json/bergen/dokart?";
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

//testutskrift. Kan implementere kart, lister, og annet.
lesTekst(url, function(tekst){
    data = JSON.parse(tekst);
 	for (i=0; i<data.entries.length; i++) {
		if (vis[i]==1) {		// siler ut de som er markert i global variabel vis[]
			document.getElementById("opplisting").innerHTML += data.entries[i].id+' '
			+data.entries[i].plassering+ '        '+data.entries[i].longitude+ '    '+data.entries[i].latitude+"<br>";
			navn[i]=data.entries[i].plassering;
		}
	}
});

console.log(vis[9]+" "+navn[9]);