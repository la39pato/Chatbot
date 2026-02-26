class Tennis{
    constructor() {
        this.player1points = 0;
    }
    score() {
        let player1Score = "Love ";
        if (this.player1points === 1) {
            player1Score = "15 ";
        }
        if (this.player1points === 2) {
            player1Score = "30 ";
        }
        return player1Score + "- Love";
    }

    player1Scores() {
        this.player1points++;
    }
}

export default Tennis;