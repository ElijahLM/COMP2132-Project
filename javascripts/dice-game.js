const player1 = new Player();
const player2 = new Player();

player1.addDie(new Dice(6));
player1.addDie(new Dice(6));

player2.addDie(new Dice(6));
player2.addDie(new Dice(6));

rollbtn.addEventListener('click', rollDice);
resetbtn.addEventListener('click', resetGame);
