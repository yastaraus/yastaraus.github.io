let userScoreElem = document.querySelector('.user_score');
let computerScoreElem = document.querySelector('.computer_score');
let gameResultElem = document.querySelector('.game_result');
let userScore = 0;
let computerScore = 0;
let userChoice;

readLocalScoreData();

// Получаем все элементы с data-choice
let allChoicesElements = document.querySelectorAll('[data-choice]');

// Перебираем, слушаем все элементы с data-choice, шлем в функцию game()
for (let i = 0; i < allChoicesElements.length; i++) {
    allChoicesElements[i].addEventListener('click', function() {
        userChoice = allChoicesElements[i].dataset.choice;
        game(userChoice);
    })
};

// Получаем выбор компьютера (рандомный)
function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * allChoicesElements.length);
    return allChoicesElements[randomChoice].dataset.choice;
};

// При победе
function win() {
    gameResultElem.innerHTML = "You Win";
    userScore++;
    userScoreElem.innerHTML = userScore;
    writeLocalScoreData(userScore, computerScore);
};

// При поражении
function lose() {
    gameResultElem.innerHTML = "You Lost";
    computerScore++;
    computerScoreElem.innerHTML = computerScore;
    writeLocalScoreData(userScore, computerScore);
};

// При ничье
function draw() {
    gameResultElem.innerHTML = "It's a Draw";
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
};

// Пишем в local storage
function writeLocalScoreData(localUserScore, localComputerScore) {
    localStorage.setItem('user_score', localUserScore);
    localStorage.setItem('computer_score', localComputerScore);
};

// Читаем из local storage
function readLocalScoreData() {

    if (localStorage.getItem('user_score') === null) {
        localStorage.setItem('user_score', 0);
    }
    if (localStorage.getItem('computer_score') === null) {
        localStorage.setItem('computer_score', 0);
    }

    userScore = localStorage.getItem('user_score');
    computerScore = localStorage.getItem('computer_score');
    userScoreElem.innerHTML = localStorage.getItem('user_score');
    computerScoreElem.innerHTML = localStorage.getItem('computer_score');
};