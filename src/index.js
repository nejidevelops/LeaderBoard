import './style.css';
import Game from './modules/game';
import Display from './modules/display.js';

const refreshBtn = document.querySelector('.refreshBtn');
const scoreForm = document.querySelector('.score-form');
const nameInput = document.querySelector('#name-input');
const scoreInput = document.querySelector('#score-input');
const game = new Game();
const display = new Display();
let gameId;

const startGame = () => {
  game
    .startGame('Football tournament')
    .then((response) => {
      gameId = response.result;
    });
};

const getLeaderBoard = () => {
  game.getLeaderBoard(gameId)
    .then((res) => {
      display.renderToPage(res.result);
    });
};

const addScore = (event) => {
  game.addScore(gameId, scoreInput.value, nameInput.value);

  scoreInput.value = '';
  nameInput.value = '';
  event.preventDefault();
};

document.addEventListener('DOMContentLoaded', startGame);
scoreForm.addEventListener('submit', addScore);
refreshBtn.addEventListener('click', getLeaderBoard);