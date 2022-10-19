const taxIdentificationNumbers = ["00101202215478","qwerty","125042000000258","79451789841256","21010199578143","01234567891234","249489","21702200214789"]

console.log(taxIdentificationNumbers.filter(function (taxIdentificationNumber) {
    if (taxIdentificationNumber.length ===14) {
        const firstNumber = taxIdentificationNumber[0];
        return ["0", "1", "2"].includes(firstNumber)
    }
}));