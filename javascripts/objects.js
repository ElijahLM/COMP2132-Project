class Player {
    
    constructor() {
        this.diceInHand = [];
        this.result = 0;
        this.score = 0;
    }

    addDie(die) {
        this.diceInHand.push(die);
    }
    
    tallyPoints(roll1, roll2) {
        if(roll1 == 1 || roll2 == 1) {
    
            this.result = 0;
    
        } else if(roll1 == roll2) {
    
            this.result = (roll1 + roll2) * 2;
            this.score += this.result;
    
        } else {
            
            this.result = roll1 + roll2;
            this.score += this.result;
            
        }
    }

    resetPoints() {
        this.result = 0;
        this.score = 0;
    }

    describeSelf() {
        let playerData = '';
        playerData += `<p>Result: ${this.result}</p>`;
        playerData += `<p>Score: ${this.score}</p>`;

        return playerData;
    }
}

class Dice {
    
    constructor(faces) {
        this.faces = faces;
    }

    roll() {
        return randomNumber(this.faces);
    }
}
