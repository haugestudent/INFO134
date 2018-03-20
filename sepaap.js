//object.addEventListener("load", foo());

var text = '{"entries":[' +
'{"Id":1,"plassering":"Nonneseter Sør","place":"Nonneseter South","adresse":"Lungegårdskaien","pris": 12,"start_hverdag":"09:00","slutt_hverdag":"23:50","start_lørdag":"07:00","slutt_lørdag":"23:15","start_søndag":"07:00","slutt_søndag":"23:15", "rullestol": "Ja" , "stellerom": "Nei" , "pissOnly": "Nei","lat": 60.388076, "long": 5.334937 },' +
'{"Id":2,"plassering":"Nonneseter Nord","place":"Nonneseter North","adresse":"Østre Strømkai","pris": 12,"start_hverdag":"09:30","slutt_hverdag":"23:50","start_lørdag":"07:00","slutt_lørdag":"23:15","start_søndag":"Stengt","slutt_søndag":"Stengt", "rullestol": "Ja" , "stellerom": "Nei" , "pissOnly": "Nei","lat": 60.388871, "long": 5.334079 },' +
'{"Id":3,"plassering":"Skyss Kundesenter","place":"Skyss Customer Service","adresse":"Østre Strømkai","pris": 12,"start_hverdag":"09:00","slutt_hverdag":"17:00","start_lørdag":"09:00","slutt_lørdag":"15:00","start_søndag":"Stengt","slutt_søndag":"Stengt", "rullestol": "Ja" , "stellerom": "Nei" , "pissOnly": "Nei","lat": 60.388868, "long": 5.334079 },' +
'{"Id":4,"plassering":"Jernbanestasjonen","place":"Railway Station","adresse":"Strømgaten 4","pris": 10,"start_hverdag":"07:00","slutt_hverdag":"23:00","start_lørdag":"07:00","slutt_lørdag":"23:00","start_søndag":"07:00","slutt_søndag":"23:00", "rullestol": "Nei" , "stellerom": "Nei" , "pissOnly": "Nei","lat": 60.39041, "long": 5.332995 },' +
'{"Id":5,"plassering":"Mathallen","place":"Fish marked","adresse":"Strandkaien 3","pris": 10,"start_hverdag":"09:00","slutt_hverdag":"23:00","start_lørdag":"08:30","slutt_lørdag":"22:00","start_søndag":"08:30","slutt_søndag":"22:00", "rullestol": "Ja" , "stellerom": "Ja" , "pissOnly": "Nei","lat": 60.39041, "long": 5.324099 },' +
'{"Id":6,"plassering":"Strandkaiterminalen","place":"Strandkai boat terminal","adresse":"Strandkaien","pris": 10,"start_hverdag":"08:00","slutt_hverdag":"18:00","start_lørdag":"08:00","slutt_lørdag":"18:00","start_søndag":"08:00","slutt_søndag":"18:00", "rullestol": "Ja" , "stellerom": "Nei" , "pissOnly": "Nei","lat": 60.395432, "long": 5.321034 },' +
'{"Id":7,"plassering":"Innbyggerservice","place":"Citizen Service Sentre","adresse":"Kaigaten 4","pris": 0,"start_hverdag":"08:00","slutt_hverdag":"15:00","start_lørdag":"Stengt","slutt_lørdag":"Stengt","start_søndag":"Stengt","slutt_søndag":"Stengt", "rullestol": "Ja" , "stellerom": "Nei" , "pissOnly": "Nei","lat": 60.3913929, "long": 5.326855 },' +
'{"Id":8,"plassering":"Bergen Storsenter","place":"Bergen Storsenter","adresse":"Strømgaten 8","pris": 10,"start_hverdag":"09:00","slutt_hverdag":"21:00","start_lørdag":"09:00","slutt_lørdag":"18:00","start_søndag":"Stengt","slutt_søndag":"Stengt", "rullestol": "Ja" , "stellerom": "Ja" , "pissOnly": "Nei","lat": 60.3891794, "long": 5.3305793 },' +
'{"Id":9,"plassering":"Sundt Motehus","place":"Sundt Fashion House","adresse":"Torgalmenningen 14","pris": 10,"start_hverdag":"09:00","slutt_hverdag":"21:00","start_lørdag":"09:00","slutt_lørdag":"18:00","start_søndag":"Stengt","slutt_søndag":"Stengt", "rullestol": "Ja" , "stellerom": "Ja" , "pissOnly": "Nei","lat": 60.392209, "long": 5.324011 },' +
'{"Id":10,"plassering":"Xhibition","place":"Xhibition","adresse":"Småstrandgaten 3","pris": 10,"start_hverdag":"09:00","slutt_hverdag":"20:00","start_lørdag":"09:00","slutt_lørdag":"18:00","start_søndag":"Stengt","slutt_søndag":"Stengt", "rullestol": "Ja" , "stellerom": "Ja" , "pissOnly": "Nei","lat": 60.3928444, "long": 5.3239541 },' +
'{"Id":11,"plassering":"Galleriet","place":"Galleriet","adresse":"Torgalmenningen 8","pris": 10,"start_hverdag":"09:00","slutt_hverdag":"21:00","start_lørdag":"09:00","slutt_lørdag":"18:00","start_søndag":"Stengt","slutt_søndag":"Stengt", "rullestol": "Ja" , "stellerom": "Ja" , "pissOnly": "Nei","lat": 60.3947371, "long": 5.3243561 },' +
'{"Id":12,"plassering":"Kløverhuset","place":"Kløverhuset","adresse":"Strandgaten 13-15","pris": 10,"start_hverdag":"10:00","slutt_hverdag":"20:00","start_lørdag":"10:00","slutt_lørdag":"18:00","start_søndag":"Stengt","slutt_søndag":"Stengt", "rullestol": "Ja" , "stellerom": "Ja" , "pissOnly": "Nei","lat": 60.3944194, "long": 5.3205649 },' +
'{"Id":13,"plassering":"Bryggen Besøkssenter","place":"Bryggen Visitor Centre","adresse":"Jacobsfjorden Bryggen","pris": 0,"start_hverdag":"09:00","slutt_hverdag":"18:00","start_lørdag":"09:00","slutt_lørdag":"18:00","start_søndag":"Stengt","slutt_søndag":"Stengt", "rullestol": "Ja" , "stellerom": "Nei" , "pissOnly": "Nei","lat": 60.3974108, "long": 5.313963 },' +
'{"Id":14,"plassering":"C. Sundtsgt","place":"Nonneseter North","adresse":"C. Sundtsgt","pris": 0,"start_hverdag":"00:00","slutt_hverdag":"24:00","start_lørdag":"00:00","slutt_lørdag":"24:00","start_søndag":"00:00","slutt_søndag":"24:00", "rullestol": "Nei" , "stellerom": "Nei" , "pissOnly": "Ja","lat": 60.397359, "long": 5.313963 },' +
'{"Id":15,"plassering":"Nordnes Skole","place":"Nordnes Skole","adresse":"Nordnesparken 3","pris": 0,"start_hverdag":"00:00","slutt_hverdag":"24:00","start_lørdag":"00:00","slutt_lørdag":"24:00","start_søndag":"00:00","slutt_søndag":"24:00", "rullestol":"Nei" , "stellerom": "Nei" , "pissOnly": "Ja", "lat": 60.397557, "long": 5.307858 }]}';

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
  }}

