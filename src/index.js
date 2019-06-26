import Gamer from './gamer';
import {initPlayer} from './player';


const RESET_VALUE = 2;

let activePlayer = 0;
let current = 0;
const LIMIT = 100;
let playerNumber = 0;
const diceElement = document.querySelectorAll('.dice');

const limit = document.querySelector('.limit__content');

limit.value = LIMIT;

let players = [];


const initGame = () => {
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;
    diceElement.forEach(e => e.style.display = 'none');
    players = initPlayer(['player1', 'player2'], playerNumber);
    players.forEach((e, i) => {
        document.querySelector(`#name-${i}`).textContent = e.name
        e.resetScore();
    })


}

initGame();


limit.addEventListener('input', function ({target: {value}}) {
    if (+value.match(/^\d+$/)) {
        limit.value = +value;
        limit.focus()
        limit.value.selectionStart = limit.value.length
    } else {
        limit.value = null;
    }
})

limit.addEventListener('blur', ({target: {value}}) => {
    if (value.length <= 0 || value == 0) {
        limit.value = 100
    }

})


document.querySelector('.btn-roll').addEventListener('click', function () {
    let dice = [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];

    dice.forEach((e, i) => diceElement[i].src = `dice-${e}.png`)

    diceElement.forEach(e => e.style.display = 'block');

    if (diceValidate(dice, RESET_VALUE)) {
        current += sumDice(dice);
        document.getElementById('current-' + activePlayer).textContent = current;

        if (players[activePlayer].getScore() + current >= +limit.value) {
            players[activePlayer].winCount = 1;
            alert(` ${players[activePlayer].name} won!!!`);
            const winnerArr = getWinnerStore();
            if (winnerArr && winnerArr.length && winnerArr.some(e => e.name === players[activePlayer].name)) {

                winnerArr.forEach(e => {
                    if (e.name === players[activePlayer].name) {
                        e.winCount += players[activePlayer].winCount
                    }
                })
            } else {
                winnerArr.push(players[activePlayer])
            }

            localStorage.setItem('winner', JSON.stringify(winnerArr));
        }

    } else {
        changePlayer();
    }
});

const diceValidate = (arr, reset) => {
    if (arr.some(e => e === reset)) {
        return false
    }
    const filter = arr.filter((e, i) => arr.indexOf(e) === i);
    return filter.length > 1;
}

const sumDice = (arr) => {
    return arr.reduce((res, e) => (res + e), 0)
}

const changePlayer = () => {
    current = 0;
    document.getElementById('current-' + activePlayer).textContent = 0;
    document.querySelector(`.player-${activePlayer}-panel`).classList.toggle('active');
    activePlayer = +!activePlayer;
    diceElement.forEach(e => e.style.display = 'none');
    document.querySelector(`.player-${activePlayer}-panel`).classList.toggle('active');
}

document.querySelector('.btn-hold').addEventListener('click', function () {

    players[activePlayer].setScore(players[activePlayer].score += current);
    document.querySelector(`#score-${activePlayer}`).textContent = players[activePlayer].score;changePlayer(activePlayer);
});


document.querySelector('.btn-new').addEventListener('click', function () {
    initGame();
});
document.querySelector('.btn-win').addEventListener('click', function () {
    const winner = getWinnerStore();
    if (winner.length) {
        winner.sort((a, b) => b.winCount - a.winCount)
        const list = winner.sort().map(e => (`${e.name} - ${e.winCount}\n\r`))
        alert(list)
    } else {
        alert(`Тут пока пусто`)
    }
});
