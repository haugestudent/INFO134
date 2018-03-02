var pluss_en = 1;

var text = '{"entries":[' +
'{"Id":1,"plassering":"Nonneseter Sør","place":"Nonneseter South","Adresse":"Lungegårdskaien","pris": 12,"tid_hverdag":"07:00-23:15","tid_lørdag":"07:00-23:15","tid_søndag":"07:00-23:15", "rullestol": true , "stellerom": false , "pissOnly": false,"lat": 60.388076, "long": 5.334937 },' +
'{"Id":2,"plassering":"Nonneseter Nord","place":"Nonneseter North","Adresse":"Østre Strømkai","pris": 12,"tid_hverdag":"05:30-23:50","tid_lørdag":"07:00-23:15","tid_søndag":"Stengt", "rullestol": true , "stellerom": false , "pissOnly": false,"lat": 60.388871, "long": 5.334079 },' +
'{"Id":3,"plassering":"Skyss Kundesenter","place":"Skyss Customer Service","Adresse":"Østre Strømkai","pris": 12,"tid_hverdag":"09:00-17:00","tid_lørdag":"09:00-15:00","tid_søndag":"Stengt", "rullestol": true , "stellerom": false , "pissOnly": false,"lat": 60.388868, "long": 5.334079 },' +
'{"Id":4,"plassering":"Jernbanestasjonen","place":"Railway Station","Adresse":"Strømgaten 4","pris": 10,"tid_hverdag":"07:00-23:00","tid_lørdag":"07:00-23:00","tid_søndag":"07:00-23:00", "rullestol": false , "stellerom": false , "pissOnly": false,"lat": 60.39041, "long": 5.332995 },' +
'{"Id":5,"plassering":"Mathallen","place":"Fish marked","Adresse":"Strandkaien 3","pris": 10,"tid_hverdag":"09:00-23:00","tid_lørdag":"08:30-22:00","tid_søndag":"08:30-22:00", "rullestol": true , "stellerom": true , "pissOnly": false,"lat": 60.39041, "long": 5.324099 },' +
'{"Id":6,"plassering":"Strandkaiterminalen","place":"Strandkai boat terminal","Adresse":"Strandkaien","pris": 10,"tid_hverdag":"08:00-18:00","tid_lørdag":"08:00-18:00","tid_søndag":"08:00-18:00", "rullestol": true , "stellerom": false , "pissOnly": false,"lat": 60.395432, "long": 5.321034 },' +
'{"Id":7,"plassering":"Bergen Kommune, Innbyggerservice","place":"Citizen Service Sentre","Adresse":"Kaigaten 4","pris": 0,"tid_hverdag":"08:00-15:00","tid_lørdag":"Stengt","tid_søndag":"Stengt", "rullestol": true , "stellerom": false , "pissOnly": false,"lat": 60.3913929, "long": 5.326855 },' +
'{"Id":8,"plassering":"Bergen Storsenter","place":"Bergen Storsenter","Adresse":"Strømgaten 8","pris": 10,"tid_hverdag":"09:00-21:00","tid_lørdag":"09:00-18:00","tid_søndag":"Stengt", "rullestol": true , "stellerom": true , "pissOnly": false,"lat": 60.3891794, "long": 5.3305793 },' +
'{"Id":9,"plassering":"Sundt Motehus","place":"Sundt Fashion House","Adresse":"Torgalmenningen 14","pris": 10,"tid_hverdag":"09:00-21:00","tid_lørdag":"09:00-18:00","tid_søndag":"Stengt", "rullestol": true , "stellerom": true , "pissOnly": false,"lat": 60.392209, "long": 5.324011 },' +
'{"Id":10,"plassering":"Xhibition","place":"Xhibition","Adresse":"Småstrandgaten 3","pris": 10,"tid_hverdag":"09:00-20:00","tid_lørdag":"09:00-18:00","tid_søndag":"Stengt", "rullestol": true , "stellerom": true , "pissOnly": false,"lat": 60.3928444, "long": 5.3239541 },' +
'{"Id":11,"plassering":"Galleriet","place":"Galleriet","Adresse":"Torgalmenningen 8","pris": 10,"tid_hverdag":"09:00-21:00","tid_lørdag":"09:00-18:00","tid_søndag":"Stengt", "rullestol": true , "stellerom": true , "pissOnly": false,"lat": 60.3947371, "long": 5.3243561 },' +
'{"Id":12,"plassering":"Kløverhuset","place":"Kløverhuset","Adresse":"Strandgaten 13-15","pris": 10,"tid_hverdag":"10:00-20:00","tid_lørdag":"10:00-18:00","tid_søndag":"Stengt", "rullestol": true , "stellerom": true , "pissOnly": false,"lat": 60.3944194, "long": 5.3205649 },' +
'{"Id":13,"plassering":"Bryggen Besøkssenter","place":"Bryggen Visitor Centre","Adresse":"Jacobsfjorden Bryggen","pris": 0,"tid_hverdag":"09:00-18:00","tid_lørdag":"09:00-18:00","tid_søndag":"Stengt", "rullestol": true , "stellerom": false , "pissOnly": false,"lat": 60.3974108, "long": 5.313963 },' +
'{"Id":14,"plassering":"C. Sundtsgt","place":"Nonneseter North","Adresse":"C. Sundtsgt","pris": 0,"tid_hverdag":"Hele døgnet","tid_lørdag":"Hele døgnet","tid_søndag":"Hele døgnet", "rullestol": false , "stellerom": false , "pissOnly": true,"lat": 60.397359, "long": 5.313963 },' +
'{"Id":15,"plassering":"Nordnes Skole","place":"Nordnes Skole","Adresse":"Nordnesparken 3","pris": 0,"tid_hverdag":"Hele døgnet","Tid_Lørdag":"Hele døgnet","Tid_Søndag":"Hele døgnet", "rullestol":false , "stellerom": false , "pissOnly": true, "lat": 60.397557, "long": 5.307858 }]}';

obj = JSON.parse(text);

function listAll() {
document.getElementById("demo").innerHTML = "";
for (i = 0; i < text.length; i++) {
  document.getElementById("demo").innerHTML += (i+pluss_en) + " " + obj.entries[i].plassering + "  (" + obj.entries[i].lat + ", " + obj.entries[i].long + " )<br>";
  }
}

function listPiss() {
document.getElementById("demo").innerHTML = "";
for (i = 0; i < text.length; i++) {

  if (obj.entries[i].pissOnly == true) {
      alert(obj.entries[i].plassering + " " + obj.entries[i].pissOnly);
  document.getElementById("demo").innerHTML += (i+pluss_en) + " " + obj.entries[i].plassering + "<br>";
   }
  }
}

function listHandicap() {
document.getElementById("demo").innerHTML = "";
for (i = 0; i < text.length; i++) {
  if (obj.entries[i].rullestol == true) {
  document.getElementById("demo").innerHTML += (i+pluss_en) + " " + obj.entries[i].plassering + "<br>";
   }
  }
}

function listGratis() {
document.getElementById("demo").innerHTML = "";
for (i = 0; i < text.length; i++) {
  if (obj.entries[i].pris == 0) {
  document.getElementById("demo").innerHTML += (i+pluss_en) + " " + obj.entries[i].plassering + "<br>";
   }
  }
}
