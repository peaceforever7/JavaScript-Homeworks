var userString = prompt("Введите текст для переворота");
ReverseString(userString)
function ReverseString(userString) {
    var reverseString = " ";
    for (let i = userString.length-1; i >= 0; i--) {
        reverseString += userString[i];
    }
    alert(userString + " => " + reverseString)
}
