import score from "./tennis.js";

describe("tennis", () => {
    it("Deberia tomar en cuenta el caso de inicio", () => {
        expect(score(0,0)).toEqual("Love - Love");
    });

    
});


