var selectedColor = prompt("Введите цвет светофора");
switch (selectedColor) {
    case "зеленый":
    case "green":
        alert("Свет зеленый говорит: \nПроходите, путь открыт!");
        break;
    case "желтый":
    case "yellow":
        alert("Желтый свет предупреждение. \nЖди сигнала для движенья.");
        break;
    case "красный":
    case "red":
        alert("Если свет зажегся красный, \nЗначит, двигаться опасно.");
        break;
    default :
        alert("Неопределенный вид цвета, попробуйте другой");
}