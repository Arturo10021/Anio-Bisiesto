import  esBisiesto  from "./esBisiesto.js";

describe("Es Bisiesto", () => {
    it("Devolver que 2023 no es biciesto", () => {
        expect(esBisiesto(2023)).toEqual(false);
    });
    it("Devolver que 2024 es biciesto", () => {
        expect(esBisiesto(2024)).toEqual(true);
    });
});