var number1 = Number(prompt("Введите первое число"));
var number2 = Number(prompt("Введите второе число"));
if (number1 > number2) {
    alert("Первое число больше второго")
}else if(number1 < number2) {
    alert("Второе число больше первого")
}else {
    alert("Числа равны");
}