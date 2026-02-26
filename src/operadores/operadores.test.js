import {sumar, restar, multiplicar, dividir} from './operadores.js';

describe("Operadores", () => {
  
  // SUMA
  it("Suma de 2 numeros enteros", () => {
    expect(sumar(1,2)).toEqual(3);
  });
  it("Suma de 2 numeros decimales", () => {
    expect(sumar(1.5,2)).toEqual(3.5);
  });
  it("Suma de un numero entero y un numero decimal", () => {
    expect(sumar(1,2.5)).toEqual(3.5);
  });
  it("Suma de un numero negativo y un numero positivo", () => {
    expect(sumar(-1,2)).toEqual(1);
  });
  it("Suma de un numero negativo y un numero negativo", () => {
    expect(sumar(-1,-2)).toEqual(-3);
  });

  // RESTA
  it("Resta de 2 numeros enteros", () => {
    expect(restar(4,2)).toEqual(2);
  });
  it("Resta de 2 numeros decimales", () => {
    expect(restar(1.5,2)).toEqual(-0.5);
  });
  it("Resta de un numero entero y un numero decimal", () => {
    expect(restar(1,2.5)).toEqual(-1.5);
  });
  it("Resta de un numero negativo y un numero positivo", () => {
    expect(restar(-1,2)).toEqual(-3);
  });
  it("Resta de un numero negativo y un numero negativo", () => {
    expect(restar(-1,-2)).toEqual(1);
  });

  // MULTIPLICACION
  it("Multiplicacion de 2 numeros enteros", () => {
    expect(multiplicar(4,2)).toEqual(8);
  });
  it("Multiplicacion de 2 numeros decimales", () => {
    expect(multiplicar(1.5,2)).toEqual(3);
  });
  it("Multiplicacion de un numero entero y un numero decimal", () => {
    expect(multiplicar(1,2.5)).toEqual(2.5);
  });
  it("Multiplicacion de un numero negativo y un numero positivo", () => {
    expect(multiplicar(-1,2)).toEqual(-2);
  });  

  // DIVISION
  it("Division de 2 numeros enteros", () => {
    expect(dividir(4,2)).toEqual(2);
  });
  it("Division de 2 numeros decimales", () => {
    expect(dividir(1.5,2)).toEqual(0.75);
  });
  it("Division de un numero entero y un numero decimal", () => {
    expect(dividir(1,2.5)).toEqual(0.4);
  });
  it("Division de un numero negativo y un numero positivo", () => {
    expect(dividir(-1,2)).toEqual(-0.5);
  });
  it("Division por 0", () => {
    expect(dividir(1,0)).toEqual(Infinity);
  });
});