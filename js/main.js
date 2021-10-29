let userScore = 0
let aiScore = 0
const userscoreSpan = document.getElementById('userScore')
const aiscoreSpan = document.getElementById('aiScore')
const message = document.getElementById('message')
const rock = document.getElementById('rock') 
const paper = document.getElementById('paper')
const scissor = document.getElementById('scissor')
const btnReset = document.getElementById('btn-reset')
const userScoreFromStorage = JSON.parse(localStorage.getItem('userScore'))
const aiScoreFromStorage = JSON.parse(localStorage.getItem('aiScore'))

if(userScoreFromStorage){
    userscoreSpan.textContent = userScoreFromStorage
    userScore = userScoreFromStorage
}

if(aiScoreFromStorage){
    aiscoreSpan.textContent = aiScoreFromStorage
    aiScore = aiScoreFromStorage
}

btnReset.addEventListener('click', function() {
    localStorage.clear()
    userScore = 0
    aiScore = 0
    aiscoreSpan.textContent = aiScore
    userscoreSpan.textContent = userScore
    message.textContent = 'Game on!'
})

function getComputerChoice() {
    const choices = ['rock','paper','scissor']
    const randomChoice = Math.floor(Math.random() * 3)
    return choices[randomChoice]
}

function game(userChoice) {
    const computerChoice = getComputerChoice()
    switch (userChoice + computerChoice) {
        case 'rockscissor':
        case 'paperrock':
        case 'scissorpaper':
            win(userChoice, computerChoice)
            break
        case 'rockpaper':
        case 'paperscissor':
        case 'scissorrock':
            lose(userChoice, computerChoice)
            break
        case 'rockrock':
        case 'paperpaper':
        case 'scissorscissor':
            draw(userChoice, computerChoice)
            break
    }
}

function win(userChoice, aiChoice) {
    userScore++
    localStorage.setItem('userScore', JSON.stringify(userScore))
    let msgContent = ''
    userscoreSpan.textContent = userScore
    let res = message.textContent = `Your ${userChoice} beats AI's ${aiChoice}`
    msgContent = res
    const userChoiceimg = document.getElementById(userChoice)
    userChoiceimg.classList.add('win')
    setTimeout(() => userChoiceimg.classList.remove('win'), 500)
}

function lose(userChoice, aiChoice) {
    aiScore++
    localStorage.setItem('aiScore', JSON.stringify(aiScore))
    let msgContent = ''
    aiscoreSpan.textContent = aiScore
    let res = message.textContent = `AI's ${aiChoice} beats your ${userChoice}`
    msgContent = res
    const userChoiceimg = document.getElementById(userChoice)
    userChoiceimg.classList.add('lose')
    setTimeout(() => userChoiceimg.classList.remove('lose'), 500)
}

function draw(userChoice, aiChoice) {
    message.textContent = `'You picked ${aiChoice} and AI picked ${userChoice} It's a DRAW!`
    const userChoiceimg = document.getElementById(userChoice)
    userChoiceimg.classList.add('draw')
    setTimeout(() => userChoiceimg.classList.remove('draw'), 500)
}

function main() {
    rock.addEventListener('click', function(){
        game('rock')
    })
    paper.addEventListener('click', function(){
        game('paper')
    })
    scissor.addEventListener('click', function(){
        game('scissor')
    })
}

main()