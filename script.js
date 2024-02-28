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
        let arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
      console.log(arr);
      let newArr = [...arr].sort(() => Math.random() - 0.5);
      alert(newArr);
      let userAnswer = prompt('Чему равнялся первый элемент массива?');
      let userAnswerTwo = prompt('Чему равнялся последний элемент массива?');
       let result = newArr[0] ;
      let resultTwo = newArr[arr.length - 1];
      if (userAnswer.toLowerCase() === result.toLowerCase() && userAnswerTwo.toLowerCase() === resultTwo.toLowerCase() ) {
          alert('Поздравляем ! Вы угадали оба элемента !!!');
      } else if (userAnswer.toLowerCase() === result.toLowerCase() || userAnswerTwo.toLowerCase() === resultTwo.toLowerCase()) {
          alert('Вы были близки к победе!');
      } else  {
          alert('Вы не угадали');
      };
      };