// Task 1
let i = 1;
while( i <= 2) {
alert("Привет");
    i++;
}

// Task 2
let number = 1;
while (number <= 5) {
alert(number);
number++;
}

//  Task 3
let a = 7;
while (a <= 22) {
alert(a);
a++;
}

// Task 4
let obj= {
    'Коля' : '200',
    'Вася' : '300',
    'Петя' : '400',
};
for (let key in obj) { 
    alert(`${key} — зарплата  ${obj[key]} долларов`);
}

// Task 5
let n = 1000;
let num = 0;
while( n >= 50) {
n /= 2;
num ++;
}
console.log(`Получилось число ${n}`);
console.log(`Число интеграций: ${num}`);

// Task 6
let firstFriday = 5;
for (let i = firstFriday; i <= 31; i += 7) {
  console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
}
