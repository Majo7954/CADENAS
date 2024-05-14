import calcularCadena from "./calculadora.js";

describe("Calcular Cadena", () => {
  it("devuelve 0 si la cadena está vacía", () => {
    expect(calcularCadena("")).toEqual(0);
  });
});
