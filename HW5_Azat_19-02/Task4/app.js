const names = ["Evgenii", "Vadim", "Ekaterina", "Sofya", "Maria", "Svetlana", "Alexey"];

console.log(names.reduce(function (maxLength, name) {
    maxLength = maxLength > name.length ? maxLength : name.length
    return maxLength;
}, 0))
