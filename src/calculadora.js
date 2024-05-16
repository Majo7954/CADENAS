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

  const suma = numeros.reduce((total, num) => {
    const parsedNum = parseInt(num);
    return !isNaN(parsedNum) && parsedNum <= 1000 ? total + parsedNum : total;
  }, 0);

  return suma;
}

export default SumadoraDe;




