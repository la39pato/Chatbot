class Tennis{
    constructor() {
        this.player1points = 0;
        this.player2points = 0;
    }
    score() {
        /*---Ganan el juego---*/
        if (this.player1points === 4) {
            return "Game for Player 1";
        }
        if (this.player2points === 4) {
            return "Game for Player 2";
        }
        
        /*---Ganan 1 punto---*/
        let player1Score = "Love ";
        if (this.player1points === 1) {
            player1Score = "15 ";
        }
        let player2Score = " Love";
        if(this.player2points === 1) {
            player2Score = " 15";
        }

        /*---Ganan 2 puntos---*/
        if (this.player1points === 2) {
            player1Score = "30 ";
        }
        if (this.player2points === 2) {
            player2Score = " 30";
        }
        
        /*---Ganan 3 puntos---*/
        if (this.player1points === 3) {
            player1Score = "40 ";
        }
        if (this.player2points === 3) {
            player2Score = " 40";
        }

        return player1Score + "-" + player2Score;
    }

    player1Scores() {
        this.player1points++;
    }
    player2Scores() {
        this.player2points++;
    }
}

export default Tennis;