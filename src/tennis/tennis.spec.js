import Tennis from "./tennis.js";

describe("tennis", () => {
    it("Deberia tomar en cuenta el caso de inicio", () => {
        let tennis = new Tennis ();
        expect(tennis.score()).toEqual("Love - Love");
    });

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

    it("Jugador 2 anota un punto", () => {
       let tennis = new Tennis ();
        tennis.player2Scores();
        expect(tennis.score()).toEqual("Love - 15");
    });

});


