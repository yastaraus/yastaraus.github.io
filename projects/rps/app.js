/*
1. Добавить типы игр - классическая или от шелдона купера
2. Добавить правила игры - по приколу
*/

// Можно написать перебор всех существующих вариантов выбора пользователя, добавлять их в массив, и возвращать как-то данные оттуда.
// Потом можно сделать разные типы игр - классика и от шелдона. Как сделать так что бы в зависимости от выбора типа игры в массив набивалось разное кол-во значений?

// Начальный экран с кнопкой "Начать"
// После нажатия кнопки "Начать" сразу считается таймер, за время которого ты должен выбрать кнопку. Если не успеваешь то за тебя выбирает рандомайзер, на экране нужно что-то показать, типа "Панический выбор", что бы пользователь понял откуда это значение. Если успеваешь твой выбор сравнивается с компом. Если выйграл показывается "Ты выйграл", если нет то "Ты проиграл". 

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

let userChoice;
let allChoices = [];

// Получаем все элементы с data-choice
let allChoicesElements = document.querySelectorAll('[data-choice]');

// console.log(typeof(allChoicesElements));

// Перебираем все элементы и добавляем значение data-choice в массив
for (let i = 0; i < allChoicesElements.length; i++) {
    allChoices.push(allChoicesElements[i].dataset.choice);
}

// console.log(allChoices);

// Получаем выбор игрока
// console.log(typeof(allChoicesElements[1]));
// console.log(typeof(allChoices[1]));

function getUserChoice() {

    // rock.addEventListener('click', function() {
    //     userChoice = rock.dataset.choice;
    //     console.log(userChoice);
    // })
    // paper.addEventListener('click', function() {
    //     userChoice = paper.dataset.choice;
    //     console.log(userChoice);
    // })
    // scissors.addEventListener('click', function() {
    //     userChoice = scissors.dataset.choice;
    //     console.log(userChoice);
    // })


    // не работает потому что allChoices[i] это string
    for (let i = 0; i < allChoicesElements.length; i++) {
        allChoicesElements[i].addEventListener('click', function() {
            userChoice = allChoicesElements[i].dataset.choice;
            console.log(userChoice);
        })
    }

    // for (i of allChoices) {
    //     i.addEventListener('click', function() {
    //         userChoice = i.dataset.choice;
    //         console.log(userChoice);
    //     })
    // }

    return userChoice;
}
getUserChoice()

// Получаем выбор компьютера
function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * allChoicesElements.length);
    return allChoicesElements[randomChoice].dataset.choice;
}


// Правила игры
function game(player, computer) {
    switch(player + " " + computer) {
        case "rock scissors":
        case "scissors paper":
        case "paper rock":
            console.log("WIN")
            break;
        case "scissors rock":
        case "paper scissors":
        case "rock paper":
            console.log("LOSE")
            break;
        case "scissors scissors":
        case "paper paper":
        case "rock rock":
            console.log("DRAW")
            break;
    }
}