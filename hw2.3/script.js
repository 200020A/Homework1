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
    case 'январь': console.log('Зима'); break;
    case 'февраль': console.log('Зима'); break;
    case 'декабрь': console.log('Зима'); break;
    case 'март': console.log('Весна'); break;
    case 'апрель': console.log('Весна'); break;
    case 'май': console.log('Весна'); break;
    case 'июнь': console.log('Лето'); break;
    case 'июль': console.log('Лето'); break;
    case 'август': console.log('Лето'); break;
    case 'сентябрь': console.log('Осень'); break;
    case 'октябрь': console.log('Осень'); break;
    case 'ноябрь': console.log('Осень'); break;
default: console.log('Такого месяца не существует!'); break;} 

// Task 6
//Адаптивная версия сайта с добавлением эффектов наведения