class GuessGame {
    constructor() {
        this.min = 1;
        this.max = 100;
    }

    start() {
        alert("Think of a number between 1 to 100.");
        this.guess();
    }

    guess() {
        while (true) {
            let guessNumber = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;

            let answer = prompt("Is your number " + guessNumber + "? Yes [y] | No [n]");

            if (answer === 'y') {
                alert("I got it! Your number is " + guessNumber);
                break;
            } else if (answer === 'n') {
                
            } else {
                alert("Please, type [y] or [n].");
            }
        }
    }
}

// Usage
const game = new GuessGame();
game.start();
