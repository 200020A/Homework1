// Task 1
let password = 'пароль';
let youPassword = prompt('Введите пароль');
if (youPassword === password) {
    alert('Пароль введён правильно')
} else {
    alert('Пароль введён неправильно')
}

// Task 2
let c = prompt('Введите любое число');
if (c > 0 && c < 10) {
    console.log('Верно')
}
else {
    console.log('Неверно')
}

// Task 3
let d = 10
let e = 368
if (d < 100 || e > 100) {
    console.log('Верно')
}
else {
    console.log('Неверно')
}

// Task 4
let a = 2;
let b = 3;
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 
// alert(a + b);
alert(Number(a) + Number(b));

// Task 5
let day = prompt('Введите номер месяца');
switch (day) {
    case 1:
    case 2:
    case 12:
        alert('Зима')
        break;
    case 3:
    case 4:
    case 5:
        alert('Весна')
        break;
    case 6:
    case 7:
    case 8:
        alert('Лето')
        break;
    case 9:
    case 10:
    case 11:
        alert('Осень')
        break;
default: console.log('Такого месяца не существует!'); break;} 

// Task 6
//Адаптивная версия сайта с добавлением эффектов наведения