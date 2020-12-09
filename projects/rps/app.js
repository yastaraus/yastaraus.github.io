/*
1. Добавить типы игр - классическая или от шелдона купера
2. Добавить правила игры - по приколу
*/

// Потом можно сделать разные типы игр - классика и от шелдона. Как сделать так что бы в зависимости от выбора типа игры в массив набивалось разное кол-во значений?

// Начальный экран с кнопкой "Начать"
// После нажатия кнопки "Начать" сразу считается таймер, за время которого ты должен выбрать кнопку. Если не успеваешь то за тебя выбирает рандомайзер, на экране нужно что-то показать, типа "Панический выбор", что бы пользователь понял откуда это значение. Если успеваешь твой выбор сравнивается с компом. Если выйграл показывается "Ты выйграл", если нет то "Ты проиграл". 

// const rock = document.getElementById("rock");
// const paper = document.getElementById("paper");
// const scissors = document.getElementById("scissors");

let userScore = 0;
let computerScore = 0;
let userScoreElem = document.querySelector('.player_score');
let computerScoreElem = document.querySelector('.computer_score');
let gameResultElem = document.querySelector('.game_result');

let userChoice;

// Получаем все элементы с data-choice
let allChoicesElements = document.querySelectorAll('[data-choice]');

// Перебираем, слушаем все элементы с data-choice, шлем в функцию game()
for (let i = 0; i < allChoicesElements.length; i++) {
    allChoicesElements[i].addEventListener('click', function() {
        userChoice = allChoicesElements[i].dataset.choice;
        game(userChoice);
    })
}

// Получаем выбор компьютера (рандомный)
function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * allChoicesElements.length);
    return allChoicesElements[randomChoice].dataset.choice;
}

function win() {
    gameResultElem.innerHTML = "You Win"
    userScore++;
    userScoreElem.innerHTML = userScore;
};
function lose() {
    gameResultElem.innerHTML = "You Lost"
    computerScore++;
    computerScoreElem.innerHTML = computerScore;
};
function draw() {
    gameResultElem.innerHTML = "It's a Draw"
};

// Игра
function game(user) {

    let computer = getComputerChoice();

    // Правила игры
    switch(user + " " + computer) {
        case "rock scissors":
        case "scissors paper":
        case "paper rock":
            win();
            break;
        case "scissors rock":
        case "paper scissors":
        case "rock paper":
            lose();
            break;
        case "scissors scissors":
        case "paper paper":
        case "rock rock":
            draw();
            break;
    }
}