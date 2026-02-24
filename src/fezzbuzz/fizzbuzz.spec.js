//codigo de secuencia fizzbuzz 
import fizzbuzz from "./fizzbuzz.js";

describe("FizzBuzz", () => {
    it("Deberia tomar en cuenta el caso de 0", () => {
        expect(fizzbuzz(0)).toEqual("");
    });

    it("Deberia tomar en cuenta el caso de un numero", () => {
        expect(fizzbuzz(1)).toEqual("1");
    });
});

