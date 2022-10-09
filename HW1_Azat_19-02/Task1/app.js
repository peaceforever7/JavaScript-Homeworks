var UserName = prompt("Ваше иия?");
var SurName = prompt("Ваша фамилия?");
var Age = prompt("Ваш возраст?");

if (Age > 30) {
    alert("Здравствуйте, уважаемый(/ая)" + " " + UserName + " " + SurName + "!");
} else if (Age <= 30 && Age >= 18) {
    alert("Здравствуй," + " " + UserName + " " + SurName + "!");
} else {
    alert("Привет," + " " + UserName + " " + SurName + "!");
}

