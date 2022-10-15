function ReturnMinNumber(Number1, Number2) {
    return (Number1 > Number2 ? Number2 : Number1);
}

var Number1 = prompt("Введите первое число");
if (Number1 === "" || isNaN(Number1) || Number1 === null) {
    alert("Введите первое число цифрами")
} else {
    var Number2 = prompt("Введите второе число")
    if (Number2 === "" || isNaN(Number2) || Number2 === null) {
        alert("Введите второе число цифрами")
    } else {
        console.log(ReturnMinNumber(Number1, Number2))
    }
}