import calcularCadena from "./calculadora.js";

describe("Calcular Cadena", () => {
  it("devuelve 0 si la cadena está vacía", () => {
    expect(calcularCadena("")).toEqual(0);
  });

  it("devuelve el número cuando la cadena tiene un solo elemento", () => {
    expect(calcularCadena("5")).toEqual(5);
  });
});
