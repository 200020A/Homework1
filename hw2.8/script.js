// Task1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];
people.sort(function compareAge(a, b) {
    if (a.age > b.age) {
        return 1;
    }
    if (a.age < b.age) {
        return -1;
    }
    return 0;
});
console.log(people)
// Task2
function isPositive(number) {
    return number >= 0;
}

function isMale(male) {
    return male.gender === 'male';
}

function filter(array, ruleFunction) {
    const result = [];
    for (let item of array) {
        if (ruleFunction(item)) {
            result.push(item);
        }
    }
    return result;
}

console.log(filter([3, -4, 1, 9], isPositive));

const peopleNam = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(peopleNam, isMale));
// Task3
function date() {

    let currentDate = new Date();
    console.log(currentDate);
}

let timerId = setInterval(date, 3000);
setTimeout(() => { clearInterval(timerId); alert(`30 секунд прошло`); }, 30000);
// Task4
function forSecond(callback) {
    setTimeout(callback, 1000)
}

forSecond(function () {
    console.log('Привет, Глеб!');
})

// Task5
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) {
            cb();
        }
    }, 1000);
}
function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(() => sayHi('Глеб'));