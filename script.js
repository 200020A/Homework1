function seasonsGame() {
    let season = Number(prompt("Введите номер любого месяца года"));
                                       
    if (season > 0 && season <= 2 || season === 12) {
       console.log ("Это зима!");
    } else if (season >= 3 && season <= 5) {
       console.log("Это весна!");
    } else if (season >= 6 && season <= 8) {
        console.log("Это лето!");
    } else if (season >= 9 && season <= 11) {
       console.log("Это осень!");
    } else {
      console.log('Дурачок, месяц не верный');
    }
    }


    function fruits () {
        let fruit = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
        fruit = fruit.sort(() => Math.random() - 0.5);
        alert(fruit);
        let arrFruit = prompt('Чему равнялся первый элемент массива?');
        let endFruit = prompt('Чему равнялся последний элемент массива?');
        if (arrFruit === fruit[0] && endFruit === fruit[fruit.length - 1]) {
            alert('Поздравляем ! Вы угадали оба элемента !!!');
        } else if (arrFruit === fruit[0] || endFruit === fruit[fruit.length - 1]) {
            alert('Вы были близки к победе!');
        } else {
            alert('Вы не угадали');
        }
    };
    