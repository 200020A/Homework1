// Task 1
const mstr = 'js';
console.log(mstr.toUpperCase());

// Task 2
function searchStart(arr, str) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase().startsWith(str.toLowerCase())) {
            result.push(arr[i]);
        }
    }
    return result;
}


console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));
console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'));
console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));

//   Task 3
let str = 32.58884;

console.log(Math.floor(str));
console.log(Math.ceil(str));
console.log(Math.round(str));

// Task 4
const multiNumbs = [52, 53, 49, 77, 21, 32];

console.log(Math.max(52, 53, 49, 77, 21, 32));
console.log(Math.min(52, 53, 49, 77, 21, 32.));

// Task 5
function getRandomInt(min, max) {
    return Math.round(Math.random() * max + 1);
}

console.log(getRandomInt(1, 10));

// Task 6
function getRandomInt(minValue, maxValue) {

    return Math.round(Math.random() * (maxValue - minValue)) + minValue;

}
console.log(getRandomInt(3, 9));

// Task 7
function getRandomInt(min, max) {
    return (Math.round(Math.random() * (max - min)) + min);
}
console.log(getRandomInt(2, 15));

// Task 8
let currentDate = new Date();

console.log(currentDate);

// Task 9
let dateNow = new Date();
dateNow.setDate(dateNow.getDate() + 73);

console.log(dateNow);

// Task 10
function ruDateTime() {
    const myDate = new Date();
    const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    let ruDateTime = "Дата:" + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + " " + days[myDate.getDay()] + "." + "Время:" + myDate.toLocaleTimeString();
    return ruDateTime;
}
ruDateTime();
console.log(ruDateTime())

// Taks 11 Работа с макетом