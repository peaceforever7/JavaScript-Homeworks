var TransferSelect = prompt("Какую систему банковских переводов вы хотите использовать для отправки?\n 1. Юнистрим \n 2. Золотая корона \n 3. РИА \n 4. Контакт");
var Transfer = "Деньги отправлены системой "
if (Number(TransferSelect)===1 || TransferSelect === "Юнистрим") {
    console.log(Transfer + "Юнистрим");
}else if (Number(TransferSelect)===2 || TransferSelect === "Золотая Корона") {
    console.log(Transfer + "Золотая Корона")
}else if (Number(TransferSelect)===3 || TransferSelect === "РИА") {
    console.log(Transfer + "РИА")
}else if (Number(TransferSelect)===4 || TransferSelect === "Контакт") {
    console.log(Transfer + "Контакт")
}else {
    console.log("Выбрана неизвестная система банковских переводов")
}