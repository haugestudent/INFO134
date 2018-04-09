
var url = prompt("Enter JSON: ");

if (IsJsonString(url) === true) {
  alert("That is a bonafide JSON object!");
} else {
  alert("Not a JSON object");
}

function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
