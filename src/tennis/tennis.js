class Tennis {
    constructor() {
        this.player1points = 0;
        this.player2points = 0;
    }

    score() {
        const diferenciascore = this.player1points - this.player2points;

        // Game
        if (this.player1points >= 4 || this.player2points >= 4) {
            if (diferenciascore >= 2) return "Game for Player 1";
            if (diferenciascore <= -2) return "Game for Player 2";
            if (diferenciascore === 1) return "Advantage for Player 1";
            if (diferenciascore === -1) return "Advantage for Player 2";
        }

        // Deuce
        if (this.player1points >= 3 && this.player1points === this.player2points) {
            return "Deuce";
        }

        const scores = ["Love", "15", "30", "40"];
        return scores[this.player1points] + " - " + scores[this.player2points];
    }

    player1Scores() {
        this.player1points++;
    }

    player2Scores() {
        this.player2points++;
    }
}

export default Tennis;