import CalculadoraDe from "./calculadora.js";

describe("Calcular Cadena", () => {
  it("devuelve 0 si la cadena está vacía", () => {
    expect(CalculadoraDe("")).toEqual(0);
  });

  it("devuelve el número cuando la cadena tiene un solo elemento", () => {
    expect(CalculadoraDe("5")).toEqual(5);
  });

  it("devuelve la suma de dos números separados por coma", () => {
    expect(CalculadoraDe("1,2")).toEqual(3);
  });

  it("devuelve la suma de tres números separados por coma", () => {
    expect(CalculadoraDe("1,2,3")).toEqual(6);
  });
});
