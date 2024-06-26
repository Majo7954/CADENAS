import SumadoraDe from "./calculadora.js";

describe("Calcular Cadena", () => {
  it("devuelve 0 si la cadena está vacía", () => {
    expect(SumadoraDe("")).toEqual(0);
  });

  it("devuelve el número cuando la cadena tiene un solo elemento", () => {
    expect(SumadoraDe("5")).toEqual(5);
  });

  it("devuelve la suma de dos números separados por coma", () => {
    expect(SumadoraDe("1,2")).toEqual(3);
  });

  it("devuelve la suma de tres números separados por coma", () => {
    expect(SumadoraDe("1,2,3")).toEqual(6);
  });

  it("devuelve la suma de números separados por coma o guion", () => {
    expect(SumadoraDe("1,2-3")).toEqual(6);
  });

  it("devuelve la suma de números usando delimitador especificado", () => {
    expect(SumadoraDe("//[;]0;7;4")).toEqual(11);
  });

  it("ignora los números mayores a 1000", () => {
    expect(SumadoraDe("2,1001")).toEqual(2);
  });
});
