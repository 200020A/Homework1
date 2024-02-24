// Task 1
const number = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < number.length; i++) {
	console.log(number[i]);
    if (number[i] === 10) break;
}

// Task 2
const arr = [1, 5, 4, 10, 0, 3];
const i = arr.indexOf(4)

console.log(i)

// Task 3
let numbers3 = [1, 3, 5, 10, 20];
let str = numbers3.join(' ');

console.log(str);

// Task 4
let newArr = [];
for (let i = 0; i < 3; i++) {
	newArr[i] = [];

	for (let j = 0; j < 3; j++) {
		newArr[i].push(1);
	}
} 

console.log(newArr);

// Task 5
let aArr = [1, 1, 1];
aArr.push(2, 2, 2);

console.log(aArr);

// Task 6
const arrNumber1 = [9, 8, 7, 'a', 6, 5];
let resultNumber1 = [9, 8, 7, 'a', 6, 5].filter(item => !isNaN(item)).sort();
console.log(resultNumber1);

// Task 7
const arrNumber2 = [9, 8, 7, 6, 5];
let requestNumber = Number(prompt('Введи число'));
if (arrNumber2.includes(requestNumber)) {
    alert('Угадал');
} else {
    alert('Не угадал');
}

// Task 8
const str1 = 'abcdef';
console.log(str1.split('').reverse().join(''));

// Task 9
let arr3 = [[1, 2, 3,],[4, 5, 6]];
let res = arr3.flat();

console.log(res);

// Task 10
let arrNumber = [5, 7, 9, 3, 4, 2, 8, 1, 10, 6];

for (let i = 0; i < arrNumber.length - 1; i++) {
    console.log(arrNumber[i] + arrNumber[i + 1]);
}

// Task 11
const numbers = [1, 2, 3];

function doubleNumbers(numbers) {
    return numbers.map(x => x ** 2);
}

console.log(doubleNumbers(numbers));

// Task 12
const getWordLengths = arr => arr.map(str => str.length);

console.log(getWordLengths(['слово', '', 'слог', 'длинное предложение', 'буква'])); // [5, 0, 4, 19, 5]

// Task 13
const filterPositive = array => array.filter(item => item < 0);

console.log(filterPositive([-1, 0, 5, -10, 56])); 
console.log(filterPositive([-25, 25, 0, -1000, -2]));