function finnRullestol() {
  document.getElementById("toalett").innerHTML = "";

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
  }
}

function finnPissoir() {
  document.getElementById("toalett").innerHTML = "";

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

function returnerTime() {
  var d = new Date();
  var h = d.getHours();

  h = (h < 10? '0':'') + h;
  return h;
}
function returnerMinutt() {
  var d = new Date();
  var m = d.getMinutes();

  m = (m < 10? '0':'') + m;
  return m;
}

// Viser detaljer til element 'u'
function visDetaljer(u) {
  this["button"+u].onclick = function() {
    document.getElementById("detaljer").innerHTML = "<div id=\"storSkrift\">" + obj.entries[u].plassering + "<br><br></div>Adresse: "
    + obj.entries[u].adresse + "<br><br>Pris: " + obj.entries[u].pris + "<br><br> <b>Åpningstider:</b> <hr>Hverdager: " + obj.entries[u].start_hverdag
    + "-" + obj.entries[u].slutt_hverdag + "<br>Lørdager " + obj.entries[u].start_lørdag + "-" + obj.entries[u].slutt_lørdag + "<br>Søndager:  "
    + obj.entries[u].start_søndag + "-" + obj.entries[u].slutt_søndag + "<hr>Egnet for rullestol: " + obj.entries[u].rullestol + "<br>Stellerom: "
    + obj.entries[u].stellerom + "<br> Kun pissoir: " + obj.entries[u].pissOnly

    + "<hr> <h2>" + (aapent(u)? "ÅPENT NÅ!":"STENGT") + "</h2>";

  };
}

function visAlleDetaljer() {
//Vis detaljer på alle elementene
for ( var i = 0; i < obj.entries.length; i++ ) {
  visDetaljer(i);
 }
}

// tid = toalett-id
function aapent(tid) {
  // deler åpningstidene inn i timer og minutter på åpning og stenging for hverdag, lørdag, søndag

  var helTimeStartH = obj.entries[tid].start_hverdag.substring(0,2);
  var helTimeSluttH = obj.entries[tid].slutt_hverdag.substring(0,2);

  var minuttStartH = obj.entries[tid].start_hverdag.substring(3,5);
  var minuttSluttH = obj.entries[tid].slutt_hverdag.substring(3,5);

  var helTimeStartL = obj.entries[tid].start_lørdag.substring(0,2);
  var helTimeSluttL = obj.entries[tid].slutt_lørdag.substring(0,2);

  var minuttStartL = obj.entries[tid].start_lørdag.substring(3,5);
  var minuttSluttL = obj.entries[tid].slutt_lørdag.substring(3,5);

  var helTimeStartS = obj.entries[tid].start_søndag.substring(0,2);
  var helTimeSluttS = obj.entries[tid].slutt_søndag.substring(0,2);

  var minuttStartS = obj.entries[tid].start_søndag.substring(3,5);
  var minuttSluttS = obj.entries[tid].slutt_søndag.substring(3,5);

  var timeNaa = returnerTime();
  var minuttNaa = returnerMinutt();

//Variabler til bruk for alle dagene
  var timeStart;
  var minuttStart;
  var timeSlutt;
  var minuttSlutt;

  var d = new Date();
  var n = d.getDay();
//Finne ut om det er hverdag, lørdag eller søndag, og tildele variablene korrekt ukedag
  switch (n) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
       timeStart = helTimeStartH;
       timeSlutt = helTimeSluttH;
       minuttStart = minuttStartH;
       minuttSlutt = minuttSluttH;
       break;
   case 6:
      timeStart = helTimeStartL;
      timeSlutt = helTimeSluttL;
      minuttStart = minuttStartL;
      minuttSlutt = minuttSluttL;
       break;
   case 7:
      timeStart = helTimeStartS;
      timeSlutt = helTimeSluttS;
      minuttStart = minuttStartS;
      minuttSlutt = minuttSluttS;
      break;
  }
  //Hvis det står stengt i feltet på denne dagen, er det garantert stengt,
  //uansett hva klokken er
  if ((timeStart == "St")) {
    return false;
  }

  //Trenger ikke sjekke minuttene dersom timetallet for åpning er under nåværende timetall
  //Tilsvarende for stenging, men da må timetallet være under.  Da er det utansett åpent.

  if ((timeStart < timeNaa) && (timeSlutt > timeNaa)) {
    return true;
  } else {
    //Vi må finne minuttene for å finne ut om det er åpent akkurat nå

  //Booleanske variabler for å finne ut om det er åpning eller stenging vi skal sjekke minuttene på
  var minuttStartSjekk = timeStart == timeNaa;
  var minuttSluttSjekk = timeSlutt == timeNaa;

  //Hvis det er åpiningstiden vi skal sjekke minuttene på
  if (minuttStartSjekk) {
    if (minuttStart >= minuttNaa) {
      return true;
    } else {
      return false;
    }
  }
  //Hvis det er stengetiden vi skal sjekke minuttene på
  if (minuttSluttSjekk) {
    if (minuttSlutt > minuttNaa) {
      return true;
    } else {
      return false;
    }
   }
  }
}
