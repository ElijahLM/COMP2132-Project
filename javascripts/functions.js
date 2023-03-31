function randomNumber(maxRoll) {
    return Math.floor(Math.random() * (maxRoll - minRoll + 1) + minRoll);
}

function displayData() {

    playerData[0].innerHTML = player1.describeSelf();
    playerData[1].innerHTML = player2.describeSelf();
}

function displayWinner() {
    if(player1.score > player2.score) {
        winner.innerHTML = 'Player 1 Wins!';
        winner.style.color = "rgb(0, 204, 0)";
    } else if (player1.score < player2.score) {
        winner.innerHTML = 'Player 2 Wins!';
        winner.style.color = "rgb(204, 51, 255)";
    } else {
        winner.innerHTML = 'It was a Draw!';
        winner.style.color = "rgb(128, 128, 128)";
    }

    popup.style.display = "block";
    
    popupInterval = setInterval(function(){

        if(popupOpacity < maxOpacity) {

            popup.style.opacity = popupOpacity;
            popupOpacity += 0.1;
        }
    }, opacityInterval);

    popupOpacity = 0;
}

function rollDice() {
    player1.diceInHand.forEach(function(die){
        rolledDice.push(die.roll());
        diceDisplay[index].setAttribute('src', dicePath + rolledDice[index] + '.jpg');
        index++;
    });

    player1.tallyPoints(rolledDice[0], rolledDice[1]);

    player2.diceInHand.forEach(function(die){
        rolledDice.push(die.roll());
        diceDisplay[index].setAttribute('src',dicePath + rolledDice[index] + '.jpg');
        index++;
    });

    player2.tallyPoints(rolledDice[2], rolledDice[3]);

    displayData();

    rolledDice = [];
    index = 0;

    currentRound++;
    round.innerHTML = `Round: ${currentRound}`;

    if(currentRound > maxRounds) {
        round.innerHTML = `GAME END`;
        rollbtn.setAttribute('disabled', true);

        displayWinner();
    }

    resetbtn.removeAttribute('disabled');
}

function resetGame() {
    popup.style.display = "none";
    popup.style.opacity = 0;
    clearInterval(popupInterval);

    player1.resetPoints();
    player2.resetPoints();

    currentRound = 1;
    round.innerHTML = `Round: ${currentRound}`;

    displayData();

    rollbtn.removeAttribute('disabled');
    resetbtn.setAttribute('disabled', true);
}
