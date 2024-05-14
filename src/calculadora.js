function CalculadoraDe(cadena) {
  if (cadena === "") {
    return 0;
  }

  let numeros = cadena.split(/[,-]/).map(Number);
  return numeros.reduce((total, num) => total + num, 0);
}

export default CalculadoraDe;