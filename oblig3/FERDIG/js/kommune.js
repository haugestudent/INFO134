function fritekst () {
  var tekst = prompt("Skriv inn deler av navn eller nummer: ");
  if (tekst != null) {
  	var upper = tekst.toUpperCase();
	finnVedFritekst(upper);
  }
}

function finnVedFritekst(friTekst) {
  var objToUpper1;
  var objToUpper2;
  document.getElementById("toalett").innerHTML = "";
	initMap();
  // Lager en button for hver rad i entries
  for (i = 0; i < obj.entries.length; i++) {
    objToUpper1 = obj.entries[i].adresse.toUpperCase();
	objToUpper2 = obj.entries[i].plassering.toUpperCase();
    if ((objToUpper1.includes(friTekst))||(objToUpper2.includes(friTekst))) {
    document.getElementById("toalett").innerHTML += obj.entries[i].Id + " " +  "<button class=\"link\" id =\"buttonId" + i + "\">" + obj.entries[i].plassering + "</button><br>";
   }
  }
  for (var i = 0; i < obj.entries.length; ++i) {
    objToUpper1 = obj.entries[i].adresse.toUpperCase();
	objToUpper2 = obj.entries[i].plassering.toUpperCase();
    if ((objToUpper1.includes(friTekst))||(objToUpper2.includes(friTekst))) {
      this["button"+i] = document.getElementById("buttonId" + i);
   }
  }
  for (i = 0; i < obj.entries.length; i++) {
    objToUpper1 = obj.entries[i].adresse.toUpperCase();
	objToUpper2 = obj.entries[i].plassering.toUpperCase();
    if ((objToUpper1.includes(friTekst))||(objToUpper2.includes(friTekst))) {
      visDetaljer(i);
    }
	else {
		pos[i].setMap(null);
	 }
 }
}