let sumaTotal = 0;

while (true) {
  const numeroIngresado = prompt("Ingresa un número o pulsa 'cancelar' para salir:");

  if ( numeroIngresado === null) {
    break;
  }

  const numero = parseInt(numeroIngresado);

  if (!isNaN(numero)) {

    sumaTotal += numero;

  } else {

    alert("Número inválido, ingresa otro numero");
  }
}

alert("La suma total de los números ingresados es: " + sumaTotal);