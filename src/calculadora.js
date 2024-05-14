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

  // Dividimos la cadena usando el delimitador personalizado o los delimitadores predeterminados
  const regex = new RegExp(`[${delimitador}\\n-]+`);
  numeros = cadena.split(regex);

  // Convertimos los elementos en números y sumamos
  const suma = numeros.reduce((total, num) => total + parseInt(num), 0);

  return suma;
}

export default CalculadoraDe;



