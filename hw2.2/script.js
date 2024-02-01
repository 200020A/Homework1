// Переменные и типы данных

// Task 1
let a = 10;
alert(a);
a = 20;
alert(a);

// Task 2
let yearReleaseIPhone = 'Год выпуска первого IPhone - 2007 год';
alert(yearReleaseIPhone);

// Task 3
let creatorJS = 'Создатель JavaScript - Брендан Эйх';
alert(creatorJS);

// Task 4
let ten = 10;
let two = 2;
alert(ten + two);
alert(ten - two);
alert(ten * two);
alert(ten / two);

// Task 5
let e = 2;
result = e ** 5;
alert(`2 в 5 степени = ${result}`);

// Task 6
let nine = 9;
let number = 2;
result = nine % number;
alert(`Остаток = ${result}`);

// Task 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
++num;
--num;
alert(num);

// Task 8
const age = prompt('Сколько вам лет?');
alert(age);

// Task 9.0
let user = {
    name: 'Anastasia',
    age: 24,
    isAdmin: true,
};

// Task 9.1
user["city of residence"] = 'Sankt Petersburg';

// Task 9.2
user.age = 27;

// Task 9.3
delete user["city of residence"];

// Task 9.4
let info = prompt("Какую информацию хотите узнать о пользователе?", "name", "age", "iAdmine");
alert(user[info]);

// Task 10
let youName = prompt('Ваше имя');
alert(`Привет, ${youName}!`);