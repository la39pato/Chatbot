import { saludar, saludarhora, obtenerTratamiento } from "./saludar.js";

describe("Saludador", () => {
  it("Debe retornar 'Hola, Juan'", () => {
    expect(saludar("Juan")).toEqual("Hola, Juan");
  });
  it("Debe retornar un saludo respecto por hora e idioma", () => {
    expect(saludarhora(10, "en")).toEqual("Good morning");
    expect(saludarhora(15, "en")).toEqual("Good afternoon");
    expect(saludarhora(20, "en")).toEqual("Good evening");
    expect(saludarhora(10, "es")).toEqual("Buenos días");
    expect(saludarhora(15, "es")).toEqual("Buenas tardes");
    expect(saludarhora(20, "es")).toEqual("Buenas noches");
  });
  it("Debe retornar un saludo respecto a un trato (genero, edad e idioma)", () => {
    expect(obtenerTratamiento("m", 25, "en")).toEqual("young gentleman");
    expect(obtenerTratamiento("m", 35, "en")).toEqual("Mr.");
    expect(obtenerTratamiento("f", 25, "en")).toEqual("young lady");
    expect(obtenerTratamiento("f", 35, "en")).toEqual("Mrs.");
    expect(obtenerTratamiento("m", 25, "es")).toEqual("caballero");
    expect(obtenerTratamiento("m", 35, "es")).toEqual("Sr.");
    expect(obtenerTratamiento("f", 25, "es")).toEqual("señorita");
    expect(obtenerTratamiento("f", 35, "es")).toEqual("Sra.");
  });
});

