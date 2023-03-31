const diceDisplay = document.getElementsByClassName('dice');
const playerData = document.getElementsByClassName('player-data');
const rollbtn = document.getElementById('roll');
const resetbtn = document.getElementById('reset');
const popup = document.getElementById('pop-up');
const winner = document.getElementById('winner');
const round = document.getElementById('round');

let index = 0;
let currentRound = 1;
let rolledDice = [];
let popupInterval;
let popupOpacity = 0;

const minRoll = 1;
const opacityInterval = 100;
const maxOpacity = 1;
const maxRounds = 3;
const dicePath = `images/dice-images/dice_`;
