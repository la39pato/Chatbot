import { saludar } from "./saludar.js";

describe("Saludar", () => {
  it("deberia saludar a una persona", () => {
    expect(saludar("Juan")).toEqual("Hola, Juan");
  });
});
