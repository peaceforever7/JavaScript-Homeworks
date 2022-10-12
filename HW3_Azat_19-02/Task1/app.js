var triangleHeight = prompt("Введите высоту треугольника");
var numberOfStars = "";
for (var i = 0; i < Number(triangleHeight); i++) {
    numberOfStars = numberOfStars.concat("*")
    console.log(numberOfStars)
}