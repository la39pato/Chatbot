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
});


