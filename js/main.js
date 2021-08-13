let userScore = 0;
let aiScore = 0;
const userscoreSpan = document.getElementById('userScore');
const aiscoreSpan = document.getElementById('aiScore');
const message = document.getElementById('message');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');

function getComputerChoice() {
    const choices = ['rock','paper','scissor'];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rockscissor':
        case 'paperrock':
        case 'scissorpaper':
            win(userChoice, computerChoice);
            break;
        case 'rockpaper':
        case 'paperscissor':
        case 'scissorrock':
            lose(userChoice, computerChoice);
            break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorscissor':
            draw(userChoice, computerChoice);
            break;
    }
}

function win(userChoice, aiChoice) {
    userScore++;
    userscoreSpan.innerHTML = userScore;
    aiscoreSpan.innerHTML = aiScore;
    message.innerHTML = 'Your ' + userChoice + ' beats AI\'s ' + aiChoice ;
    const userChoiceimg = document.getElementById(userChoice);
    userChoiceimg.classList.add('win');
    setTimeout(() => userChoiceimg.classList.remove('win'), 500);
}

function lose(userChoice, aiChoice) {
    aiScore++;
    userscoreSpan.innherHTML = userScore;
    aiscoreSpan.innerHTML = aiScore;
    message.innerHTML = 'AI\'s ' + aiChoice + ' beats your ' + userChoice;
    const userChoiceimg = document.getElementById(userChoice);
    userChoiceimg.classList.add('lose');
    setTimeout(() => userChoiceimg.classList.remove('lose'), 500);
}

function draw(userChoice, aiChoice) {
    message.innerHTML = 'You picked ' + aiChoice + ' and AI picked ' + userChoice + '. It\'s a DRAW!';
    const userChoiceimg = document.getElementById(userChoice);
    userChoiceimg.classList.add('draw');
    setTimeout(() => userChoiceimg.classList.remove('draw'), 500);
}

function main() {
    rock.addEventListener('click', function(){
        game('rock');
    })
    paper.addEventListener('click', function(){
        game('paper');
    })
    scissor.addEventListener('click', function(){
        game('scissor');
    })
}

main();