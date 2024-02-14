// Task 1
let a = 8;
let b = 4;

function min(a, b) {
  if (a < b) {
    return a;
  } else if (a > b) {
    return b;
  }
}

min(a, b);

console.log(min(a, b));

// Task 2
function evenOrOdd(n) {
  if (n % 2 === 0) {
    return 'Число четно';
  } else {
    return 'Число нечетное';
  }
};

console.log(evenOrOdd(2));
console.log(evenOrOdd(5));

// Task 3.1
let e = prompt('Введите число');
function enterNumber() {
  e = e ** 2;
  console.log(e);
}
function SquareNumber() {
  e = e ** 2;
  console.log(e);
}

enterNumber();
SquareNumber();

// Task 4
let howAge = prompt('Сколько тебе лет');
function howManyYears(howAge) {
  if (howAge < 0) {
    return 'Вы ввели неправильное значение';
  } else if (howAge >= 0 && howAge <= 12) {
    return 'Привет, друг!';
  } else {
    return 'Добро пожаловать!';
  }
}
alert(howManyYears(howAge));

// Task 5
function trueNamber() {
  let firstNunber = prompt('Введите первое число');
  let secondNumber = prompt('Введите второе число');
  if (!isNaN(firstNunber) && !isNaN(secondNumber)) {
    return console.log(firstNunber * secondNumber)
  }
  else console.log(`Одно или оба значения не являются числом`)
}
trueNamber();

// Task 6
let num=prompt(`назовите число возводимое в куб`);
function func(){
if(!isNaN(num)){
  return(console.log(num**3));
}
else {
  console.log(`Переданный параметр не является числом`)
} 
}
func(num);

// Task 7
function getArea() {
  return Math.PI * this.radius ** 2;
}
function getPerimeter() {
  return 2 * this.radius * Math.PI;
}

const circle1 = {
  radius: 10,
  getCircleleArea: getArea,
  getirclelePerimeter: getPerimeter,
};
const circle2 = {
  radius: 14,
  getCircleleArea: getArea,
  getirclelePerimeter: getPerimeter,
};
console.log(circle1.getCircleleArea());
console.log(circle1.getirclelePerimeter());
console.log(circle2.getCircleleArea());
console.log(circle2.getirclelePerimeter());

// Task 8 
// Работа с макетом