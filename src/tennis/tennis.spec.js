import Tennis from "./tennis.js";

describe("tennis", () => {
    /*---CASO DE INICIO---*/
    it("Deberia tomar en cuenta el caso de inicio", () => {
        let tennis = new Tennis ();
        expect(tennis.score()).toEqual("Love - Love");
    });

    /*---CASOS JUGADOR 1---*/
    it("Jugador 1 anota un punto", () => {
       let tennis = new Tennis ();
        tennis.player1Scores();
        expect(tennis.score()).toEqual("15 - Love");
    });

    it("Jugador 1 anota 2 puntos", () => {
       let tennis = new Tennis ();
        tennis.player1Scores();
        tennis.player1Scores();
        expect(tennis.score()).toEqual("30 - Love");
    });

    it("Jugador 1 anota 3 puntos", () => {
       let tennis = new Tennis ();
        tennis.player1Scores();
        tennis.player1Scores();
        tennis.player1Scores();
        expect(tennis.score()).toEqual("40 - Love");
    });

    it("Jugador 1 anota 4 puntos", () => {
         let tennis = new Tennis ();
        tennis.player1Scores();
        tennis.player1Scores();
        tennis.player1Scores();
        tennis.player1Scores();
        expect(tennis.score()).toEqual("Game for Player 1");
    });

    /*---CASOS JUGADOR 2---*/
    it("Jugador 2 anota un punto", () => {
       let tennis = new Tennis ();
        tennis.player2Scores();
        expect(tennis.score()).toEqual("Love - 15");
    });

    it("Jugador 2 anota 2 puntos", () => {
         let tennis = new Tennis ();
        tennis.player2Scores();
        tennis.player2Scores();
        expect(tennis.score()).toEqual("Love - 30");
    });

    it("Jugador 2 anota 3 puntos", () => {
         let tennis = new Tennis ();
        tennis.player2Scores();
        tennis.player2Scores();
        tennis.player2Scores();
        expect(tennis.score()).toEqual("Love - 40");
    });

    it ( "Jugador 2 anota 4 puntos", () => {
         let tennis = new Tennis ();
        tennis.player2Scores();
        tennis.player2Scores();
        tennis.player2Scores();
        tennis.player2Scores();
        expect(tennis.score()).toEqual("Game for Player 2");
    });

    /*---CASO EMPATE ( DEUCE )---*/
    it("Empate a 3 puntos", () => {
        let tennis = new Tennis ();
        tennis.player1Scores();
        tennis.player1Scores();
        tennis.player1Scores();
        tennis.player2Scores();
        tennis.player2Scores();
        tennis.player2Scores();
        expect(tennis.score()).toEqual("Deuce");      
    });

    /*---CASOS despues del DEUCE ---*/
    it("Jugador 1 anota un punto despues del DEUCE", () => {    
        let tennis = new Tennis ();
        tennis.player1Scores();
        tennis.player1Scores();
        tennis.player1Scores();
        tennis.player2Scores();
        tennis.player2Scores();
        tennis.player2Scores();
        tennis.player1Scores();
        expect(tennis.score()).toEqual("Advantage for Player 1");
    });

    it("Jugador 1 anota dos puntos despues del DEUCE", () => {
        let tennis = new Tennis ();
        tennis.player1Scores();
        tennis.player1Scores();
        tennis.player1Scores();
        tennis.player2Scores();
        tennis.player2Scores();
        tennis.player2Scores();
        tennis.player1Scores();
        tennis.player1Scores();
        expect(tennis.score()).toEqual("Game for Player 1");
    });
})
