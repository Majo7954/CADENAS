function CalculadoraDe(cadena) {
  if (cadena === "") {
    return 0;
  }

  const numeros = cadena.split(",");
  const suma = numeros.reduce((total, num) => total + parseInt(num), 0);

  return suma;
}

export default CalculadoraDe;
