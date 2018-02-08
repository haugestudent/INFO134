
function ferdigLastetOppførsel() {

}

function changeBackgroundColor() {
var r = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
var g = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
var b = Math.floor(Math.random() * (255 - 0 + 1)) + 0;

document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
}

function changeFontColor() {
var r = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
var g = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
var b = Math.floor(Math.random() * (255 - 0 + 1)) + 0;

var x = document.getElementById('myId');
x.style.color = 'rgb(' + r + ',' + g + ',' + b + ')';
}
