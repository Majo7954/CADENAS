function CalculadoraDe(cadena) {
  if (cadena === "") {
    return 0;
  }

  let delimitador = ",";
  let numeros = [];

  if (cadena.startsWith("//")) {
    const delimitadorFinal = cadena.indexOf("[");
    const delimitadorFinalFinal = cadena.indexOf("]");
    delimitador = cadena.substring(delimitadorFinal + 1, delimitadorFinalFinal);
    cadena = cadena.substring(delimitadorFinalFinal + 3);
  }

  const regex = new RegExp(`[${delimitador}\\n-]+`);
  numeros = cadena.split(regex);

  const suma = numeros.reduce((total, num) => {
    const parsedNum = parseInt(num);
    return !isNaN(parsedNum) && parsedNum <= 1000 ? total + parsedNum : total;
  }, 0);

  return suma;
}

export default CalculadoraDe;




