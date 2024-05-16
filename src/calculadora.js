function SumadoraDe(cadena) {
  if (cadena === "") {
    return 0;
  }

  let delimitador = ",";
  let numeros = [];

  if (cadena.startsWith("//")) {
    const indiceInicioDelimitador = cadena.indexOf("[");
    const indiceFinDelimitador = cadena.indexOf("]");
    delimitador = cadena.substring(indiceInicioDelimitador + 1, indiceFinDelimitador);
    cadena = cadena.substring(indiceFinDelimitador + 3);
  }

  const expresionDelimitadores = new RegExp(`[${delimitador}\\n-]+`);
  numeros = cadena.split(expresionDelimitadores);

  const suma = CalcularTotalDe(numeros);

  return suma;
}

function CalcularTotalDe(numeros) {
  return numeros.reduce((total, num) => {
    const numParseado = parseInt(num);
    if (!isNaN(numParseado) && numParseado <= 1000) {
      return total + numParseado;
    } else {
      return total;
    }
  }, 0);
}

export default SumadoraDe;




