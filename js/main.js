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

btnReset.addEventListener('click', () => {
    localStorage.clear()
    userScore = 0
    aiScore = 0
    aiscoreSpan.textContent = aiScore
    userscoreSpan.textContent = userScore
    message.textContent = 'Game on!'
})

const getComputerChoice = () => {
    const choices = ['rock','paper','scissor']
    const randomChoice = Math.floor(Math.random() * choices.length)
    return choices[randomChoice]
}

const game = (userChoice, computerChoice = getComputerChoice()) => {
    switch (userChoice + " " + computerChoice) {
        case 'rock scissor':
        case 'paper rock':
        case 'scissor paper':
            win(userChoice, computerChoice)
            break
        case 'rock paper':
        case 'paper scissor':
        case 'scissor rock':
            lose(userChoice, computerChoice)
            break
        case 'rock rock':
        case 'paper paper':
        case 'scissor scissor':
            draw(userChoice, computerChoice)
            break
    }
}

const win = (userChoice, aiChoice) => {
    userScore++
    localStorage.setItem('userScore', JSON.stringify(userScore))
    userscoreSpan.textContent = userScore
    message.textContent = `Your ${userChoice} beats AI's ${aiChoice}`
    const userChoiceimg = document.getElementById(userChoice)
    userChoiceimg.classList.add('win')
    setTimeout(() => userChoiceimg.classList.remove('win'), 500)
}

const lose = (userChoice, aiChoice) => {
    aiScore++
    localStorage.setItem('aiScore', JSON.stringify(aiScore))
    aiscoreSpan.textContent = aiScore
    message.textContent = `AI's ${aiChoice} beats your ${userChoice}`
    const userChoiceimg = document.getElementById(userChoice)
    userChoiceimg.classList.add('lose')
    setTimeout(() => userChoiceimg.classList.remove('lose'), 500)
}

const draw = (userChoice, aiChoice) => {
    message.textContent = `You picked ${aiChoice} and AI picked ${userChoice} It's a DRAW!`
    const userChoiceimg = document.getElementById(userChoice)
    userChoiceimg.classList.add('draw')
    setTimeout(() => userChoiceimg.classList.remove('draw'), 500)
}

const main = () => {
    rock.addEventListener('click', () => {
        game('rock')
    })
    paper.addEventListener('click', () => {
        game('paper')
    })
    scissor.addEventListener('click', () => {
        game('scissor')
    })
}

main()