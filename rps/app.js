let userScore = 0;
let computerScore = 0;

const userScoreElem = document.querySelector('.user_score');
const computerScoreElem = document.querySelector('.computer_score');
const gameResultElem = document.querySelector('.game_result');
const userResultElem = document.querySelector('.user-choice-img');
const computerResultElem = document.querySelector('.computer-choice-img');
const allChoicesElem = document.querySelectorAll('[data-choice]');
const clearLocalResultsElem = document.getElementById('clear_data');

readLocalData();

// Перебираем, слушаем все элементы с data-choice, шлем в функцию game()
for (let i = 0; i < allChoicesElem.length; i++) {
    let userChoice;
    allChoicesElem[i].addEventListener('click', function() {
        userChoice = allChoicesElem[i].dataset.choice;
        game(userChoice);
    })
};

// Получаем выбор компьютера (рандомный)
function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * allChoicesElem.length);
    return allChoicesElem[randomChoice].dataset.choice;
};

// Победа
function win() {
    showCompareResults()
    gameResultElem.textContent = "You Win";
    userScore++;
    updateScores();
    writeLocalData(userScore, computerScore);
};
// Поражение
function lose() {
    showCompareResults()
    gameResultElem.textContent = "You Lost";
    computerScore++;
    updateScores();
    writeLocalData(userScore, computerScore);
};
// Ничья
function draw() {
    showCompareResults() 
    gameResultElem.textContent = "It's a Draw";
};

// Игра
function game(user) {
    let computer = getComputerChoice();
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
    userResultElem.textContent = user;
    computerResultElem.textContent = computer;
};

// Пишем в local storage
function writeLocalData(localUserScore, localComputerScore) {
    localStorage.setItem('user_score', localUserScore);
    localStorage.setItem('computer_score', localComputerScore);
};

// Читаем из local storage
function readLocalData() {
    if (localStorage.getItem('user_score') === null) {
        localStorage.setItem('user_score', 0);
    } 
    if (localStorage.getItem('computer_score') === null) {
        localStorage.setItem('computer_score', 0);
    }
    userScore = localStorage.getItem('user_score');
    computerScore = localStorage.getItem('computer_score');
    userScoreElem.textContent = localStorage.getItem('user_score');
    computerScoreElem.textContent = localStorage.getItem('computer_score');
};

// Чистим экран и результаты игры
function toClearLocalResults() {
    hideCompareResults();
    userScore = 0;
    computerScore = 0;
    writeLocalData(userScore, computerScore);
    updateScores();
};
clearLocalResultsElem.onclick = toClearLocalResults;

// Показать результаты
function showCompareResults() {
    gameResultElem.classList.remove('visibility-hidden');
    userResultElem.classList.remove('visibility-hidden');
    computerResultElem.classList.remove('visibility-hidden');
};
// Скрыть результаты
function hideCompareResults() {
    gameResultElem.classList.add('visibility-hidden'); 
    userResultElem.classList.add('visibility-hidden');
    computerResultElem.classList.add('visibility-hidden');
};

// Обновляем результаты
function updateScores() {
    userScoreElem.textContent = userScore;
    computerScoreElem.textContent = computerScore;
};

function startGame() {
    
};