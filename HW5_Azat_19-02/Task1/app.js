var Customer = {
    username: "Travis Scott",
    login: "Trasco",
    password: "Trasco123"
}

function Customer (username, login, password) {
    this.username = username
    this.login = login
    this.password = password
}

console.table(Customer);