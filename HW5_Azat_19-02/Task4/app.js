const names = ["Evgenii", "Vadim", "Ekaterina", "Sofya", "Maria", "Svetlana", "Alexey"];

console.log(names.reduce(function (maxLength, name) {
    console.log(name, name.length, maxLength)
    maxLength = maxLength > name.length ? maxLength : name.length
    return maxLength;
}, 0))
