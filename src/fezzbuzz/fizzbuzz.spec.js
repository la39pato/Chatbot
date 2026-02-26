//codigo de secuencia fizzbuzz 
import fizzbuzz from "./fizzbuzz.js";

describe("FizzBuzz", () => {
    it("Deberia tomar en cuenta el caso de 0", () => {
        expect(fizzbuzz(0)).toEqual("");
    });

    it("Deberia tomar en cuenta el caso de un numero", () => {
        expect(fizzbuzz(1)).toEqual("1");
    });

    it("Deberia tomar en cuenta el caso de dos numeros", () => {
        expect(fizzbuzz(2)).toEqual("1 2");
    });

    it("Deberia tomar en cuenta el caso de un numero divisible por 3", () => {
        expect(fizzbuzz(3)).toEqual("1 2 Fizz");
    });
    
    it("Deberia tomar en cuenta los numeros que no sean divisibles por 3", () => {
        expect(fizzbuzz(4)).toEqual("1 2 Fizz 4");
    });

    it("Deberia tomar en cuenta los numeros que sean divisibles por 5", () => {
        expect(fizzbuzz(5)).toEqual("1 2 Fizz 4 Buzz");
    });

    it("Deberia tomar en cuenta los numeros que sean divisibles por 3 y 5", () => {
        expect(fizzbuzz(15)).toEqual("1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz");
    });
});
