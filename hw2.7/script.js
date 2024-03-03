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

console.log(Math.max(...multiNumbs));
console.log(Math.min(...multiNumbs));

// Task 5
function getRandomIn(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  console.log(getRandomIn(1, 10));

// Task 6
function getRandomNum(a) {
    return(Array.from(Array(Math.floor(a / 2)), () => Math.round(Math.random() * a)));
 }
 console.log(getRandomNum(12));

// Task 7
function getRandomArr(min, max) {
    return (Math.round(Math.random() * (max - min)) + min);
}
console.log(getRandomArr(2, 15));

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